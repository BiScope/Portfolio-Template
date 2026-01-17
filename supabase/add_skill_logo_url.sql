-- Add logo_url column to skills table for displaying actual logos
ALTER TABLE skills ADD COLUMN IF NOT EXISTS logo_url TEXT;
