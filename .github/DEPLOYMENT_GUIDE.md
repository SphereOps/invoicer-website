# Deployment Guide for Invoicer

## GitHub Repository Setup

### 1\. Create Repository

```
# Initialize git (if not already done)
git init

# Add remote
git remote add origin https://github.com/sphereops/invoicer.git

# Push initial code
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### 2\. Enable GitHub Packages

GitHub Container Registry is automatically available for your repository. No additional setup needed!

The workflow uses `GITHUB_TOKEN` which is automatically provided by GitHub Actions.

#### Optional Secrets:

1.  **DISCORD\_WEBHOOK** (optional, for release notifications)
    *   Create webhook in Discord: Server Settings → Integrations → Webhooks
    *   Copy webhook URL
    *   Add to: `https://github.com/sphereops/invoicer/settings/secrets/actions`

### 3\. Make Package Public (Recommended)

After your first release, make the package public:

1.  Go to https://github.com/orgs/sphereops/packages/container/invoicer/settings
2.  Scroll to "Danger Zone"
3.  Click "Change visibility"
4.  Select "Public"
5.  Confirm the change

This allows anyone to pull your Docker images without authentication.

## Making Your First Release

### Option 1: Using NPM Version (Recommended)

```
# Bump version and create tag automatically
npm version patch -m "Release v%s"

# Push tag to trigger release
git push --follow-tags
```

### Option 2: Manual Tag Creation

```
# Create a tag
git tag -a v1.0.0 -m "Release v1.0.0 - Initial release"

# Push the tag
git push origin v1.0.0
```

### Option 3: GitHub UI

1.  Go to https://github.com/sphereops/invoicer/releases
2.  Click "Draft a new release"
3.  Click "Choose a tag" and type `v1.0.0` (or your version)
4.  Click "Create new tag: v1.0.0 on publish"
5.  Fill in release title and description
6.  Click "Publish release"

## Monitoring Releases

### GitHub Actions

*   View workflows: https://github.com/sphereops/invoicer/actions
*   Check release workflow status
*   View logs for debugging

### GitHub Packages

*   View packages: https://github.com/orgs/sphereops/packages/container/invoicer
*   Check published versions
*   View package details and download stats

## Testing the Release

```
# Pull the released image
docker pull ghcr.io/sphereops/invoicer:v1.0.0

# Run it locally
docker run -p 3000:3000 ghcr.io/sphereops/invoicer:v1.0.0

# Test in browser
open http://localhost:3000
```

## Authenticating with GitHub Container Registry (if private)

If your package is private, authenticate first:

```
# Create a Personal Access Token (PAT) with 'read:packages' scope
# Go to: https://github.com/settings/tokens

# Login to GitHub Container Registry
echo $GITHUB_PAT | docker login ghcr.io -u USERNAME --password-stdin

# Then pull the image
docker pull ghcr.io/sphereops/invoicer:v1.0.0
```

## Using Docker Compose

Create a `docker-compose.prod.yml`:

```
version: '3.8'

services:
  invoicer:
    image: ghcr.io/sphereops/invoicer:latest
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Deploy:

```
docker-compose -f docker-compose.prod.yml up -d
```

## Rollback Strategy

If a release has issues:

```
# Roll back to previous version
docker pull ghcr.io/sphereops/invoicer:v0.9.0
docker-compose down
# Update docker-compose.yml to use v0.9.0
docker-compose up -d
```

## Continuous Deployment

For automatic deployment to production:

1.  Add deployment secrets to GitHub
2.  Create `.github/workflows/deploy.yml`
3.  Configure your deployment target (AWS, DigitalOcean, etc.)

## Support

*   Documentation: https://github.com/sphereops/invoicer#readme
*   Discord: https://discord.gg/6mzgrSaTCz
*   Issues: https://github.com/sphereops/invoicer/issues
*   Packages: https://github.com/orgs/sphereops/packages/container/invoicer