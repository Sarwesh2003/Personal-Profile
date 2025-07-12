# replit.md

## Overview

This is a professional portfolio website for Sarwesh Khairnar, converted to a static deployment-ready format for easy hosting on platforms like Vercel, Netlify, or GitHub Pages. The application showcases leadership achievements, hackathon victories, and impactful projects with a focus on societal contributions. The portfolio has been optimized for static hosting with mailto-based contact forms and deployment-ready configurations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application has been converted to a static deployment format with multiple deployment configurations:

- **Main Development**: Full-stack React + Express.js (for local development)
- **Static Deployment**: React-only application optimized for static hosting
- **Frontend**: React with TypeScript, styled using Tailwind CSS and shadcn/ui components
- **Contact Form**: mailto-based for static hosting compatibility
- **Build System**: Vite for frontend bundling and development
- **Deployment**: Multiple configurations for Vercel, Netlify, and GitHub Pages

## Deployment Structure

- **portfolio-deploy/**: Ready-to-deploy static version with Vercel configuration
- **portfolio-static/**: Alternative static deployment with minimal dependencies
- **client/**: Original development frontend
- **server/**: Development backend (not used in static deployment)

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom color scheme (navy, gold, charcoal themes)
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions and effects

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Routes**: RESTful endpoints for contact form submissions
- **Middleware**: Custom logging, JSON parsing, and error handling
- **Storage**: Currently uses in-memory storage with interface for easy database migration
- **Development**: Vite integration for hot module replacement

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Tables**: Contacts table with fields for name, email, subject, message, and timestamps
- **Validation**: Zod schemas for type-safe data validation
- **Migrations**: Configured for database schema management

## Data Flow

1. **Contact Form Submission**: User fills out contact form on frontend
2. **Form Validation**: Client-side validation using React Hook Form + Zod
3. **API Request**: Form data sent to `/api/contact` endpoint
4. **Server Processing**: Express route validates data and stores in memory
5. **Response**: Success/error response sent back to client
6. **UI Update**: Toast notification shown to user based on response

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- UI components (Radix UI primitives, shadcn/ui)
- Styling (Tailwind CSS, class-variance-authority)
- State management (TanStack React Query)
- Animations (Framer Motion)
- Icons (Lucide React, React Icons)
- Utilities (date-fns, clsx)

### Backend Dependencies
- Express.js framework
- Drizzle ORM with PostgreSQL support
- Neon Database serverless driver
- Session management (connect-pg-simple)
- Validation (Zod)
- Development tools (tsx, esbuild)

### Development Dependencies
- Vite for build tooling
- TypeScript for type safety
- Tailwind CSS for styling
- PostCSS for CSS processing
- Replit-specific plugins for development environment

## Deployment Strategy

The application is configured for multiple deployment scenarios:

1. **Development**: Uses Vite dev server with HMR and Express backend
2. **Production**: 
   - Frontend built with Vite and served as static files
   - Backend bundled with esbuild as ESM modules
   - Database migrations managed through Drizzle Kit
   - Environment variables for database connection

### Build Process
- `npm run dev`: Development mode with hot reloading
- `npm run build`: Production build (frontend + backend)
- `npm run start`: Production server
- `npm run db:push`: Database schema synchronization

### Key Configuration Files
- `vite.config.ts`: Frontend build configuration
- `drizzle.config.ts`: Database ORM configuration
- `tsconfig.json`: TypeScript configuration for monorepo
- `tailwind.config.ts`: Styling configuration
- `components.json`: shadcn/ui component configuration

The application is designed to be easily deployable on platforms like Replit, Vercel, or any Node.js hosting service with PostgreSQL support.