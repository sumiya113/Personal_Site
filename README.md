# Personal Site

> A modern, interactive personal website built with React, TypeScript, and Vite

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0.1-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2.3-646CFF?logo=vite)](https://vitejs.dev/)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

Personal Site is a modern, fully responsive personal website that showcases your professional profile, projects, and skills. Built with cutting-edge web technologies, it features smooth animations, AI-powered functionality via Google GenAI, and a clean, professional design using Tailwind CSS.

This project serves as a dynamic digital portfolio that can be customized to reflect your unique personality and professional achievements. Whether you're a developer, designer, or creative professional, this site provides an excellent foundation for your online presence.

**Why this project exists:**
- 📱 Provide a professional online presence
- ⚡ Demonstrate web development capabilities
- 🎨 Showcase your work with a modern UI
- 🤖 Integrate AI features for enhanced interactivity

## Features

- ✨ **Modern, Responsive Design** – Mobile-first approach with Tailwind CSS
- 🎯 **Interactive UI** – Smooth animations powered by Motion library
- 🤖 **AI Integration** – Google GenAI integration for dynamic content generation
- 📝 **TypeScript Support** – Full type safety across the codebase
- ⚡ **Fast Performance** – Vite bundler for optimized builds
- 🚀 **Easy Deployment** – GitHub Pages support built-in
- 🎨 **Customizable** – Easy to modify colors, content, and layout
- 🔧 **Developer Experience** – Hot module replacement (HMR) during development
- 📦 **Production Ready** – Linting and build optimization included

## Tech Stack

### Frontend
- **React** (v19.0.1) – UI library
- **TypeScript** (v5.8.2) – Type-safe JavaScript
- **Vite** (v6.2.3) – Fast bundler and dev server
- **Tailwind CSS** (v4.1.14) – Utility-first CSS framework
- **Motion** (v12.23.24) – Animation library for smooth transitions

### Backend/Services
- **Express** (v4.21.2) – Optional server for backend functionality
- **Google GenAI** (v2.4.0) – AI-powered content generation

### Developer Tools
- **TypeScript Compiler** – Type checking and compilation
- **ESBuild** – JavaScript bundler
- **Autoprefixer** – CSS vendor prefixing
- **gh-pages** – GitHub Pages deployment

## Installation

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**
- **Git**

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/sumiya113/Personal_Site.git
   cd Personal_Site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   Or if you use yarn:
   ```bash
   yarn install
   ```

3. **Create environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your configuration:
   ```env
   VITE_GOOGLE_GENAI_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

## Usage

### Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run TypeScript type checking
npm run lint

# Clean build artifacts
npm run clean
```

### Development Workflow

1. **Make changes** to files in the `src/` directory
2. **Hot reload** will automatically refresh your browser
3. **Type checking** runs on save (ensure no TypeScript errors)
4. **Test locally** before deploying

### Customization

#### Update Personal Information
Edit the content in `src/components/` and replace placeholder text with your actual information:
- Profile details
- Project descriptions
- Contact information
- Links and social media profiles

#### Styling
Modify Tailwind CSS classes in your components to adjust colors, spacing, and layout. Configuration is in `tailwind.config.ts`.

#### AI Integration
To use Google GenAI features:
1. Get an API key from [Google AI Studio](https://aistudio.google.com)
2. Add it to your `.env` file
3. Integrate the API calls in your components using the `@google/genai` package

## Project Structure

```
Personal_Site/
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── pages/            # Page components
│   ├── assets/           # Images, icons, and static files
│   ├── styles/           # Global CSS styles
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Application entry point
├── public/               # Static assets served as-is
├── dist/                 # Production build output
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite bundler configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── README.md            # This file
```

## Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
# Google GenAI API Key (optional, only if using AI features)
VITE_GOOGLE_GENAI_API_KEY=your_api_key_here

# Application Settings
VITE_SITE_URL=https://yoursite.com
VITE_APP_NAME=Your Name
```

**Note:** Variables prefixed with `VITE_` are exposed to the client-side code. Never expose sensitive keys!

### Vite Configuration

Modify `vite.config.ts` to adjust:
- Port number
- Base URL for production
- Plugin settings
- Build output options

### Tailwind CSS

Customize colors and design tokens in `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color-here',
      },
    },
  },
}
```

## Deployment

### Deploy to GitHub Pages

1. **Configure your repository** for GitHub Pages in settings
2. **Build the project**
   ```bash
   npm run build
   ```
3. **Deploy automatically** (if configured) or **manually**
   ```bash
   npm run deploy
   ```

### Deploy to Other Platforms

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Netlify:**
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

**Traditional Hosting:**
1. Run `npm run build`
2. Upload the `dist/` folder to your hosting provider

## Roadmap

- [ ] Add blog functionality with MDX support
- [ ] Implement dark mode toggle
- [ ] Add SEO optimization and meta tags
- [ ] Create admin dashboard for content management
- [ ] Add analytics integration
- [ ] Implement contact form with email backend
- [ ] Add portfolio filtering and search
- [ ] Mobile app version (React Native)
- [ ] Internationalization (i18n) support
- [ ] Performance monitoring and optimization

## Contributing

Contributions are welcome! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/Personal_Site.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Write clear commit messages
   - Add comments for complex logic

4. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

5. **Submit a pull request**
   - Describe your changes clearly
   - Reference any related issues
   - Wait for review feedback

### Code Style

- Use TypeScript for type safety
- Follow React best practices and hooks
- Use meaningful variable and function names
- Keep components small and focused
- Write comments for non-obvious logic

## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

This means you're free to:
- Use this project for personal or commercial purposes
- Modify and distribute the code
- Include it in proprietary applications

However, you must:
- Include a copy of the license
- Credit the original author

## Contact

**Author:** [sumiya113](https://github.com/sumiya113)

Have questions or feedback? Feel free to reach out:

- **GitHub Issues:** [Open an issue](https://github.com/sumiya113/Personal_Site/issues)
- **Email:** [Add your email here]
- **Portfolio:** [Add your website here]
- **LinkedIn:** [Add your LinkedIn here]
- **Twitter:** [Add your Twitter handle here]

---

<div align="center">

**Made with ❤️ by [sumiya113](https://github.com/sumiya113)**

[⬆ Back to top](#personal-site)

</div>
