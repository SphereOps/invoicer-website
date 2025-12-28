# Release Process with CHANGELOG

This guide explains how to manage releases using the CHANGELOG system.

## 📝 Before Each Release

### Step 1: Update CHANGELOG.md

Edit `CHANGELOG.md` and move items from `[Unreleased]` to a new version section:

```markdown
## [Unreleased]
(Keep empty or add items for next release)

## [1.1.0] - 2025-01-15

### Added
- Live invoice tracking dashboard
- Email notification system
- Export to Excel feature

### Changed
- Improved PDF export performance
- Updated invoice template design

### Fixed
- Timezone issues in date display
- Currency formatting for EUR
```

### Step 2: Commit the CHANGELOG

```bash
git add CHANGELOG.md
git commit -m "Update CHANGELOG for v1.1.0"
git push
```

### Step 3: Create a Release Tag

```bash
git tag -a v1.1.0 -m "Release v1.1.0"
git push origin v1.1.0
```

## 🤖 What Happens Automatically

Once you push the tag, the GitHub Actions workflow will:

1. **Extract the changelog** from the `[Unreleased]` section or version-specific section
2. **Build Docker images** for `linux/amd64` and `linux/arm64`
3. **Push to GitHub Container Registry** with tags:
   - `v1.1.0`
   - `1.1`
   - `1`
   - `latest`
4. **Create GitHub Release** with:
   - Your changelog content
   - Docker pull commands
   - Quick start instructions
   - Platform information
5. **Send Discord notification** with:
   - Release title and version
   - Changelog excerpt (first 500 chars)
   - Docker image pull command
   - Links to release and documentation
6. **Trigger deployment** (if configured)

## 📋 CHANGELOG Categories

Use these categories to organize your changes:

- **Added** - New features
- **Changed** - Changes to existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Security updates

## 💡 Tips

### Writing Good Changelog Entries

**Good:**
```markdown
### Added
- Live invoice tracking with real-time status updates
- Email notifications when invoices are viewed
- Export invoices to Excel format (.xlsx)

### Fixed
- Invoice dates now respect user's timezone
- EUR currency symbol displays correctly
```

**Bad:**
```markdown
### Added
- Added stuff
- Fixed things
- Updated code
```

### Keep Unreleased Section Active

Always keep an `[Unreleased]` section at the top for ongoing work:

```markdown
## [Unreleased]

### Added
- Feature in progress

## [1.1.0] - 2025-01-15
...
```

### Version Format

Follow [Semantic Versioning](https://semver.org/):
- `v1.0.0` → `v2.0.0` - Breaking changes (MAJOR)
- `v1.0.0` → `v1.1.0` - New features (MINOR)
- `v1.0.0` → `v1.0.1` - Bug fixes (PATCH)

## 📦 Example Release Flow

```bash
# 1. Update CHANGELOG.md
nano CHANGELOG.md

# 2. Commit changes
git add CHANGELOG.md
git commit -m "Update CHANGELOG for v1.1.0"
git push

# 3. Create and push tag
git tag -a v1.1.0 -m "Release v1.1.0"
git push origin v1.1.0

# 4. Wait for GitHub Actions to complete
# 5. Check your Discord for notification
# 6. Verify deployment (if configured)
```

## 🔍 Viewing Releases

- **GitHub Releases**: https://github.com/sphereops/invoicer/releases
- **Docker Images**: https://github.com/orgs/sphereops/packages/container/invoicer
- **Actions Status**: https://github.com/sphereops/invoicer/actions

## 🆘 Troubleshooting

### Changelog Not Appearing in Release

Make sure:
1. `CHANGELOG.md` exists in repository root
2. The version section is properly formatted
3. The `[Unreleased]` section has content

### Discord Notification Missing Changelog

- The workflow truncates changelog to 500 characters for Discord
- Full changelog is always in the GitHub Release
- Check Discord webhook is configured correctly

### Wrong Version in Release Notes

- Ensure you're using the correct tag format: `v1.0.0` (not `1.0.0`)
- Tag must match semantic versioning pattern: `v*.*.*`

## 📚 Resources

- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)
- [GitHub Releases](https://docs.github.com/en/repositories/releasing-projects-on-github)

