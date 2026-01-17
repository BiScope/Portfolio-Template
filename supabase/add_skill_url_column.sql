-- Add URL column to skills table for clickable links
ALTER TABLE skills ADD COLUMN IF NOT EXISTS url TEXT;
