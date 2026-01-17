-- Update projects table to support new fields for detail page
-- Add role, responsibilities, and technologies fields

ALTER TABLE projects 
ADD COLUMN IF NOT EXISTS role TEXT,
ADD COLUMN IF NOT EXISTS responsibilities TEXT[],
ADD COLUMN IF NOT EXISTS technologies TEXT[],
ADD COLUMN IF NOT EXISTS project_url TEXT;

-- Create project_images table for multiple images per project
CREATE TABLE IF NOT EXISTS project_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Public read access for project_images" ON project_images FOR SELECT USING (true);
