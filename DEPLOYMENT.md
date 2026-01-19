# Cloudflare Pages Deployment Guide

## Quick Start

### Method 1: Git Integration (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages** → **Create Application** → **Pages**
   - Connect your Git repository

3. **Configure Build Settings:**
   ```
   Framework preset:        Vite
   Build command:           npm run build:website
   Build output directory:  website/dist
   Root directory:          (leave empty - build at root)
   Node version:            22
   ```

4. **Deploy!** Cloudflare will automatically build and deploy your site.

### Method 2: Manual Deploy with Wrangler

```bash
# From project root
npm run build:website

# Deploy
npx wrangler pages deploy website/dist --project-name=foamicons
```

## Build Process Explained

The `build:website` command does the following:

1. **Generates icon components** from SVG sources (`npm run generate`)
2. **Builds the icon library** (`tsup`)
3. **Installs website dependencies** (`cd website && npm install`)
4. **Builds the website** (`npm run build` in website/)

Output: `website/dist/` contains the static site ready for deployment.

## Environment Variables

No environment variables are required for basic deployment.

## Custom Domain Setup

1. In Cloudflare Pages, go to your project
2. Navigate to **Custom domains**
3. Add your domain (e.g., `icons.yourdomain.com`)
4. Cloudflare will automatically configure SSL

## Routing & Redirects

The `website/public/_redirects` file ensures client-side routing works:

```
/*  /index.html  200
```

This tells Cloudflare to serve `index.html` for all routes, allowing React Router to handle navigation.

## Troubleshooting

### Build fails with "Cannot find module 'foamicons'"

**Solution:** Ensure you're using `npm run build:website` from the **root directory**, not from the `website/` folder.

### Icons not loading

**Solution:** Check that the library was built successfully:
```bash
npm run build
# Should create dist/index.js, dist/index.cjs, etc.
```

### URLs like `/bell-color` return 404

**Solution:** Verify `_redirects` file exists at `website/public/_redirects`

### Build command not found

**Solution:** Use the exact commands:
- **Cloudflare Pages**: `npm run build:website`
- **NOT**: `npm dev build` or `npm build` or `vite build`

## Development vs Production

**Local development:**
```bash
cd website
npm run dev
```

**Production build:**
```bash
# From root
npm run build:website
```

## Deployment Checklist

- [ ] Code pushed to Git repository
- [ ] Build command set to: `npm run build:website`
- [ ] Build output set to: `website/dist`
- [ ] Node version set to: `22` (or your version)
- [ ] `_redirects` file exists in `website/public/`
- [ ] Test build locally first: `npm run build:website`

## Automatic Deployments

With Git integration, Cloudflare Pages automatically deploys:
- **Production**: Commits to `main`/`master` branch
- **Preview**: Commits to other branches (PRs get preview URLs)

## Performance

Expected build time: ~2-3 minutes
- Icon generation: ~10 seconds
- Library build: ~5 seconds
- Website build: ~30 seconds
- The rest is dependency installation

## Cost

Cloudflare Pages free tier includes:
- Unlimited bandwidth
- Unlimited requests
- 500 builds per month
- 1 concurrent build

Perfect for this project! 🎉
