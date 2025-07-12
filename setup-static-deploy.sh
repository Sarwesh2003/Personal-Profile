#!/bin/bash

# Setup script for static deployment of Sarwesh's portfolio
echo "🚀 Setting up static deployment for Sarwesh's Portfolio..."

# Create deployment directory
echo "📁 Creating deployment directory..."
rm -rf portfolio-deploy
mkdir -p portfolio-deploy

# Copy essential files
echo "📋 Copying project files..."
cp -r client/* portfolio-deploy/
cp tailwind.config.ts portfolio-deploy/
cp postcss.config.js portfolio-deploy/
cp components.json portfolio-deploy/
cp tsconfig.json portfolio-deploy/

# Create package.json for static deployment
echo "📦 Creating package.json for static deployment..."
cat > portfolio-deploy/package.json << 'EOF'
{
  "name": "sarwesh-portfolio",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "wouter": "^3.3.5",
    "framer-motion": "^11.13.1",
    "lucide-react": "^0.453.0",
    "react-icons": "^5.4.0",
    "react-hook-form": "^7.55.0",
    "zod": "^3.24.2",
    "@hookform/resolvers": "^3.10.0",
    "tailwind-merge": "^2.6.0",
    "clsx": "^2.1.1",
    "class-variance-authority": "^0.7.1",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-toast": "^1.2.7",
    "@radix-ui/react-tooltip": "^1.2.0",
    "@radix-ui/react-label": "^2.1.3"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.2",
    "vite": "^5.4.19",
    "typescript": "5.6.3",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "tailwindcss": "^3.4.17",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss-animate": "^1.0.7"
  }
}
EOF

# Create Vite config for static deployment
echo "⚙️ Creating Vite configuration..."
cat > portfolio-deploy/vite.config.ts << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
EOF

# Create Vercel configuration
echo "🔧 Creating Vercel configuration..."
cat > portfolio-deploy/vercel.json << 'EOF'
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
EOF

# Create deployment README
echo "📝 Creating deployment README..."
cat > portfolio-deploy/README.md << 'EOF'
# Sarwesh Khairnar - Portfolio Website

A modern, responsive portfolio website showcasing leadership achievements, hackathon victories, and impactful projects.

## 🚀 Quick Deploy to Vercel

### Option 1: Direct Deployment (Recommended)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy to Vercel**:
   ```bash
   npx vercel --prod
   ```

### Option 2: GitHub Integration

1. **Push this folder to GitHub**
2. **Connect to Vercel** with these settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Option 3: Local Development

```bash
npm install
npm run dev
```
Visit `http://localhost:3000`

## 🌟 Features

- **Responsive Design**: Works on all devices
- **Modern UI**: Built with React, Tailwind CSS, and Framer Motion
- **Interactive Contact Form**: Uses mailto links for static hosting
- **Professional Showcase**: Highlights achievements and projects
- **Fast Performance**: Optimized for speed and SEO

## 📧 Contact Form

The contact form uses mailto links to open the user's email client with pre-filled information. This works perfectly for static hosting without requiring a backend server.

---

**Portfolio of Sarwesh Khairnar**
- UNESCO India-Africa Hackathon Winner
- Smart India Hackathon Champion
- Software Engineer at JPMorgan Chase & Co.
EOF

echo "✅ Static deployment setup complete!"
echo ""
echo "📁 Your deployment files are in: portfolio-deploy/"
echo ""
echo "🚀 To deploy:"
echo "  cd portfolio-deploy"
echo "  npm install"
echo "  npm run build"
echo "  npx vercel --prod"
echo ""
echo "🌐 Or push the 'portfolio-deploy' folder to GitHub and connect to Vercel!"