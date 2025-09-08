# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm run dev` - Start Vite development server (port 3000, auto-opens browser)
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build

### Package Management
- `npm install` - Install dependencies

## Architecture Overview

This is a personal website built as a single-page application (SPA) using vanilla JavaScript with Vite as the build tool. The site features a custom client-side routing system and a sophisticated content management system for "memos" (short-form writing).

### Tech Stack
- **Build Tool**: Vite 5.4.8
- **Frontend**: Vanilla JavaScript (ES6 modules)
- **Content Processing**: `marked` for Markdown parsing, `gray-matter` for front matter
- **Styling**: Plain CSS with custom properties

### Key Architecture Patterns

**Custom SPA Router** (`src/main.js:51`):
- Client-side routing using `window.history.pushState`
- Routes: `/` (about), `/writing`, `/projects`, `/memos`
- Supports both synchronous and asynchronous page rendering

**Component System**:
- Function-based page components in `src/pages/` that return HTML strings
- Each page module exports a default function that renders content

**Memo Content Management**:
- JSON metadata files in `src/data/memos/` define memo properties
- Markdown content files in `src/data/memos/content/` contain actual text
- Dynamic loading using Vite's `import.meta.glob()` for scalable content discovery
- Client-side Markdown parsing with sidebar navigation

## Project Structure

```
src/
├── main.js              # Entry point and router (51 lines)
├── style.css            # Global styles (379 lines)
├── pages/               # Page components
│   ├── about.js         # Static about page
│   ├── writing.js       # Links to external Medium articles
│   ├── projects.js      # Static projects showcase
│   └── memos.js         # Dynamic memo system (123 lines)
├── controllers/
│   └── memo-controller.js # Memo management logic
└── data/memos/          # Content storage for memos
    ├── *.json           # Metadata files
    └── content/*.md     # Markdown content
```

## Content Management

### Adding New Memos
1. Create JSON metadata file in `src/data/memos/` with structure:
   ```json
   {
     "title": "Memo Title",
     "date": "2024-01-01",
     "contentPath": "path/to/content.md"
   }
   ```
2. Add corresponding Markdown file in `src/data/memos/content/`

### External Writing
Writing page (`src/pages/writing.js`) contains static links to Medium articles rather than local content.

## Development Configuration

### Vite Configuration (`vite.config.js`)
- Development server on port 3000 with auto-open
- API proxy to `localhost:8080` for `/api` routes (if needed)
- Path alias: `@` maps to `./src`
- Production builds to `dist/` with minification

### Styling Approach
- CSS custom properties for theming in `src/style.css`
- Responsive design with mobile breakpoints
- Typography mixing Helvetica Neue and monospace fonts
- Flexbox and CSS Grid for layouts

## Important Notes

### No Testing Framework
This codebase currently has no testing framework or linting tools. Code changes can be made directly without test requirements.

### Simple Deployment
The site is hosted at boundbyflux.com but has no automated deployment configuration in the repository.

### Content Philosophy
- Memos: Local dynamic content with Markdown support
- Writing: External links to Medium articles
- Projects: Static showcase content (currently placeholder)
- About: Static personal information page