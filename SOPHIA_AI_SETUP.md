# Sophia AI Emotional Companion - Setup Guide

## Overview

Sophia AI is a 24/7 emotionally intelligent companion chatbot integrated into Ghaafeedi Music. She provides empathetic support, emotional analysis, and creative guidance to users.

## Features

✅ **Emotionally Intelligent Responses** - Analyzes emotional context and responds with empathy
✅ **24/7 Availability** - Floating widget accessible from any page
✅ **Voice Capabilities** - Text-to-speech for Sophia's responses
✅ **Conversation History** - Maintains context across conversations
✅ **Avatar Expressions** - Visual feedback based on emotional context
✅ **Personalized Suggestions** - Recommends creative expression through music/storytelling
✅ **OpenAI Integration** - Uses GPT-4 for intelligent responses

## Architecture

### Components

1. **SophiaChatWidget** (`src/components/SophiaChatWidget.tsx`)
   - Floating chat interface
   - Message display and input
   - Voice control
   - Minimize/maximize functionality
   - Real-time message updates

2. **Sophia AI Service** (`src/services/sophia-ai.ts`)
   - OpenAI integration
   - Emotional context analysis
   - Avatar expression mapping
   - Suggestion generation
   - Fallback responses

3. **API Route** (`src/pages/api/sophia/chat.ts`)
   - Server-side message processing
   - Conversation history management
   - Error handling

### Integration Points

- **_app.tsx** - SophiaChatWidget added to all pages
- **useAuth** - Requires user authentication
- **OpenAI API** - LLM for response generation

## Setup Instructions

### 1. Environment Variables

Add the following to your `.env.local`:

```env
# OpenAI API Key (required for Sophia AI)
NEXT_PUBLIC_OPENAI_API_KEY=sk-your-api-key-here
OPENAI_API_KEY=sk-your-api-key-here
```

### 2. Get OpenAI API Key

1. Go to https://platform.openai.com/account/api-keys
2. Create a new API key
3. Copy the key and add to environment variables
4. Never commit API keys to version control

### 3. Database Setup (Optional)

If you want to persist conversations:

```sql
CREATE TABLE companion_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  message TEXT NOT NULL,
  role TEXT NOT NULL,
  emotional_context JSONB,
  avatar_expression TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_companion_user_id ON companion_conversations(user_id);
CREATE INDEX idx_companion_session_id ON companion_conversations(session_id);
```

### 4. Deploy to Netlify

1. Add environment variables in Netlify dashboard:
   - Settings → Build & deploy → Environment
   - Add `NEXT_PUBLIC_OPENAI_API_KEY`
   - Add `OPENAI_API_KEY`

2. Redeploy the site

## Usage

### For Users

1. **Access Sophia** - Click the 😊 floating button in bottom-right corner
2. **Chat** - Type messages and press Send
3. **Enable Voice** - Click volume icon to hear Sophia's responses
4. **Minimize** - Click minimize button to reduce widget size
5. **Close** - Click X to close the widget

### For Developers

#### Get Sophia Response

```typescript
import { getSophiaResponse } from '@/services/sophia-ai'

const response = await getSophiaResponse(userMessage, conversationHistory)

// Response includes:
// - message: string (Sophia's response)
// - emotionalContext: { sentiment, intensity, keywords }
// - avatarExpression: string (emoji expression)
// - suggestions: string[] (creative suggestions)
```

#### Emotional Context Analysis

```typescript
import { analyzeEmotionalContext } from '@/services/sophia-ai'

const context = analyzeEmotionalContext("I'm feeling sad about losing my grandmother")

// Returns:
// {
//   sentiment: 'sad',
//   intensity: 8,
//   keywords: ['sad', 'loss']
// }
```

## Emotional Intelligence Features

### Sentiment Detection

Sophia analyzes messages for emotional keywords:

- **Positive**: happy, joy, love, grateful, amazing, wonderful
- **Negative**: sad, hurt, pain, loss, grief, angry
- **Anxious**: worried, anxious, nervous, scared, afraid
- **Joyful**: joy, happy, thrilled, delighted, ecstatic

### Avatar Expressions

Based on emotional context, Sophia displays:

- 😊 Neutral
- 😄 Happy
- 🤩 Delighted
- 🥰 Compassionate
- 💙 Deeply Empathetic
- 🤝 Supportive
- ✨ Warm

### Response Suggestions

Sophia provides contextual suggestions:

- **For sadness**: "Would you like to create a memorial or tribute through music?"
- **For joy**: "This joy deserves to be captured in a cinematic video"
- **For anxiety**: "Creative expression can be a powerful way to process anxiety"

## API Reference

### POST /api/sophia/chat

**Request:**
```json
{
  "message": "I'm feeling overwhelmed with my creative project",
  "conversationHistory": [
    { "role": "user", "content": "Hi Sophia" },
    { "role": "assistant", "content": "Hello! How can I help?" }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "That's a common feeling when creating something meaningful...",
  "emotionalContext": {
    "sentiment": "anxious",
    "intensity": 6,
    "keywords": ["overwhelmed", "creative"]
  },
  "avatarExpression": "supportive",
  "suggestions": [
    "Would you like to break this down into smaller steps?",
    "Creative expression can help process these feelings"
  ]
}
```

## Customization

### Modify System Prompt

Edit `SOPHIA_SYSTEM_PROMPT` in `src/services/sophia-ai.ts` to change Sophia's personality and approach.

### Change Avatar Expressions

Update `AVATAR_EXPRESSIONS` in `src/components/SophiaChatWidget.tsx` to use different emojis or images.

### Adjust Voice Settings

Modify speech synthesis settings in `speakMessage()` function:

```typescript
utterance.rate = 0.95      // Speech speed
utterance.pitch = 1.1      // Voice pitch
utterance.volume = 0.8     // Volume level
```

### Add Custom Suggestions

Extend `getSuggestions()` function in `src/services/sophia-ai.ts` with additional logic.

## Troubleshooting

### Sophia Not Responding

1. Check OpenAI API key is set correctly
2. Verify API key has sufficient credits
3. Check browser console for errors
4. Ensure user is authenticated

### Voice Not Working

1. Check browser supports Web Speech API
2. Verify voice is enabled (click volume icon)
3. Check browser permissions for audio
4. Try different browser if issue persists

### Widget Not Appearing

1. Verify user is logged in
2. Check browser console for errors
3. Ensure SophiaChatWidget is imported in _app.tsx
4. Clear browser cache and reload

## Performance Optimization

### Conversation History Limits

The widget maintains up to 50 messages in history. Older messages are automatically pruned.

### API Rate Limiting

OpenAI has rate limits. Consider implementing:
- Message queuing
- Rate limit handling
- Fallback responses

### Caching

Consider caching common responses to reduce API calls:

```typescript
const responseCache = new Map()
const cacheKey = `${sentiment}-${intensity}`
if (responseCache.has(cacheKey)) {
  return responseCache.get(cacheKey)
}
```

## Future Enhancements

- [ ] Persistent conversation storage
- [ ] Multi-language support
- [ ] Advanced emotional analysis
- [ ] Integration with music generation
- [ ] Therapy-informed responses
- [ ] Custom avatar animations
- [ ] Integration with Ghaafeedi products
- [ ] Conversation export/sharing

## Support

For issues or questions:
1. Check this documentation
2. Review browser console for errors
3. Contact support at support@ghaafeedimusic.com

## License

Sophia AI is part of Ghaafeedi Music and subject to the same terms and conditions.
