-- Remove icon column from skills table since we're using logo_url instead
ALTER TABLE skills DROP COLUMN IF EXISTS icon;
