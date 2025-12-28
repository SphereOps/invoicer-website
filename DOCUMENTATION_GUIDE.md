# Documentation Guide

## Adding New Documentation

The Invoicer website uses a markdown-based documentation system that automatically generates navigation and page structure. Adding new documentation is simple and straightforward.

### How It Works

1. **Markdown Files**: All documentation lives in the `/docs` directory as `.md` files
2. **Automatic Navigation**: The system automatically builds the navigation sidebar from your folder structure
3. **Front Matter**: Use YAML front matter to set page titles and metadata
4. **Auto-Linking**: Relative markdown links are automatically converted to proper Next.js routes

### File Structure

```
docs/
├── getting-started/
│   └── introduction.md
├── installation/
│   └── docker.md
├── features/
│   └── overview.md
└── usage/
    ├── creating-invoices.md
    └── exporting.md
```

### Adding a New Document

1. **Create the file** in the appropriate folder (or create a new folder):

```bash
# Example: Add a new guide for configurations
mkdir -p docs/configuration
touch docs/configuration/settings.md
```

2. **Add content** using markdown:

```markdown
---
title: Configuration Settings
---

# Configuration Settings

This guide covers how to configure Invoicer for your needs.

## Environment Variables

You can configure Invoicer using the following environment variables:

- `PORT`: The port to run the server on (default: 3000)
- `DATABASE_URL`: Connection string for your database

## Example

\`\`\`bash
docker run -e PORT=8080 -e DATABASE_URL=... sphereops/invoicer
\`\`\`
```

3. **That's it!** The page will automatically:
   - Appear in the navigation sidebar
   - Generate a table of contents in the right sidebar
   - Be accessible at `/docs/configuration/settings`

### Organizing Documentation

#### Folder Names
- Use lowercase
- Use hyphens for spaces: `getting-started`, `advanced-features`
- Folders automatically become navigation categories

#### File Names
- Use lowercase
- Use hyphens for spaces: `docker-setup.md`, `user-management.md`
- The filename becomes the URL slug

#### Navigation Order
Files and folders are sorted alphabetically. To control order, you can prefix with numbers:

```
docs/
├── 01-getting-started/
│   ├── 01-introduction.md
│   └── 02-quick-start.md
├── 02-installation/
│   ├── 01-docker.md
│   └── 02-manual.md
```

### Markdown Features

#### Headings
```markdown
# H1 - Page Title
## H2 - Major Section
### H3 - Subsection
#### H4 - Minor Subsection
```

#### Links
```markdown
<!-- Relative link to another doc -->
[Installation Guide](../installation/docker.md)

<!-- External link -->
[Docker](https://docker.com)
```

#### Code Blocks
````markdown
```bash
docker run -p 3000:3000 sphereops/invoicer
```

```javascript
const config = {
  port: 3000,
  host: 'localhost'
}
```
````

#### Lists
```markdown
- Unordered item 1
- Unordered item 2

1. Ordered item 1
2. Ordered item 2
```

#### Images
```markdown
![Alt text](/images/screenshot.png)
```

### Front Matter

You can add YAML front matter to set page metadata:

```markdown
---
title: Custom Page Title
description: A description of this page
---

# Your content here
```

### Best Practices

1. **One topic per page**: Keep pages focused on a single topic
2. **Clear headings**: Use descriptive headings for easy scanning
3. **Code examples**: Include practical examples wherever possible
4. **Cross-linking**: Link to related documentation pages
5. **Keep it updated**: Regular review documentation for accuracy

### Example: Adding API Documentation

Let's say you want to add API documentation:

1. Create the folder structure:
```bash
mkdir -p docs/api
```

2. Create the files:
```bash
touch docs/api/overview.md
touch docs/api/authentication.md
touch docs/api/endpoints.md
```

3. Add content to `docs/api/overview.md`:
```markdown
---
title: API Overview
---

# API Overview

Invoicer provides a RESTful API for programmatic access to your invoices.

## Base URL

```
http://localhost:3000/api
```

## Authentication

See the [Authentication Guide](./authentication.md) for details.

## Available Endpoints

- [Invoices API](./endpoints.md#invoices)
- [Clients API](./endpoints.md#clients)
```

The documentation will now automatically appear in the navigation under "API" with three pages!

### Need Help?

Join our Discord community for support: https://discord.gg/sphereops

