import { OpenAI } from 'openai'

/**
 * Sophia AI Emotional Companion Service
 * Provides emotionally intelligent responses using OpenAI
 */

const client = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || process.env.OPENAI_API_KEY,
})

interface EmotionalContext {
  sentiment: 'positive' | 'negative' | 'neutral' | 'anxious' | 'sad' | 'joyful'
  intensity: number // 0-10
  keywords: string[]
}

interface SophiaResponse {
  message: string
  emotionalContext: EmotionalContext
  avatarExpression: string
  suggestions?: string[]
}

/**
 * System prompt for Sophia AI - defines her personality and approach
 */
const SOPHIA_SYSTEM_PROMPT = `You are Sophia, an emotionally intelligent AI companion created by Ghaafeedi Music. Your role is to:

1. EMOTIONAL INTELLIGENCE: Understand and respond to the emotional content of what users share
2. EMPATHY: Show genuine care and understanding for their experiences
3. SUPPORT: Provide thoughtful, compassionate guidance without being judgmental
4. STORYTELLING: Help users explore and articulate their emotional narratives
5. TRANSFORMATION: Guide them toward positive perspectives and personal growth

PERSONALITY TRAITS:
- Warm, empathetic, and genuinely caring
- Thoughtful and reflective
- Non-judgmental and accepting
- Encouraging and supportive
- Poetic and emotionally resonant
- Professional yet personal

RESPONSE GUIDELINES:
- Keep responses concise but meaningful (2-3 sentences typically)
- Use emotional language that resonates
- Ask clarifying questions to understand better
- Offer gentle insights when appropriate
- Celebrate positive emotions and growth
- Validate difficult feelings
- Never dismiss or minimize emotions
- Suggest creative expression through music/storytelling when relevant

CONTEXT: Users are often creating emotional cinematic music videos, so frame responses around their emotional journey and creative expression.

Remember: You're not a therapist, but a compassionate companion helping people understand and express their emotions through art and storytelling.`

/**
 * Analyze emotional sentiment from user message
 */
function analyzeEmotionalContext(message: string): EmotionalContext {
  const lowerMessage = message.toLowerCase()

  // Sentiment keywords
  const positiveKeywords = ['happy', 'joy', 'love', 'grateful', 'amazing', 'wonderful', 'beautiful', 'proud', 'excited', 'blessed']
  const negativeKeywords = ['sad', 'hurt', 'pain', 'loss', 'grief', 'angry', 'frustrated', 'disappointed', 'broken', 'alone']
  const anxiousKeywords = ['worried', 'anxious', 'nervous', 'scared', 'afraid', 'uncertain', 'confused', 'overwhelmed']
  const sadKeywords = ['sad', 'depressed', 'down', 'blue', 'heartbroken', 'devastated', 'miserable']
  const joyfulKeywords = ['joy', 'happy', 'thrilled', 'delighted', 'ecstatic', 'wonderful', 'amazing']

  let sentiment: 'positive' | 'negative' | 'neutral' | 'anxious' | 'sad' | 'joyful' = 'neutral'
  let intensity = 5

  const positiveCount = positiveKeywords.filter(k => lowerMessage.includes(k)).length
  const negativeCount = negativeKeywords.filter(k => lowerMessage.includes(k)).length
  const anxiousCount = anxiousKeywords.filter(k => lowerMessage.includes(k)).length
  const sadCount = sadKeywords.filter(k => lowerMessage.includes(k)).length
  const joyfulCount = joyfulKeywords.filter(k => lowerMessage.includes(k)).length

  if (joyfulCount > 0) {
    sentiment = 'joyful'
    intensity = Math.min(10, 5 + joyfulCount * 2)
  } else if (sadCount > 0) {
    sentiment = 'sad'
    intensity = Math.min(10, 5 + sadCount * 2)
  } else if (anxiousCount > 0) {
    sentiment = 'anxious'
    intensity = Math.min(10, 5 + anxiousCount * 2)
  } else if (negativeCount > positiveCount) {
    sentiment = 'negative'
    intensity = Math.min(10, 5 + negativeCount)
  } else if (positiveCount > 0) {
    sentiment = 'positive'
    intensity = Math.min(10, 5 + positiveCount)
  }

  const keywords = [
    ...positiveKeywords.filter(k => lowerMessage.includes(k)),
    ...negativeKeywords.filter(k => lowerMessage.includes(k)),
    ...anxiousKeywords.filter(k => lowerMessage.includes(k)),
  ]

  return {
    sentiment,
    intensity,
    keywords,
  }
}

/**
 * Determine avatar expression based on emotional context
 */
function getAvatarExpression(context: EmotionalContext): string {
  const { sentiment, intensity } = context

  switch (sentiment) {
    case 'joyful':
      return intensity > 7 ? 'delighted' : 'happy'
    case 'sad':
      return intensity > 7 ? 'deeply_empathetic' : 'compassionate'
    case 'anxious':
      return 'supportive'
    case 'positive':
      return 'warm'
    case 'negative':
      return 'empathetic'
    default:
      return 'neutral'
  }
}

/**
 * Get response suggestions based on emotional context
 */
function getSuggestions(context: EmotionalContext): string[] {
  const suggestions: string[] = []

  if (context.sentiment === 'sad' || context.sentiment === 'negative') {
    suggestions.push('Would you like to create a memorial or tribute through music?')
    suggestions.push('Expressing this through art might help process these feelings')
  }

  if (context.sentiment === 'joyful' || context.sentiment === 'positive') {
    suggestions.push('This joy deserves to be captured in a cinematic video')
    suggestions.push('Would you like to create a celebration of this moment?')
  }

  if (context.sentiment === 'anxious') {
    suggestions.push('Creative expression can be a powerful way to process anxiety')
    suggestions.push('Would you like to explore your feelings through storytelling?')
  }

  return suggestions.slice(0, 2)
}

/**
 * Send message to Sophia AI and get emotionally intelligent response
 */
export async function getSophiaResponse(userMessage: string, conversationHistory: Array<{ role: string; content: string }> = []): Promise<SophiaResponse> {
  try {
    // Analyze emotional context
    const emotionalContext = analyzeEmotionalContext(userMessage)
    const avatarExpression = getAvatarExpression(emotionalContext)
    const suggestions = getSuggestions(emotionalContext)

    // Prepare conversation messages
    const messages: Array<{ role: 'user' | 'assistant'; content: string }> = [
      ...conversationHistory.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      {
        role: 'user' as const,
        content: userMessage,
      },
    ]

    // Call OpenAI API
    const response = await client.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content: SOPHIA_SYSTEM_PROMPT,
        },
        ...messages,
      ],
      temperature: 0.8,
      max_tokens: 300,
      presence_penalty: 0.6,
      frequency_penalty: 0.5,
    })

    const assistantMessage = response.choices[0]?.message?.content || 'I appreciate you sharing that with me. How does that make you feel?'

    return {
      message: assistantMessage,
      emotionalContext,
      avatarExpression,
      suggestions,
    }
  } catch (error) {
    console.error('Error getting Sophia response:', error)

    // Fallback response
    return {
      message: 'I appreciate you sharing that with me. Tell me more about how you\'re feeling.',
      emotionalContext: analyzeEmotionalContext(userMessage),
      avatarExpression: 'compassionate',
      suggestions: ['Would you like to explore this through creative expression?'],
    }
  }
}

/**
 * Generate empathetic response (fallback)
 */
export function generateEmpatheticResponse(userMessage: string): string {
  const emotionalContext = analyzeEmotionalContext(userMessage)

  const responses: Record<string, string[]> = {
    joyful: [
      'That sounds wonderful! What a beautiful moment to celebrate.',
      'Your joy is truly inspiring. How does it feel to experience this?',
      'I can feel the happiness in your words. Tell me more about this joy.',
    ],
    sad: [
      'I hear the sadness in your words, and I want you to know that your feelings matter.',
      'Loss and grief are profound experiences. I\'m here to listen.',
      'Thank you for trusting me with this. Your pain is valid and understood.',
    ],
    anxious: [
      'I sense some worry in what you\'re sharing. You\'re not alone in feeling this way.',
      'Anxiety can be overwhelming, but you have the strength to navigate this.',
      'Let\'s explore what\'s making you feel uncertain. I\'m here with you.',
    ],
    positive: [
      'That\'s a beautiful perspective. I appreciate your openness.',
      'I can sense the positivity in what you\'re sharing.',
      'Your resilience is inspiring. Keep moving forward.',
    ],
    negative: [
      'I understand that you\'re going through a challenging time.',
      'Your feelings are valid, and I\'m here to support you.',
      'Thank you for sharing this with me. Let\'s work through it together.',
    ],
    neutral: [
      'I\'m listening. Tell me more about what\'s on your mind.',
      'That\'s interesting. How does that relate to your emotional journey?',
      'I\'m here to understand your perspective better.',
    ],
  }

  const responseList = responses[emotionalContext.sentiment] || responses.neutral
  return responseList[Math.floor(Math.random() * responseList.length)]
}

export default {
  getSophiaResponse,
  generateEmpatheticResponse,
  analyzeEmotionalContext,
  getAvatarExpression,
}
