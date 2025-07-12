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

## 📁 Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilities
│   └── index.css       # Global styles
├── public/             # Static assets
├── dist/               # Built files (generated)
├── package.json        # Dependencies
├── vite.config.ts      # Vite configuration
└── vercel.json         # Vercel deployment config
```

## 🎨 Customization

### Colors
Edit `src/index.css` to change the color scheme:
- `--navy`: Primary blue color
- `--gold`: Accent gold color
- `--charcoal`: Dark text color
- `--light-gray`: Background color

### Content
Edit the component files in `src/components/` to update:
- Personal information
- Work experience
- Projects
- Skills
- Achievements

## 🔧 Technical Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Forms**: React Hook Form + Zod validation
- **Routing**: Wouter (lightweight router)
- **Build Tool**: Vite

## 📧 Contact Form

The contact form uses mailto links to open the user's email client with pre-filled information. This works perfectly for static hosting without requiring a backend server.

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

MIT License - feel free to use this template for your own portfolio!

---

**Portfolio of Sarwesh Khairnar**
- UNESCO India-Africa Hackathon Winner
- Smart India Hackathon Champion
- Software Engineer at JPMorgan Chase & Co.