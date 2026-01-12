# Render Deployment Guide

## For Render Static Site Deployment

### Prerequisites
- Render account (render.com)
- Git repository with this code

### Deployment Steps

1. **Push code to GitHub/GitLab:**
   ```bash
   git add .
   git commit -m "Setup for Render deployment"
   git push origin main
   ```

2. **Build locally (optional - to test):**
   ```bash
   npm install
   npm run build
   ```
   This creates a `dist/` folder with all CSS, JS, and assets bundled.

3. **On Render Dashboard:**
   - Click "New +" → "Static Site"
   - Connect your GitHub/GitLab repository
   - Choose the branch to deploy (usually `main`)
   - Set Build Command: `npm install && npm run build`
   - Set Publish directory: `dist`
   - Click "Create Static Site"

### What render.yaml does:
- Automatically configures the build and deployment settings
- Routes all requests to `index.html` (needed for React Router)
- Ensures all CSS, images, and assets are properly served

### Key Configuration:
- **buildCommand**: Installs dependencies and builds the optimized production version
- **staticPublishPath**: Points Render to the `dist` folder where all compiled files are
- **routes**: Handles React Router paths correctly

### File Structure After Build:
```
dist/
├── index.html
├── assets/
│   ├── main.xxxx.js  (bundled JavaScript)
│   ├── vendor.xxxx.js (vendor libraries)
│   ├── main.xxxx.css (bundled CSS)
│   └── images/
└── robots.txt
```

All files in `dist/` will be served with proper MIME types:
- `.js` files → application/javascript
- `.css` files → text/css
- `.html` → text/html
- Images → proper image types

### Troubleshooting:
- If CSS doesn't load: Clear browser cache and hard refresh
- If images don't show: Check image paths in your code
- If routes don't work: render.yaml config handles SPA routing

### Update Deployment:
Just push new code to your repository, Render will automatically rebuild and deploy!

```bash
git add .
git commit -m "Your changes"
git push
```

Render will detect the change and redeploy automatically.
