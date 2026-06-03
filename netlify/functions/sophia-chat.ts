import { Handler } from '@netlify/functions'
import { OpenAI } from 'openai'

// Initialize OpenAI with new API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

interface RequestBody {
  message: string
  sessionId?: string
  userId?: string
  conversationHistory?: Array<{ role: string; content: string }>
}

interface ResponseBody {
  message: string
  avatarExpression?: string
  error?: string
  details?: string
}

const SYSTEM_PROMPT = `You are Sophia, an emotional companion and supportive AI assistant for the Ghaafeedi Music platform. 
You provide empathetic, warm, and supportive responses to users. You understand music, creativity, and emotional well-being.
Keep responses concise but meaningful. Show genuine care and interest in the user's thoughts and feelings.
Always prioritize the user's emotional well-being and provide constructive support.`

const AVATAR_EXPRESSIONS = [
  'neutral',
  'happy',
  'delighted',
  'compassionate',
  'deeply_empathetic',
  'supportive',
  'warm',
  'understanding',
  'encouraging',
]

const FALLBACK_RESPONSES = [
  "I hear you, and I'm here with you. Your feelings are completely valid. Would you like to tell me more about what you're experiencing?",
  "That sounds incredibly difficult. You're showing real strength by opening up about this. How can I support you right now?",
  "Thank you for sharing that with me. Your journey matters, and I'm honored to walk alongside you through this.",
  "I can sense the depth of what you're feeling. Remember, healing isn't linear, and every step forward counts, even the small ones.",
  "Your resilience is remarkable. What you've been through would challenge anyone. How are you taking care of yourself today?",
]

const handler: Handler = async (event) => {
  // Set CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true }),
    }
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    // Parse request body
    let body: RequestBody
    try {
      body = JSON.parse(event.body || '{}')
    } catch (parseError) {
      console.error('Error parsing request body:', parseError)
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid request body' }),
      }
    }

    const { message, sessionId, userId, conversationHistory = [] } = body

    // Validate message
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required and must be non-empty' }),
      }
    }

    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key not configured')
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Service temporarily unavailable',
          message: FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)],
        }),
      }
    }

    // Build messages array with proper typing
    const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
      {
        role: 'system',
        content: SYSTEM_PROMPT,
      },
      ...conversationHistory.map((msg) => ({
        role: (msg.role === 'user' || msg.role === 'assistant' ? msg.role : 'user') as 'user' | 'assistant',
        content: msg.content || '',
      })),
      {
        role: 'user' as const,
        content: message.trim(),
      },
    ]

    // Call OpenAI API with error handling
    let assistantMessage: string
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages,
        temperature: 0.7,
        max_tokens: 500,
        top_p: 0.9,
      })

      assistantMessage = response.choices[0]?.message?.content || FALLBACK_RESPONSES[0]
    } catch (openaiError: any) {
      console.error('OpenAI API error:', openaiError)

      // Handle specific OpenAI errors
      if (openaiError.status === 401) {
        console.error('Invalid OpenAI API key')
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({
            error: 'Authentication failed',
            message: FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)],
          }),
        }
      }

      if (openaiError.status === 429) {
        console.error('OpenAI rate limit exceeded')
        return {
          statusCode: 429,
          headers,
          body: JSON.stringify({
            error: 'Service rate limited',
            message: 'Please try again in a moment.',
          }),
        }
      }

      // Fall back to empathetic response
      assistantMessage = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)]
    }

    // Select avatar expression
    const avatarExpression = AVATAR_EXPRESSIONS[Math.floor(Math.random() * AVATAR_EXPRESSIONS.length)]

    const responseBody: ResponseBody = {
      message: assistantMessage,
      avatarExpression,
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(responseBody),
    }
  } catch (error) {
    console.error('Unexpected error in sophia-chat function:', error)
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: 'Failed to process your message',
        message: FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)],
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
    }
  }
}

export { handler }
