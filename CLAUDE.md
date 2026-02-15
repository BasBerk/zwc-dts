# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo static website for **Zaanse Wielerclub DTS** (Door Training Sterk), a Dutch cycling club founded in 1921. The site is built using the Hugo static site generator with the `hugo-fresh` theme, which is based on the Bulma CSS framework.

## Development Commands

### Local Development Server
```bash
hugo server
```
Starts development server at `http://localhost:1313/` with live reload.

### Build Static Site
```bash
hugo
```
Generates production-ready static files in the `public/` directory.

### Build Options
```bash
hugo --gc --minify  # Production build with garbage collection and minification
```

## Project Architecture

### Content Structure
- **`content/nieuws/`**: News articles with frontmatter including title, date, layout, and image path
- **`content/categorie/`**: Cycling category pages (jeugd, nieuwelingen, junioren, sportklasse, elite/belofte)
- **`content/wedstrijden/`**: Race/competition pages
- **`content/*.md`**: Page templates (contact, lid-worden, trainingen, veiligsport, etc.)

### Layout System
- **`layouts/shortcodes/`**: Custom Hugo shortcodes for reusable components:
  - `newsimage.html`: Image component with lazy loading and captions
  - `form.html`, `lidworden.html`, `proefles.html`: Form components for membership/trial registration
  - `cta.html`: Call-to-action component

- **`layouts/`**: Page-specific layouts that override theme defaults (e.g., `contact.html`)

### Configuration
- **`hugo.yaml`**: Primary configuration file defining:
  - Site metadata (baseURL, title, language)
  - Navigation structure (navbar with dropdowns)
  - Hero section content
  - Footer with quick links organized in columns
  - Sidebar configuration
  - Section tiles linking to key pages
  - Client/sponsor logos displayed on homepage

  **Important config notes:**
  - Line 14 has a typo: `re;ativeURLs` should be `relativeURLs`
  - Uses `unsafe: true` in goldmark renderer to allow raw HTML in markdown
  - Theme imported as Hugo module from `github.com/StefMa/hugo-fresh`

### Theme Integration
- **`themes/github.com/StefMa/hugo-fresh/`**: Custom Hugo-Fresh theme (git submodule)
- **`themes/github.com/jgthms/bulma/`**: Bulma CSS framework (git submodule)
- Both themes are managed as git submodules - use `git submodule update --init --recursive` after cloning

### Static Assets
- **`static/images/`**: All site images organized by type:
  - `logos/`: Club logo and sponsor/client logos
  - `news/`: News article images organized by event/topic
  - `illustrations/icons/`: SVG icons for UI elements

### Deployment
- **`.github/workflows/pages.yaml`**: GitHub Actions workflow for automated deployment
  - Builds site using Hugo 0.139.0 (extended version)
  - Deploys to GitHub Pages on push to master branch
  - Uses caching for Hugo build artifacts
  - Timezone: Europe/Amsterdam

## Content Authoring Guidelines

### News Article Format
News articles in `content/nieuws/` follow this frontmatter structure:
```yaml
---
title: "Article Title"
date: 2025-01-15
layout: nieuws
sidebar: false
include_footer: True
image: "/images/news/folder/image.jpg"
---
```

### Using Shortcodes
```markdown
{{< newsimage src="/images/news/event/photo.jpg" alt="Description" caption="Photo caption" >}}
```

### Image Organization
When adding news images, create a subfolder under `static/images/news/` named after the event or topic (e.g., `nk-baan-2025/`, `tourdelasall2025/`).

## Git Submodules
This project uses git submodules for themes. When cloning or pulling changes:
```bash
git submodule update --init --recursive
```

## Common Tasks

### Adding a News Article
1. Create new `.md` file in `content/nieuws/`
2. Add frontmatter with title, date, layout, and image path
3. Place images in `static/images/news/<event-name>/`
4. Reference images using absolute paths from site root: `/images/news/...`

### Modifying Navigation
Edit the `navbar` section in `hugo.yaml` to add/remove menu items or dropdown sublinks.

### Updating Sponsors/Client Logos
1. Add logo file to `static/images/logos/clients/`
2. Update `params.hero.clientlogos` array in `hugo.yaml`

### Customizing Theme Layouts
Create files in `layouts/` that mirror the theme structure to override defaults. Existing overrides include shortcodes and the contact page layout.
