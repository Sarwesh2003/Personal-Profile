#!/bin/bash

# Build script for static deployment
echo "Building static portfolio website..."

# Create dist directory
mkdir -p dist

# Copy client files to dist
echo "Copying client files..."
cp -r client/* dist/

# Copy attached assets
echo "Copying assets..."
cp -r attached_assets dist/assets/

# Create a simple index.html in root
echo "Creating production HTML..."
cat > dist/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sarwesh Khairnar - Portfolio</title>
    <meta name="description" content="Portfolio of Sarwesh Khairnar - Software Engineer, UNESCO Hackathon Winner, and Technical Leader">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <script type="module" crossorigin src="/src/main.tsx"></script>
    <link rel="stylesheet" href="/src/index.css">
</head>
<body>
    <div id="root"></div>
</body>
</html>
EOF

echo "Static build completed! Files are in the 'dist' directory."
echo "To deploy to Vercel:"
echo "1. Run: cd dist && vercel --prod"
echo "2. Or upload the 'dist' folder to your hosting provider"