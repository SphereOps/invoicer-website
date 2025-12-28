# Release Checklist

## Pre-Release

*   All tests passing
*   Documentation updated
*   CHANGELOG.md updated
*   Version bumped in package.json
*   Docker build tested locally

## Creating a Release

### 1\. Update Version

```
# Update version in package.json
npm version patch  # for bug fixes (1.0.0 -> 1.0.1)
# OR
npm version minor  # for new features (1.0.0 -> 1.1.0)
# OR
npm version major  # for breaking changes (1.0.0 -> 2.0.0)
```

### 2\. Create and Push Tag

```
# Create a tag (if not created by npm version)
git tag -a v1.0.0 -m "Release v1.0.0"

# Push tag to trigger release workflow
git push origin v1.0.0
```

### 3\. Monitor Workflow

*   Go to https://github.com/sphereops/invoicer/actions
*   Watch the "Release and Publish Docker Image" workflow
*   Ensure it completes successfully

### 4\. Verify Release

*   Check Docker Hub: https://hub.docker.com/r/sphereops/invoicer
*   Test the image: `docker pull sphereops/invoicer:v1.0.0`
*   Verify GitHub release: https://github.com/sphereops/invoicer/releases

### 5\. Announce

*   Post in Discord community
*   Update documentation site
*   Tweet/social media (if applicable)

## Post-Release

*   Monitor for issues
*   Update project board
*   Plan next release