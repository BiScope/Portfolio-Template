# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

- **Home Page**: Hero section, skills showcase, services, companies, projects, and testimonials
- **About Page**: Detailed professional experience sections and recommendations
- **Services Page**: Web Site, Web Design, and Mobile services
- **Portfolio Page**: Filterable project gallery with detail pages
- **Blog Page**: List of blog posts from various platforms
- **Contact Page**: Contact form and contact information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works fine)

### Installation

1. Clone the repository and navigate to the project directory:
```bash
cd /home/richard/Projects/temp
```

2. Install dependencies:
```bash
npm install
```

3. Set up Supabase:
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to SQL Editor and run the SQL from `supabase/schema.sql`
   - Go to Project Settings > API and copy your project URL and anon key

4. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Database Schema

The database includes the following tables:

- `about_sections` - About page content sections
- `skills` - Skills organized by category (Frontend, Backend, DevOps)
- `companies` - Company logos and information
- `projects` - Portfolio projects with images and details
- `testimonials` - Client testimonials/recommendations
- `blogs` - Blog posts with metadata
- `contact_info` - Contact information
- `contact_submissions` - Form submissions

## Adding Data

You can add data to your Supabase database through:
1. The Supabase Dashboard (Table Editor)
2. SQL Editor
3. The Supabase API

Example SQL to add a skill:
```sql
INSERT INTO skills (category, name, icon, order_index) 
VALUES ('Frontend', 'React', '⚛️', 1);
```

Example SQL to add a project:
```sql
INSERT INTO projects (title, category, company, intro, image_url, order_index)
VALUES ('E-commerce Platform', 'Website', 'Tech Corp', 'A modern e-commerce solution', 'https://example.com/image.jpg', 1);
```

## Project Structure

```
├── app/
│   ├── about/           # About page
│   ├── blog/            # Blog page
│   ├── contact/         # Contact page
│   ├── portfolio/       # Portfolio pages
│   ├── services/        # Services page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── About/           # About page components
│   ├── Blog/            # Blog page components
│   ├── Contact/         # Contact page components
│   ├── Home/            # Home page components
│   ├── Portfolio/       # Portfolio components
│   ├── Services/        # Services components
│   ├── Footer.tsx       # Footer component
│   └── Navbar.tsx       # Navigation component
├── lib/
│   └── supabase.ts      # Supabase client
└── supabase/
    └── schema.sql       # Database schema
```

## Building for Production

```bash
npm run build
npm start
```

## License

MIT
