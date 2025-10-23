# Edi Krisnayana Profile Website

This is a personal website created using Angular and deployed on GitHub Pages.

## Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Building for Production

### Static Build (for GitHub Pages)
```bash
npm run build:static
```

### Regular Build (with SSR)
```bash
npm run build
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. The deployment happens automatically when you push to the `main` or `master` branch.

### Manual Deployment Steps

1. **Enable GitHub Pages in your repository:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Push your code to the main branch:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

3. **The GitHub Action will automatically:**
   - Build the Angular app for static deployment
   - Deploy it to the `gh-pages` branch
   - Make it available at `https://edikrisnayana.github.io`

### Local Testing

To test the static build locally:
```bash
npm run build:static
npx http-server dist/edikrisnayana-profile-web/browser
```

## Configuration

- **Base href**: Set to `/` for root domain deployment
- **404.html**: Included for client-side routing support
- **Static build**: Configured to disable SSR for static hosting
- **Custom domain**: Configured for `edikrisnayana.github.io`
