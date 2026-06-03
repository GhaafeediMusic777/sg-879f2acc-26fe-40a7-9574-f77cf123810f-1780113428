# Custom Domain Setup Guide - Ghaafeedi Music

This guide will help you configure your custom domain `www.ghaafeedimusic.com` on Netlify.

## Prerequisites

- ✅ Domain registered (www.ghaafeedimusic.com)
- ✅ Netlify account with Ghaafeedi Music Rebuild site
- ✅ Domain registrar access (GoDaddy, Namecheap, etc.)

## Step 1: Add Custom Domain to Netlify

1. **Go to Netlify Dashboard**
   - Navigate to https://app.netlify.com
   - Click on "Ghaafeedi Music Rebuild" project

2. **Access Domain Settings**
   - Click "Site settings" in the top navigation
   - Click "Domain management" in the left sidebar
   - Click "Add domain" button

3. **Enter Your Domain**
   - Enter: `www.ghaafeedimusic.com`
   - Click "Verify"

## Step 2: Configure DNS Records

After adding the domain, Netlify will show you DNS configuration options:

### Option A: Netlify DNS (Recommended - Easiest)

1. **Let Netlify Manage DNS**
   - Netlify will provide nameservers
   - Copy the nameservers provided
   - Go to your domain registrar
   - Update nameservers to Netlify's nameservers
   - Wait 24-48 hours for DNS propagation

### Option B: Manual DNS Configuration

If you prefer to keep your current DNS provider:

1. **Get Netlify's IP Address**
   - In Netlify domain settings, find the "Alias" or "A record" value
   - Typically: `75.2.60.5` (example - check your specific value)

2. **Update DNS Records at Your Registrar**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add/Update these DNS records:

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: sweet-donut-babdae.netlify.app
   TTL: 3600
   ```

   **For root domain (optional):**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5 (get actual IP from Netlify)
   TTL: 3600
   ```

## Step 3: Enable HTTPS

1. **Netlify Auto-HTTPS**
   - Netlify automatically provisions SSL certificate
   - Wait 5-10 minutes after DNS propagation
   - Certificate will be issued automatically

2. **Verify HTTPS**
   - In Netlify domain settings, check "HTTPS" status
   - Should show "✓ Netlify DNS" or "✓ SSL certificate issued"

## Step 4: Redirect Root Domain (Optional)

If you want `ghaafeedimusic.com` to redirect to `www.ghaafeedimusic.com`:

1. **Add Redirect Rule**
   - Create/edit `netlify.toml` in project root:
   ```toml
   [[redirects]]
   from = "https://ghaafeedimusic.com/*"
   to = "https://www.ghaafeedimusic.com/:splat"
   status = 301
   force = true
   ```

2. **Deploy Changes**
   - Commit and push to GitHub
   - Netlify will auto-deploy

## Step 5: Verify Domain Configuration

### Check DNS Propagation
- Use https://dnschecker.org
- Enter: `www.ghaafeedimusic.com`
- All regions should show green checkmarks

### Test HTTPS
- Visit https://www.ghaafeedimusic.com
- Check browser - should show secure lock icon
- No SSL warnings

### Test Redirects
- Visit http://www.ghaafeedimusic.com
- Should redirect to https://www.ghaafeedimusic.com

## Troubleshooting

### Domain Not Resolving
- **Issue**: DNS not pointing to Netlify
- **Solution**: 
  - Verify nameservers updated at registrar
  - Wait 24-48 hours for propagation
  - Use https://dnschecker.org to verify

### SSL Certificate Not Issued
- **Issue**: HTTPS not working
- **Solution**:
  - Ensure DNS is properly configured first
  - Wait 5-10 minutes after DNS propagation
  - Check Netlify domain settings for certificate status

### Redirect Not Working
- **Issue**: www.ghaafeedimusic.com not redirecting
- **Solution**:
  - Verify netlify.toml is committed and deployed
  - Check Netlify deploy logs for errors
  - Clear browser cache (Ctrl+Shift+Del)

## Environment Variables Update

Update your environment variables to use the custom domain:

**In Netlify Dashboard:**
1. Go to Site settings → Build & deploy → Environment
2. Update `NEXT_PUBLIC_APP_URL`:
   ```
   NEXT_PUBLIC_APP_URL=https://www.ghaafeedimusic.com
   ```
3. Trigger new deploy

**In .env.local (local development):**
```
NEXT_PUBLIC_APP_URL=https://www.ghaafeedimusic.com
```

## Final Verification Checklist

- ✅ Domain added to Netlify
- ✅ DNS records configured (nameservers or A/CNAME records)
- ✅ DNS propagation verified (24-48 hours)
- ✅ HTTPS certificate issued
- ✅ www.ghaafeedimusic.com resolves to site
- ✅ HTTPS works (secure lock icon)
- ✅ Redirects working (if configured)
- ✅ Environment variables updated
- ✅ New deploy triggered

## Support

If you encounter issues:

1. **Check Netlify Logs**
   - Go to Deploys tab
   - Click latest deploy
   - Check build logs for errors

2. **Contact Netlify Support**
   - https://support.netlify.com
   - Provide domain name and site name

3. **DNS Troubleshooting**
   - Use https://dnschecker.org
   - Use https://mxtoolbox.com
   - Check DNS propagation status

## Additional Resources

- Netlify Domain Setup: https://docs.netlify.com/domains-https/custom-domains/
- DNS Configuration: https://docs.netlify.com/domains-https/dns/
- SSL/HTTPS: https://docs.netlify.com/domains-https/https-ssl/
