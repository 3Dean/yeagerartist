# YeagerArtist Portfolio Website

Welcome to the YeagerArtist Portfolio Website, a modern, responsive portfolio built with Astro and TailwindCSS. This site showcases the immersive 3D environments, visual design projects, and interactive experiences created by Dean Yeager and Chat-GPT.

## Features

- **Astro + TailwindCSS** for fast, lightweight, and highly customizable static site generation
- **Dynamic project pages** powered by Markdown/MDX and Astro components
- **Responsive design** optimized for desktop, tablet, and mobile
- **Image optimization** using Astro’s built-in image handling
- **Site search and filtering** for quick navigation of portfolio projects

## Prerequisites

- Node.js v16 or higher
- npm or yarn
- Git (for cloning and version control)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-user/yeagerartist-website.git
   cd yeagerartist-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open your browser at `http://localhost:3000` to view the site locally.

## Building for Production

To build the static site for deployment:
```bash
npm run build
# or
yarn build
```
The generated files will be placed in the `dist/` directory.

## Deployment

This site can be deployed to any static hosting provider. Common options:

- **Netlify**: Connect your Git repo and deploy with a single click
- **Vercel**: Simple Git-based deployment, with support for Astro
- **AWS S3 + CloudFront**: Upload the `dist/` folder to an S3 bucket and serve via CloudFront
- **GitHub Pages**: Push the `dist/` contents to the `gh-pages` branch

## Project Structure

```
├── public/             # Static assets (images, fonts)
├── src/
│   ├── components/     # Reusable Astro/Svelte components
│   ├── layouts/        # Page layout templates
│   ├── pages/          # Astro page files and routes
│   ├── styles/         # TailwindCSS configuration and globals
│   └── data/           # Project metadata (e.g., projects.js)
├── astro.config.mjs    # Astro configuration
├── tailwind.config.cjs # TailwindCSS configuration
├── package.json        # Project scripts and dependencies
└── README.md           # This file
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for:
- Bug fixes
- New features or enhancements
- Documentation improvements

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
*Crafted with ❤️ by Dean Yeager*

