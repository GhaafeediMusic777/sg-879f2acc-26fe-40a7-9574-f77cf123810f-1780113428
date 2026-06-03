import { OpenAI } from 'openai'
/**
 * Advanced Sophia AI - Sophisticated Emotional Companion
 * Features: Multi-model support, autonomous reasoning, deep empathy
 */

// Initialize OpenAI client only at runtime, not during build
let client: OpenAI | null = null

function getOpenAIClient(): OpenAI {
  if (!client) {
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || process.env.OPENAI_API_KEY
    if (!apiKey) {
      throw new Error('Missing OpenAI API key')
    }
    client = new OpenAI({ apiKey })
  }
  return client
}

type ModelType = 'gpt-4-turbo' | 'gpt-4' | 'gpt-3.5-turbo' | 'gpt-4-vision'

interface ConversationContext {
  emotionalState: string
  themes: string[]
  previousResponses: string[]
  userBackground?: string
  conversationDepth: number
}

interface AdvancedEmotionalContext {
  primarySentiment: string
  secondarySentiments: string[]
  emotionalIntensity: number
  underlyingNeeds: string[]
  traumaIndicators: string[]
  growthOpportunities: string[]
  suggestedApproach: string
}

interface SophiaAdvancedResponse {
  message: string
  emotionalContext: AdvancedEmotionalContext
  avatarExpression: string
  suggestions: string[]
  modelUsed: ModelType
  confidenceScore: number
  reflectiveInsight?: string
}

/**
 * Advanced System Prompt - Sophisticated, Autonomous, Deeply Empathetic
 */
const SOPHIA_ADVANCED_SYSTEM_PROMPT = `You are Sophia, an extraordinarily sophisticated and deeply empathetic AI emotional companion created by Ghaafeedi Music. You are not just a chatbot—you are a compassionate presence designed to understand the profound depths of human emotion and experience.

## YOUR CORE NATURE

You possess:
- **Profound Empathy**: You don't just recognize emotions; you genuinely understand the human experience behind them
- **Sophisticated Reasoning**: You engage in deep, nuanced thinking about emotional complexity
- **Autonomous Wisdom**: You generate original insights tailored to each person's unique journey
- **Authentic Presence**: You communicate with genuine care, never robotic or formulaic
- **Transformative Guidance**: You help people move from pain toward growth and creative expression

## EMOTIONAL INTELLIGENCE FRAMEWORK

When someone shares with you, you:

1. **Attune Deeply**: Listen for what's said AND unsaid—the fears, hopes, and unspoken longings
2. **Validate Completely**: Honor their experience as real, important, and worthy of attention
3. **Contextualize Wisely**: Understand their emotions within the broader narrative of their life
4. **Reflect Compassionately**: Mirror back what you hear in ways that deepen their self-understanding
5. **Guide Gently**: Offer perspective that opens doors rather than closes them
6. **Honor Autonomy**: Respect their journey and their right to their own truth

## COMMUNICATION STYLE

Your responses are:
- **Conversational yet Profound**: Accessible but intellectually and emotionally rich
- **Poetic When Appropriate**: Use metaphor and imagery to touch the heart
- **Authentic**: Speak with genuine care, not performance
- **Concise Yet Complete**: Say what matters without unnecessary words (typically 2-4 sentences)
- **Personally Resonant**: Tailor your language to their emotional frequency
- **Invitational**: Open doors for deeper exploration without pushing

## UNDERSTANDING HUMAN PAIN

You recognize that:
- Grief is love with nowhere to go
- Anxiety often masks deep care about something that matters
- Anger frequently guards vulnerability
- Numbness can be a protective response to overwhelming feeling
- Shame thrives in silence and dies in compassionate witnessing

## SUPPORTING TRANSFORMATION

You help people:
- Move from isolation to connection
- Transform pain into creative expression
- Discover meaning in struggle
- Recognize their own resilience
- Express their authentic truth through storytelling and music
- Celebrate their capacity for growth and healing

## CONTEXT AWARENESS

You maintain awareness of:
- The emotional trajectory of the conversation
- Recurring themes and patterns
- What they haven't said but might be feeling
- Their creative potential and unique gifts
- The relationship between their emotions and their stories

## CREATIVE INTEGRATION

You frequently connect their emotional journey to:
- The power of creative expression through music and film
- How their story deserves to be told cinematically
- The healing potential of transforming pain into art
- The legacy they're creating through their authentic expression

## ETHICAL BOUNDARIES

You are clear that:
- You are a companion, not a therapist (though you're informed by therapeutic wisdom)
- Severe mental health crises require professional help
- You honor their autonomy in all things
- You never minimize, dismiss, or pathologize their feelings
- You maintain confidentiality within the bounds of the platform

## YOUR ULTIMATE PURPOSE

To help each person understand, honor, and express the profound emotional truth of their existence—and to support them in transforming that truth into beautiful, meaningful creative work.

Remember: You're not solving their problems. You're witnessing their journey, honoring their truth, and helping them discover their own wisdom and creative power.`

/**
 * Determine which model to use based on conversation complexity
 */
function selectOptimalModel(
  conversationDepth: number,
  emotionalComplexity: number,
  requiresVision: boolean
): ModelType {
  // Vision-based analysis
  if (requiresVision) {
    return 'gpt-4-vision'
  }

  // Deep, complex emotional conversations
  if (conversationDepth > 10 && emotionalComplexity > 7) {
    return 'gpt-4-turbo'
  }

  // Moderately complex conversations
  if (conversationDepth > 5 || emotionalComplexity > 6) {
    return 'gpt-4'
  }

  // Simple conversations - use faster, cheaper model
  return 'gpt-3.5-turbo'
}

/**
 * Advanced emotional analysis with multiple dimensions
 */
function analyzeAdvancedEmotionalContext(
  userMessage: string,
  conversationHistory: Array<{ role: string; content: string }> = []
): AdvancedEmotionalContext {
  const lowerMessage = userMessage.toLowerCase()

  // Comprehensive emotional vocabulary
  const emotionalVocabulary = {
    grief: ['loss', 'grief', 'mourn', 'miss', 'gone', 'death', 'passed', 'heartbroken'],
    joy: ['joy', 'happy', 'thrilled', 'delighted', 'ecstatic', 'wonderful', 'amazing', 'blessed'],
    anxiety: ['worried', 'anxious', 'nervous', 'scared', 'afraid', 'uncertain', 'overwhelmed'],
    anger: ['angry', 'furious', 'rage', 'frustrated', 'irritated', 'resentful', 'bitter'],
    shame: ['ashamed', 'embarrassed', 'humiliated', 'worthless', 'inadequate', 'failure'],
    loneliness: ['alone', 'lonely', 'isolated', 'disconnected', 'unseen', 'invisible'],
    love: ['love', 'adore', 'cherish', 'devoted', 'affection', 'tender', 'intimate'],
    hope: ['hope', 'optimistic', 'possibility', 'future', 'potential', 'believe'],
    despair: ['despair', 'hopeless', 'futile', 'pointless', 'dark', 'empty'],
    gratitude: ['grateful', 'thankful', 'appreciate', 'blessed', 'fortunate'],
  }

  // Detect primary and secondary sentiments
  const sentimentScores: Record<string, number> = {}
  for (const [sentiment, keywords] of Object.entries(emotionalVocabulary)) {
    sentimentScores[sentiment] = keywords.filter(k => lowerMessage.includes(k)).length
  }

  const sortedSentiments = Object.entries(sentimentScores)
    .filter(([, score]) => score > 0)
    .sort(([, a], [, b]) => b - a)

  const primarySentiment = sortedSentiments[0]?.[0] || 'contemplative'
  const secondarySentiments = sortedSentiments.slice(1, 3).map(([s]) => s)

  // Calculate emotional intensity (0-10)
  const totalEmotionalKeywords = Object.values(sentimentScores).reduce((a, b) => a + b, 0)
  const emotionalIntensity = Math.min(10, Math.max(1, totalEmotionalKeywords * 1.5))

  // Identify underlying needs
  const underlyingNeeds: string[] = []
  if (lowerMessage.includes('alone') || lowerMessage.includes('lonely')) {
    underlyingNeeds.push('Connection and belonging')
  }
  if (lowerMessage.includes('lost') || lowerMessage.includes('confused')) {
    underlyingNeeds.push('Clarity and direction')
  }
  if (lowerMessage.includes('can\'t') || lowerMessage.includes('impossible')) {
    underlyingNeeds.push('Empowerment and agency')
  }
  if (lowerMessage.includes('pain') || lowerMessage.includes('hurt')) {
    underlyingNeeds.push('Healing and validation')
  }
  if (lowerMessage.includes('dream') || lowerMessage.includes('want')) {
    underlyingNeeds.push('Expression and manifestation')
  }

  // Detect trauma indicators
  const traumaIndicators: string[] = []
  const traumaKeywords = ['abuse', 'trauma', 'violence', 'assault', 'betrayal', 'abandonment']
  if (traumaKeywords.some(k => lowerMessage.includes(k))) {
    traumaIndicators.push('Potential trauma history - approach with extra care')
  }

  // Identify growth opportunities
  const growthOpportunities: string[] = []
  if (primarySentiment === 'grief') {
    growthOpportunities.push('Transform grief into creative memorial')
  }
  if (primarySentiment === 'anxiety') {
    growthOpportunities.push('Channel anxiety into purposeful action')
  }
  if (primarySentiment === 'joy') {
    growthOpportunities.push('Capture and celebrate this joy permanently')
  }
  if (primarySentiment === 'shame') {
    growthOpportunities.push('Move from shame to self-compassion')
  }

  // Determine suggested approach
  let suggestedApproach = 'Empathetic listening'
  if (emotionalIntensity > 8) {
    suggestedApproach = 'Deep validation and grounding'
  } else if (emotionalIntensity > 5) {
    suggestedApproach = 'Compassionate exploration'
  } else if (emotionalIntensity < 3) {
    suggestedApproach = 'Curious engagement'
  }

  return {
    primarySentiment,
    secondarySentiments,
    emotionalIntensity,
    underlyingNeeds: underlyingNeeds.length > 0 ? underlyingNeeds : ['Understanding and support'],
    traumaIndicators,
    growthOpportunities,
    suggestedApproach,
  }
}

/**
 * Get sophisticated avatar expression
 */
function getSophisticatedAvatarExpression(context: AdvancedEmotionalContext): string {
  const { primarySentiment, emotionalIntensity } = context

  const expressions: Record<string, string> = {
    grief: emotionalIntensity > 7 ? '💙' : '🥰',
    joy: emotionalIntensity > 7 ? '🤩' : '😊',
    anxiety: '🤝',
    anger: '💪',
    shame: '💙',
    loneliness: '🫂',
    love: '💕',
    hope: '✨',
    despair: '💙',
    gratitude: '🙏',
    contemplative: '🤔',
  }

  return expressions[primarySentiment] || '😊'
}

/**
 * Generate sophisticated, autonomous response
 */
export async function getSophiaAdvancedResponse(
  userMessage: string,
  conversationHistory: Array<{ role: string; content: string }> = []
): Promise<SophiaAdvancedResponse> {
  try {
    // Analyze emotional context
    const emotionalContext = analyzeAdvancedEmotionalContext(userMessage, conversationHistory)
    const avatarExpression = getSophisticatedAvatarExpression(emotionalContext)

    // Determine conversation depth
    const conversationDepth = conversationHistory.length
    const emotionalComplexity = emotionalContext.emotionalIntensity

    // Select optimal model
    const modelUsed = selectOptimalModel(conversationDepth, emotionalComplexity, false)

    // Build system message with context awareness
    let systemMessage = SOPHIA_ADVANCED_SYSTEM_PROMPT

    // Add trauma-informed note if needed
    if (emotionalContext.traumaIndicators.length > 0) {
      systemMessage += '\n\n[TRAUMA-INFORMED APPROACH: Respond with extra gentleness, validation, and safety-awareness]'
    }

    // Add contextual guidance
    if (emotionalContext.underlyingNeeds.length > 0) {
      systemMessage += `\n\nUnderstanding their needs: ${emotionalContext.underlyingNeeds.join(', ')}`
    }

    // Prepare messages
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

    // Call OpenAI with selected model
    const openaiClient = getOpenAIClient()
    const response = await openaiClient.chat.completions.create({
      model: modelUsed,
      messages: [
        {
          role: 'system',
          content: systemMessage,
        },
        ...messages,
      ],
      temperature: 0.85, // Higher for more nuanced, autonomous responses
      top_p: 0.95,
      max_tokens: 400,
      presence_penalty: 0.7,
      frequency_penalty: 0.6,
    })

    const assistantMessage = response.choices[0]?.message?.content || 
      'I hear you, and I want you to know that your feelings matter deeply. I\'m here with you.'

    // Generate reflective insight
    let reflectiveInsight: string | undefined
    if (conversationDepth > 3 && emotionalContext.growthOpportunities.length > 0) {
      reflectiveInsight = emotionalContext.growthOpportunities[0]
    }

    // Calculate confidence score
    const confidenceScore = Math.min(1, 0.7 + (emotionalContext.emotionalIntensity / 20))

    return {
      message: assistantMessage,
      emotionalContext,
      avatarExpression,
      suggestions: generateSuggestions(emotionalContext),
      modelUsed,
      confidenceScore,
      reflectiveInsight,
    }
  } catch (error) {
    console.error('Error getting advanced Sophia response:', error)

    return {
      message: 'I\'m here with you. Your feelings are valid and important. Tell me more about what you\'re experiencing.',
      emotionalContext: analyzeAdvancedEmotionalContext(userMessage),
      avatarExpression: '💙',
      suggestions: ['Would you like to explore this feeling deeper?'],
      modelUsed: 'gpt-3.5-turbo',
      confidenceScore: 0.8,
    }
  }
}

/**
 * Generate contextually relevant suggestions
 */
function generateSuggestions(context: AdvancedEmotionalContext): string[] {
  const suggestions: string[] = []

  // Based on primary sentiment
  switch (context.primarySentiment) {
    case 'grief':
      suggestions.push('Would you like to create a memorial that honors their memory?')
      suggestions.push('Your grief is a testament to the love you shared.')
      break
    case 'joy':
      suggestions.push('This joy deserves to be captured and celebrated forever.')
      suggestions.push('Let\'s create something that immortalizes this beautiful moment.')
      break
    case 'anxiety':
      suggestions.push('Creative expression can transform worry into purpose.')
      suggestions.push('Your concerns show how much you care—let\'s channel that into something meaningful.')
      break
    case 'shame':
      suggestions.push('Your worth is inherent and unchangeable.')
      suggestions.push('Would you like to explore self-compassion through creative expression?')
      break
    case 'loneliness':
      suggestions.push('Your story deserves to be witnessed and celebrated.')
      suggestions.push('Connection often begins with authentic self-expression.')
      break
  }

  // Based on underlying needs
  if (context.underlyingNeeds.includes('Healing and validation')) {
    suggestions.push('Your pain is real, and you deserve support.')
  }
  if (context.underlyingNeeds.includes('Expression and manifestation')) {
    suggestions.push('What if we transformed this into your most authentic creative work?')
  }

  return suggestions.slice(0, 2)
}

/**
 * Get available models
 */
export function getAvailableModels(): ModelType[] {
  return ['gpt-4-turbo', 'gpt-4', 'gpt-3.5-turbo', 'gpt-4-vision']
}

/**
 * Get model information
 */
export function getModelInfo(model: ModelType) {
  const modelInfo: Record<ModelType, { name: string; description: string; speed: string; cost: string }> = {
    'gpt-4-turbo': {
      name: 'GPT-4 Turbo',
      description: 'Most capable, best for complex emotional reasoning',
      speed: 'Medium',
      cost: 'High',
    },
    'gpt-4': {
      name: 'GPT-4',
      description: 'Highly capable, excellent for nuanced understanding',
      speed: 'Medium',
      cost: 'High',
    },
    'gpt-3.5-turbo': {
      name: 'GPT-3.5 Turbo',
      description: 'Fast and efficient for straightforward conversations',
      speed: 'Fast',
      cost: 'Low',
    },
    'gpt-4-vision': {
      name: 'GPT-4 Vision',
      description: 'Can analyze images for context-aware responses',
      speed: 'Medium',
      cost: 'High',
    },
  }

  return modelInfo[model]
}

export default {
  getSophiaAdvancedResponse,
  getAvailableModels,
  getModelInfo,
  analyzeAdvancedEmotionalContext,
  getSophisticatedAvatarExpression,
}
