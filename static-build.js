#!/usr/bin/env node

/**
 * Build test script for static deployment
 * This script validates that the deployment setup works correctly
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🧪 Testing static deployment build...');

// Check if deployment folder exists
const deployDir = path.join(__dirname, 'portfolio-deploy');
if (!fs.existsSync(deployDir)) {
  console.error('❌ portfolio-deploy folder not found');
  process.exit(1);
}

console.log('✅ portfolio-deploy folder found');

// Check essential files
const requiredFiles = [
  'package.json',
  'vite.config.ts',
  'vercel.json',
  'src/App.tsx',
  'src/main.tsx',
  'index.html'
];

console.log('🔍 Checking required files...');
for (const file of requiredFiles) {
  const filePath = path.join(deployDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing file: ${file}`);
    process.exit(1);
  }
  console.log(`✅ ${file}`);
}

// Check package.json structure
const packageJson = JSON.parse(fs.readFileSync(path.join(deployDir, 'package.json'), 'utf8'));
if (!packageJson.scripts || !packageJson.scripts.build) {
  console.error('❌ package.json missing build script');
  process.exit(1);
}
console.log('✅ package.json has build script');

// Check vite config
const viteConfig = fs.readFileSync(path.join(deployDir, 'vite.config.ts'), 'utf8');
if (!viteConfig.includes('react') || !viteConfig.includes('resolve')) {
  console.error('❌ vite.config.ts missing essential configuration');
  process.exit(1);
}
console.log('✅ vite.config.ts properly configured');

// Check vercel config
const vercelConfig = JSON.parse(fs.readFileSync(path.join(deployDir, 'vercel.json'), 'utf8'));
if (!vercelConfig.buildCommand || !vercelConfig.outputDirectory) {
  console.error('❌ vercel.json missing essential configuration');
  process.exit(1);
}
console.log('✅ vercel.json properly configured');

console.log('');
console.log('🎉 All tests passed! Deployment setup is ready.');
console.log('');
console.log('🚀 To deploy:');
console.log('  cd portfolio-deploy');
console.log('  npm install');
console.log('  npm run build:static');
console.log('  npx vercel --prod');
console.log('');
console.log('🚀 Or use the quick deployment script:');
console.log('  ./deploy-static.sh');
console.log('');
console.log('🌐 Or push to GitHub and connect to Vercel!');