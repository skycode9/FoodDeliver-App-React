# Deployment Guide

## Problem Solved ✅

Fixed the Swiggy API connection issue by properly configuring Vercel serverless function.

### Issues Fixed:
1. **URL Path Conflict** - Removed conflicting proxy/rewrite rules
2. **Serverless Function** - Converted to use native `fetch` instead of `axios`
3. **CORS Issues** - Proper CORS headers in serverless function
4. **Development Setup** - Clear instructions for local testing

---

## Local Development

### Option 1: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Run in development mode (this will run serverless functions locally)
vercel dev
```

This will:
- Start your React app
- Run the `/api/menu` serverless function locally
- Handle all API requests properly

### Option 2: Using Vite (Limited)

```bash
npm run dev
```

**Note:** This won't run the serverless function. API calls will fail and fallback to mock data.

---

## Vercel Deployment

### First Time Deployment

```bash
# Login to Vercel
vercel login

# Deploy
vercel
```

### Subsequent Deployments

```bash
# Deploy to production
vercel --prod
```

---

## How It Works

### Architecture

```
Frontend (React) → /api/menu?restaurantId=123 → Vercel Serverless Function → Swiggy API
```

### Files Structure

```
api/
  └── menu.js          # Serverless function (handles CORS + Swiggy API)
src/
  └── utils/
      └── useRestaurantMenu.js  # Fetches from /api/menu
vercel.json            # Vercel configuration
```

### API Endpoint

**Local:** `http://localhost:3000/api/menu?restaurantId=123`
**Production:** `https://your-app.vercel.app/api/menu?restaurantId=123`

---

## Testing

### Test Serverless Function Locally

```bash
# Start Vercel dev server
vercel dev

# In another terminal, test the API
curl "http://localhost:3000/api/menu?restaurantId=393840"
```

### Test in Browser

1. Start: `vercel dev`
2. Open: `http://localhost:3000`
3. Click on any restaurant
4. Check browser console for API logs

---

## Troubleshooting

### Issue: "Module not found: axios"
**Solution:** Already fixed! We use native `fetch` now.

### Issue: API returns 404
**Solution:** Make sure you're using `vercel dev`, not `npm run dev`

### Issue: CORS errors
**Solution:** Already handled in `api/menu.js` with proper headers

### Issue: Swiggy API blocked
**Solution:** 
- Swiggy may block requests from certain IPs
- Try different restaurant IDs
- Check if Swiggy API is accessible from your location

### Issue: Empty response
**Solution:** Check browser console for detailed error logs

---

## Environment Variables (Optional)

If you want to add API keys or secrets:

```bash
# Create .env.local file
SWIGGY_API_KEY=your_key_here

# Access in api/menu.js
const apiKey = process.env.SWIGGY_API_KEY;
```

---

## Production Checklist

- [ ] Test locally with `vercel dev`
- [ ] Check API response in browser console
- [ ] Deploy to Vercel: `vercel --prod`
- [ ] Test production URL
- [ ] Monitor Vercel function logs

---

## Vercel Dashboard

After deployment, monitor your serverless function:
1. Go to: https://vercel.com/dashboard
2. Select your project
3. Click "Functions" tab
4. View logs and performance metrics
