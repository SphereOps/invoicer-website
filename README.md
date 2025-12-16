# Invoicer Documentation Website

A modern, clean documentation website for Invoicer - a self-hosted invoice generator tool. Built with Next.js, React, and TypeScript.

## Structure

The website consists of three main pages:

- **Landing Page** (`/`) - Marketing page with hero section and feature highlights
- **Documentation** (`/docs`) - Main documentation hub with navigation
- **About** (`/about`) - About page with contact information

All documentation is generated from Markdown files in the `docs/` folder.

## Documentation Structure

Documentation is written in Markdown files organized in the `docs/` folder:

```
docs/
├── getting-started/
│   └── introduction.md
├── features/
│   └── overview.md
├── installation/
│   └── docker.md
├── usage/
│   ├── creating-invoices.md
│   └── exporting.md
└── api/
    ├── overview.md
    └── reference.md
```

Next.js automatically:
- Converts all Markdown files to HTML at build time
- Generates a navigation structure from the folder hierarchy
- Creates static pages for all documentation
- Handles relative links between documentation pages

## Quick Start with Docker

The easiest way to run the website is using Docker Compose:

```bash
docker-compose up -d
```

This will:
1. Build the Next.js application
2. Generate static pages from Markdown files
3. Start the web server on port 8080

Access the website at `http://localhost:4000`

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser (development server)

**Note**: The Docker container runs on port 4000, while the development server runs on port 3000.

### Build for Production

```bash
npm run build
npm start
```

## Adding Documentation

1. Create or edit Markdown files in the `docs/` folder
2. The navigation will automatically update based on the folder structure
3. Pages are statically generated at build time

### Example: Adding a New Documentation Page

1. Create a new Markdown file: `docs/advanced/customization.md`
2. The page will be available at `/docs/advanced/customization`
3. It will automatically appear in the documentation navigation

## Features

- **Next.js 14**: Modern React framework with App Router
- **TypeScript**: Type-safe development
- **Markdown-Based**: Write documentation in Markdown, automatically converted to HTML
- **Auto-Navigation**: Navigation tree automatically generated from folder structure
- **Static Generation**: All pages are pre-rendered for optimal performance
- **Modern Design**: Navy blue theme with darker blue accents
- **Responsive**: Works on desktop, tablet, and mobile
- **Docker-Ready**: One command deployment with Docker Compose

## Project Structure

```
website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── docs/              # Documentation pages
│   └── not-found.tsx     # 404 page
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── DocsNav.tsx
├── lib/                    # Utility functions
│   └── markdown.ts        # Markdown processing
├── docs/                   # Documentation source (Markdown)
├── public/                # Static assets
├── styles.css             # Global styles
└── package.json
```

## Customization

### Colors

Edit CSS variables in `styles.css`:

- `--navy-primary`: Main background (#1a1d29)
- `--navy-secondary`: Secondary background (#2c2f3e)
- `--accent-blue`: Primary accent (#1e4a7e - darker blue)
- `--text-primary`: Main text color (#ffffff)

### Navigation

The navigation structure is automatically generated from the `docs/` folder. The `lib/markdown.ts` file processes the folder structure and creates the navigation tree.

## Docker Configuration

The Docker setup includes:

- **Dockerfile**: Multi-stage build for optimal image size
- **docker-compose.yml**: Orchestrates the service (maps port 4000 to container port 3000)
- **Volume mounts**: `docs/` folder is mounted read-only

To rebuild after changing documentation:

```bash
docker-compose restart
```

Or rebuild the image:

```bash
docker-compose up -d --build
```

## Technology Stack

- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety
- **Marked**: Markdown to HTML conversion
- **Gray Matter**: Front matter parsing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This documentation website is part of the Invoicer project.