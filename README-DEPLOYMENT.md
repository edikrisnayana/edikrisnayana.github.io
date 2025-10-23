# GitHub Pages Deployment Setup

This document explains how to deploy your Angular application to GitHub Pages.

## Prerequisites

1. Your repository must be public (for free GitHub Pages) or you have GitHub Pro/Team
2. GitHub Actions must be enabled for your repository

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. Save the settings

### 2. Repository Structure

The following files are already configured:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `.nojekyll` - Tells GitHub Pages not to use Jekyll
- `public/404.html` - Handles client-side routing for Angular

### 3. Build Configuration

The workflow will:
1. Install Node.js 20
2. Install dependencies with `npm ci`
3. Build the Angular app with `npm run build`
4. Deploy the built files from `./dist/edikrisnayana-profile-web/browser`

### 4. Deployment

The deployment will automatically trigger when you push to the `master` or `main` branch.

## Troubleshooting

### Jekyll Conversion Errors

If you see Jekyll conversion errors:
1. Make sure the `.nojekyll` file exists in the root directory
2. Ensure no `_config.yml` or `Gemfile` files exist
3. The workflow should use the built Angular files, not process SCSS with Jekyll

### Build Errors

If the build fails:
1. Check that all dependencies are properly installed
2. Verify the build command works locally: `npm run build`
3. Ensure the output directory `./dist/edikrisnayana-profile-web/browser` exists after build

### Routing Issues

The `404.html` file handles client-side routing for Angular applications on GitHub Pages. This allows direct access to routes like `/about`, `/skills`, etc.

## Manual Deployment

If you want to deploy manually:

```bash
# Build the application
npm run build

# The built files will be in ./dist/edikrisnayana-profile-web/browser
# You can upload these files to GitHub Pages manually
```
