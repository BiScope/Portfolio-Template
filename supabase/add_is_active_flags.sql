-- Add is_active flag to all tables for controlling visibility
-- Run this SQL in your Supabase SQL Editor

-- Add is_active to about_sections
ALTER TABLE about_sections ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

-- Add is_active to skills
ALTER TABLE skills ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

-- Add is_active to companies
ALTER TABLE companies ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

-- Add is_active to projects
ALTER TABLE projects ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

-- Add is_active to testimonials
ALTER TABLE testimonials ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

-- Add is_active to blogs
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

-- Add is_active to contact_info
ALTER TABLE contact_info ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

-- Add is_active to project_images
ALTER TABLE project_images ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_about_sections_is_active ON about_sections(is_active);
CREATE INDEX IF NOT EXISTS idx_skills_is_active ON skills(is_active);
CREATE INDEX IF NOT EXISTS idx_companies_is_active ON companies(is_active);
CREATE INDEX IF NOT EXISTS idx_projects_is_active ON projects(is_active);
CREATE INDEX IF NOT EXISTS idx_testimonials_is_active ON testimonials(is_active);
CREATE INDEX IF NOT EXISTS idx_blogs_is_active ON blogs(is_active);
CREATE INDEX IF NOT EXISTS idx_contact_info_is_active ON contact_info(is_active);
CREATE INDEX IF NOT EXISTS idx_project_images_is_active ON project_images(is_active);
