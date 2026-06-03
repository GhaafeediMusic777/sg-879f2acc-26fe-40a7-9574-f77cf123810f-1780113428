# Ghaafeedi Music - Deployment Guide

## Overview

Ghaafeedi Music is a Next.js application deployed on Netlify with Netlify Functions for serverless backend operations.

## Environment Variables

### Required for Netlify Deployment

Add these to your Netlify dashboard under **Site settings** → **Build & deploy** → **Environment**:

```
OPENAI_API_KEY=sk-proj-your-actual-key-here
NODE_VERSION=20
NPM_VERSION=10
```

### Optional Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

## Build Configuration

The project is configured for static export with Netlify Functions:

- **Build Command**: `npm run build`
- **Publish Directory**: `out`
- **Functions Directory**: `netlify/functions`
- **Node Version**: 20
- **NPM Version**: 10

## Netlify Functions

### Available Functions

1. **sophia-chat** (`netlify/functions/sophia-chat.ts`)
   - Handles AI chat requests
   - Uses OpenAI API with environment variable
   - Provides fallback responses if API fails
   - Includes error handling and rate limiting

### Function Endpoints

- POST `/.netlify/functions/sophia-chat`
  - Request body: `{ message: string, sessionId?: string, userId?: string, conversationHistory?: Array }`
  - Response: `{ message: string, avatarExpression?: string, error?: string }`

## Deployment Steps

1. **Push to GitHub**
   ```bash
   git add -A
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Netlify Auto-Deploy**
   - Netlify automatically deploys on push to main branch
   - Check deployment status in Netlify dashboard

3. **Manual Deploy**
   - Go to Netlify dashboard
   - Click "Deploys" tab
   - Click "Trigger deploy" → "Deploy project"

## Build Troubleshooting

### Common Issues

1. **Missing Environment Variables**
   - Ensure all required variables are set in Netlify
   - Check variable names exactly (case-sensitive)

2. **TypeScript Errors**
   - ESLint is disabled during build (see `next.config.js`)
   - Fix any actual TypeScript compilation errors

3. **Module Not Found**
   - Verify all imports use correct paths
   - Check `tsconfig.json` for path aliases

4. **CSS/Tailwind Issues**
   - Ensure `src/styles/globals.css` exists
   - Verify Tailwind config has all required color tokens
   - Check `tailwind.config.js` for proper theme configuration

## File Structure

```
src/
├── components/
│   ├── ui/              # UI components (button, card, input, etc.)
│   ├── Layout.tsx       # Main layout wrapper
│   ├── SophiaChatWidget.tsx  # Chat widget
│   └── WellnessChatbot.tsx   # Wellness chatbot
├── pages/
│   ├── _app.tsx         # Next.js app wrapper
│   ├── index.tsx        # Home page
│   ├── companion.tsx    # AI companion page
│   ├── api/
│   │   └── sophia/chat.ts    # API route (deprecated, use Netlify Functions)
│   └── ...
├── services/
│   ├── firebase-auth.ts      # Firebase authentication
│   ├── sophia-ai-advanced.ts # Advanced AI logic
│   └── ...
├── context/
│   └── AuthContext.tsx       # Auth context provider
├── hooks/
│   └── use-toast.ts          # Toast notifications hook
├── styles/
│   └── globals.css           # Global styles
└── integrations/
    └── supabase/client.ts    # Supabase client

netlify/
└── functions/
    └── sophia-chat.ts        # Netlify Function for AI chat

public/
├── _redirects                # Netlify redirects
└── ...

tailwind.config.js            # Tailwind CSS configuration
tsconfig.json                 # TypeScript configuration
next.config.js                # Next.js configuration
netlify.toml                  # Netlify configuration
```

## Security Best Practices

1. **API Keys**
   - Never commit API keys to Git
   - Use `.env.local` for local development (in `.gitignore`)
   - Store production keys in Netlify environment variables

2. **OpenAI API Key**
   - Only exposed in Netlify Functions (server-side)
   - Never expose in client-side code
   - Rotate keys regularly if compromised

3. **Headers**
   - Security headers configured in `netlify.toml`
   - Includes X-Content-Type-Options, X-Frame-Options, CSP, etc.

4. **CORS**
   - Netlify Functions handle CORS automatically
   - Cross-origin requests are allowed for API endpoints

## Performance Optimization

1. **Static Export**
   - Site is exported as static HTML for fast loading
   - Dynamic routes use `getStaticProps` and `getStaticPaths`

2. **Image Optimization**
   - Images are unoptimized for static export
   - Use external image optimization services if needed

3. **Caching**
   - Static assets cached for 1 year
   - HTML pages not cached for freshness

4. **Compression**
   - Gzip compression enabled
   - Source maps disabled in production

## Monitoring

1. **Build Logs**
   - Check Netlify dashboard for build logs
   - Look for errors in the "Deploy" section

2. **Function Logs**
   - View Netlify Function logs in dashboard
   - Check browser console for client-side errors

3. **Error Tracking**
   - Optional: Integrate Sentry for error tracking
   - Set `SENTRY_DSN` environment variable

## Rollback

If a deployment fails or causes issues:

1. Go to Netlify dashboard
2. Click "Deploys" tab
3. Find the previous successful deployment
4. Click "Publish deploy" to rollback

## Support

For deployment issues, check:
- Netlify documentation: https://docs.netlify.com
- Next.js documentation: https://nextjs.org/docs
- GitHub Issues: Check project repository
