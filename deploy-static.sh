#!/bin/bash

# Simple deployment script for Sarwesh's portfolio
echo "🚀 Deploying Sarwesh's Portfolio to Vercel..."

# Check if we're in the right directory
if [ ! -f "portfolio-deploy/package.json" ]; then
    echo "❌ Error: Run this script from the project root directory"
    exit 1
fi

# Navigate to deployment directory
cd portfolio-deploy

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building static files..."
npm run build:static

echo "🌐 Deploying to Vercel..."
npx vercel --prod

echo "✅ Deployment complete!"
echo "Your portfolio is now live on Vercel! 🎉"