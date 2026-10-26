# Beyene Portfolio Website

This portfolio is built as a modern single-page React app with a dark mode aesthetic and a MERN-focused design tone.

## Features
- Sticky navigation with smooth scrolling
- Animated typing hero section
- About, Skills, Projects, Experience, and Contact sections
- Filterable project cards
- Contact form with confirmation messaging
- Responsive light/dark theme toggle
- Deployment config for Vercel and Netlify

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production Build

```bash
npm run build
```

## Deployment

### Vercel
1. Import the repo into Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Add the `vercel.json` file already included in the project.

### Netlify
1. Import the repo into Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The project includes a `netlify.toml` configuration file.

## Notes
This portfolio uses a static front-end for the portfolio itself. The contact form API is designed for local development and can be adapted for serverless hosting if you need production form delivery.
