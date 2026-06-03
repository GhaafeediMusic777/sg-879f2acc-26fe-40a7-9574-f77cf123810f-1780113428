# Environment Variables Setup Guide

This guide explains how to set up all required environment variables for Ghaafeedi Music.

## Required Environment Variables

### 1. Firebase Authentication

Get these from your Firebase Console (https://console.firebase.google.com):

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

**How to get Firebase credentials:**
1. Go to https://console.firebase.google.com
2. Select your project
3. Click Settings (gear icon) → Project settings
4. Scroll to "Your apps" section
5. Click on your web app
6. Copy all the credentials

### 2. Supabase Database (Optional - for future features)

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### 3. Application Settings

```
NEXT_PUBLIC_APP_URL=https://www.ghaafeedimusic.com
NODE_ENV=production
```

### 4. Payment Processors (Optional - for checkout)

Choose one or more:

**Stripe:**
```
STRIPE_SECRET_KEY=sk_live_your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=pk_live_your-stripe-publishable-key
STRIPE_WEBHOOK_SECRET=whsec_your-stripe-webhook-secret
```

**Lemon Squeezy:**
```
LEMON_SQUEEZY_API_KEY=your-lemon-squeezy-api-key
LEMON_SQUEEZY_WEBHOOK_SECRET=your-lemon-squeezy-webhook-secret
```

**Coinbase Commerce:**
```
COINBASE_API_KEY=your-coinbase-api-key
COINBASE_WEBHOOK_SECRET=your-coinbase-webhook-secret
```

## Setup Instructions

### Local Development

1. **Copy .env.example to .env.local**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your credentials**
   - Open `.env.local` in your editor
   - Replace all placeholder values with actual credentials
   - Save the file

3. **Never commit .env.local**
   - It's already in `.gitignore`
   - Never push secrets to GitHub

### Netlify Deployment

1. **Go to Netlify Dashboard**
   - https://app.netlify.com
   - Select "Ghaafeedi Music Rebuild" project

2. **Add Environment Variables**
   - Click "Site settings"
   - Click "Build & deploy" → "Environment"
   - Click "Edit variables"

3. **Add Each Variable**
   - Click "Add a variable"
   - Key: `NEXT_PUBLIC_FIREBASE_API_KEY`
   - Value: Your actual Firebase API key
   - Click "Save"
   - Repeat for all variables

4. **Trigger New Deploy**
   - Go to "Deploys" tab
   - Click "Trigger deploy" → "Deploy site"
   - Netlify will rebuild with new environment variables

## Firebase Setup (Step-by-Step)

If you don't have Firebase set up yet:

1. **Create Firebase Project**
   - Go to https://console.firebase.google.com
   - Click "Create a project"
   - Enter project name: "Ghaafeedi Music"
   - Click "Create project"

2. **Enable Authentication**
   - In Firebase console, go to "Authentication"
   - Click "Get started"
   - Enable "Google" provider:
     - Click "Google"
     - Toggle "Enable"
     - Add support email
     - Click "Save"
   - Enable "Email/Password" provider:
     - Click "Email/Password"
     - Toggle "Enable"
     - Click "Save"

3. **Create Web App**
   - In Firebase console, click "Project settings" (gear icon)
   - Under "Your apps", click "Add app"
   - Choose "Web" (</> icon)
   - Enter app name: "Ghaafeedi Music Web"
   - Click "Register app"
   - Copy all the credentials shown
   - Click "Continue to console"

4. **Set Up Firestore Database**
   - In Firebase console, go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in production mode"
   - Select region closest to your users
   - Click "Create"

5. **Update Security Rules**
   - In Firestore, go to "Rules" tab
   - Replace with:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read, write: if request.auth.uid == userId;
       }
     }
   }
   ```
   - Click "Publish"

## Google OAuth Setup

1. **Enable Google Sign-In**
   - In Firebase console, go to "Authentication"
   - Click "Google" provider
   - Toggle "Enable"
   - Add support email
   - Click "Save"

2. **Configure OAuth Consent Screen**
   - Go to https://console.cloud.google.com
   - Select your project
   - Go to "APIs & Services" → "OAuth consent screen"
   - Choose "External"
   - Click "Create"
   - Fill in app name: "Ghaafeedi Music"
   - Add your email
   - Click "Save and continue"
   - Add scopes: `email`, `profile`
   - Click "Save and continue"
   - Add test users (your email)
   - Click "Save and continue"

3. **Create OAuth Credentials**
   - Go to "Credentials"
   - Click "Create credentials" → "OAuth client ID"
   - Choose "Web application"
   - Add authorized JavaScript origins:
     - `https://www.ghaafeedimusic.com`
     - `https://sweet-donut-babdae.netlify.app`
     - `http://localhost:3000` (for local development)
   - Add authorized redirect URIs:
     - `https://www.ghaafeedimusic.com`
     - `https://sweet-donut-babdae.netlify.app`
     - `http://localhost:3000` (for local development)
   - Click "Create"
   - Copy Client ID and Client Secret

## Verification Checklist

- ✅ Firebase project created
- ✅ Authentication enabled (Google + Email/Password)
- ✅ Firestore database created
- ✅ Web app registered
- ✅ All Firebase credentials copied
- ✅ OAuth consent screen configured
- ✅ OAuth credentials created
- ✅ .env.local filled with all credentials
- ✅ Environment variables added to Netlify
- ✅ New deploy triggered

## Testing Authentication

1. **Local Development**
   ```bash
   npm run dev
   ```
   - Visit http://localhost:3000
   - Try signing up with email
   - Try signing in with Google

2. **Production**
   - Visit https://www.ghaafeedimusic.com
   - Try signing up with email
   - Try signing in with Google

## Troubleshooting

### "Firebase is not initialized"
- Check all NEXT_PUBLIC_FIREBASE_* variables are set
- Verify they match your Firebase project settings
- Restart development server

### "Google Sign-In not working"
- Verify OAuth credentials are correct
- Check authorized origins include your domain
- Check authorized redirect URIs include your domain
- Clear browser cache and cookies

### "Authentication fails in production"
- Verify environment variables are set in Netlify
- Check Netlify deploy logs for errors
- Verify domain is in authorized origins
- Wait 5 minutes after adding environment variables

## Security Best Practices

1. **Never commit .env.local**
   - Already in .gitignore
   - Double-check before pushing

2. **Rotate API Keys Regularly**
   - Especially Firebase keys
   - Every 3-6 months

3. **Use Different Keys for Different Environments**
   - Development: Different Firebase project
   - Production: Separate Firebase project

4. **Monitor API Usage**
   - Check Firebase console for unusual activity
   - Set up billing alerts

5. **Enable 2FA on Firebase Account**
   - Go to https://myaccount.google.com
   - Enable 2-Step Verification

## Additional Resources

- Firebase Setup: https://firebase.google.com/docs/web/setup
- Authentication: https://firebase.google.com/docs/auth
- Firestore: https://firebase.google.com/docs/firestore
- OAuth Setup: https://developers.google.com/identity/protocols/oauth2
