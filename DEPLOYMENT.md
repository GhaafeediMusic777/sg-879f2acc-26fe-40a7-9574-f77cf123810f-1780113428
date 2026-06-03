# Ghaafeedi Music - Deployment Guide

## Overview

Ghaafeedi Music is a Next.js application deployed on Netlify with Netlify Functions for serverless backend operations.

## Recent Fixes (June 3, 2026)

### Critical Fixes Applied
1. **AuthProvider Context Wrapping** - Fixed prerendering errors by wrapping the app with AuthProvider
2. **Static Export Directory** - Added `distDir: 'out'` to `next.config.js` to ensure static files are generated in the correct directory for Netlify

### Build Status
- ✅ Local build tested and working
- ✅ All 19 pages generated successfully
- ✅ Output directory: `out/` with `index.html` and all assets
- ✅ Netlify Functions deployed (sophia-chat)

## Environment Variables

### Required for Netlify Deployment

Add these to your Netlify dashboard under **Site settings** → **Build & deploy** → **Environment**:

```
OPENAI_API_KEY=sk-proj-your-actual-key-here
NODE_VERSION=20
NPM_VERSION=10
```

**IMPORTANT**: The `OPENAI_API_KEY` is critical for the Sophia AI companion to work. Without it, the chat widget will show error messages.

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
- **Output Directory**: Configured via `distDir: 'out'` in `next.config.js`

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

### Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add -A
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Netlify Auto-Deploy**
   - Netlify automatically deploys on push to main branch
   - Check deployment status in Netlify dashboard
   - Build typically takes 1-2 minutes

### Manual Deployment

1. Go to Netlify dashboard: https://app.netlify.com/sites/sweet-donut-babdae
2. Click "Deploys" tab
3. Click "Trigger deploy" → "Deploy project"

### Verifying Deployment

After deployment, verify:
1. Site loads at https://sweet-donut-babdae.netlify.app
2. No 404 errors on homepage
3. Sophia AI chat widget appears on pages
4. Chat widget can send messages (requires OPENAI_API_KEY)

## Build Troubleshooting

### Issue: Site Shows 404 After Deploy

**Cause**: Output directory mismatch or missing `index.html`

**Solution**:
1. Verify `distDir: 'out'` is set in `next.config.js`
2. Verify `publish = "out"` is set in `netlify.toml`
3. Run local build: `npm run build`
4. Check that `out/index.html` exists: `ls -la out/index.html`
5. If missing, rebuild and redeploy

### Issue: Build Fails with TypeScript Errors

**Cause**: TypeScript compilation errors in components

**Solution**:
1. Check build logs in Netlify dashboard
2. Fix errors in the reported files
3. Test locally: `npm run build`
4. Commit and push fixes

### Issue: Missing Environment Variables

**Cause**: Required env vars not set in Netlify

**Solution**:
1. Go to Netlify dashboard
2. Site settings → Build & deploy → Environment
3. Add all required variables (OPENAI_API_KEY, NODE_VERSION, NPM_VERSION)
4. Trigger a new deploy

### Issue: Sophia AI Chat Not Working

**Cause**: Missing or invalid OPENAI_API_KEY

**Solution**:
1. Verify `OPENAI_API_KEY` is set in Netlify environment
2. Verify the key is valid and has API credits
3. Check browser console for error messages
4. Check Netlify Function logs for errors

### Issue: CSS/Tailwind Not Loading

**Cause**: Missing or misconfigured Tailwind files

**Solution**:
1. Verify `src/styles/globals.css` exists
2. Verify `tailwind.config.js` has all theme tokens
3. Check `postcss.config.js` is configured
4. Run `npm run build` locally to test

## File Structure

```
src/
├── components/
│   ├── ui/              # UI components (button, card, input, etc.)
│   ├── Layout.tsx       # Main layout wrapper
│   ├── SophiaChatWidget.tsx  # Chat widget
│   └── WellnessChatbot.tsx   # Wellness chatbot
├── pages/
│   ├── _app.tsx         # Next.js app wrapper (wrapped with AuthProvider)
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
next.config.js                # Next.js configuration (with distDir: 'out')
netlify.toml                  # Netlify configuration
```

## Security Best Practices

1. **API Keys**
   - Never commit API keys to Git
   - Use `.env.local` for local development (in `.gitignore`)
   - Store production keys in Netlify environment variables
   - Rotate keys regularly if compromised

2. **OpenAI API Key**
   - Only exposed in Netlify Functions (server-side)
   - Never expose in client-side code
   - Netlify Functions securely handle the key
   - Requests from browser go through the function endpoint

3. **Headers**
   - Security headers configured in `netlify.toml`
   - Includes X-Content-Type-Options, X-Frame-Options, CSP, etc.

4. **CORS**
   - Netlify Functions handle CORS automatically
   - Cross-origin requests are allowed for API endpoints

## Performance Optimization

1. **Static Export**
   - Site is exported as static HTML for fast loading
   - All pages are pre-rendered at build time
   - No server-side rendering needed

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
   - Build typically takes 1-2 minutes

2. **Function Logs**
   - View Netlify Function logs in dashboard
   - Check browser console for client-side errors
   - Monitor API responses in Network tab

3. **Error Tracking**
   - Optional: Integrate Sentry for error tracking
   - Set `SENTRY_DSN` environment variable

## Rollback

If a deployment fails or causes issues:

1. Go to Netlify dashboard
2. Click "Deploys" tab
3. Find the previous successful deployment
4. Click "Publish deploy" to rollback

## Local Development

### Setup

```bash
# Install dependencies
npm install

# Create .env.local for local development
echo "OPENAI_API_KEY=your-test-key" > .env.local

# Run development server
npm run dev
```

### Testing Build

```bash
# Build locally
npm run build

# Check output directory
ls -la out/

# Verify index.html exists
cat out/index.html | head -20
```

## Deployment Checklist

Before deploying to production:

- [ ] All environment variables set in Netlify (OPENAI_API_KEY, NODE_VERSION, NPM_VERSION)
- [ ] Local build succeeds: `npm run build`
- [ ] `out/index.html` exists after build
- [ ] No TypeScript errors in build output
- [ ] All pages load locally: `npm run dev`
- [ ] Sophia AI chat widget appears on pages
- [ ] Latest code pushed to GitHub main branch
- [ ] Netlify deploy triggered and completed successfully
- [ ] Site loads at https://sweet-donut-babdae.netlify.app
- [ ] No 404 errors on homepage

## Support

For deployment issues, check:
- Netlify documentation: https://docs.netlify.com
- Next.js documentation: https://nextjs.org/docs
- GitHub Issues: Check project repository
- Build logs in Netlify dashboard for specific errors
