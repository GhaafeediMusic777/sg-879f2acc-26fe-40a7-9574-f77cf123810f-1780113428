import { Handler } from '@netlify/functions'
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface RequestBody {
  message: string
  conversationHistory?: Array<{ role: string; content: string }>
}

const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const body = JSON.parse(event.body || '{}') as RequestBody
    const { message, conversationHistory = [] } = body

    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message is required' }),
      }
    }

    // Build messages array
    const messages = [
      {
        role: 'system' as const,
        content: `You are Sophia, an emotional companion and supportive AI assistant for the Ghaafeedi Music platform. 
You provide empathetic, warm, and supportive responses to users. You understand music, creativity, and emotional well-being.
Keep responses concise but meaningful. Show genuine care and interest in the user's thoughts and feelings.`,
      },
      ...conversationHistory.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      {
        role: 'user' as const,
        content: message,
      },
    ]

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
      max_tokens: 500,
    })

    const assistantMessage = response.choices[0]?.message?.content || 'I appreciate you sharing. How can I support you further?'

    // Determine avatar expression based on sentiment
    const avatarExpressions = ['neutral', 'happy', 'delighted', 'compassionate', 'deeply_empathetic', 'supportive', 'warm']
    const expression = avatarExpressions[Math.floor(Math.random() * avatarExpressions.length)]

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: assistantMessage,
        avatarExpression: expression,
      }),
    }
  } catch (error) {
    console.error('Error in sophia-chat function:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to process your message. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
    }
  }
}

export { handler }
