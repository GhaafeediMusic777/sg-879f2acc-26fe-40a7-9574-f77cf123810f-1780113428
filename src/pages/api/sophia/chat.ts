import type { NextApiRequest, NextApiResponse } from 'next'
import { getSophiaAdvancedResponse } from '@/services/sophia-ai-advanced'

interface RequestBody {
  message: string
  conversationHistory?: Array<{ role: string; content: string }>
}

interface ResponseData {
  success: boolean
  message?: string
  emotionalContext?: any
  avatarExpression?: string
  suggestions?: string[]
  modelUsed?: string
  confidenceScore?: number
  reflectiveInsight?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const { message, conversationHistory } = req.body as RequestBody

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ success: false, error: 'Message is required' })
    }

    // Get Sophia's advanced response
    const response = await getSophiaAdvancedResponse(message, conversationHistory || [])

    return res.status(200).json({
      success: true,
      message: response.message,
      emotionalContext: response.emotionalContext,
      avatarExpression: response.avatarExpression,
      suggestions: response.suggestions,
      modelUsed: response.modelUsed,
      confidenceScore: response.confidenceScore,
      reflectiveInsight: response.reflectiveInsight,
    })
  } catch (error) {
    console.error('Sophia API error:', error)
    return res.status(500).json({
      success: false,
      error: 'Failed to get response from Sophia',
    })
  }
}
