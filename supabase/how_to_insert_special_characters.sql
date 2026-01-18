-- How to Insert Special Characters in Project Descriptions
-- Examples showing how to include semicolons, quotes, and other special characters

-- Semicolon (;) in Description - No special escaping needed
INSERT INTO projects (title, category, company, intro, description, image_url, order_index) VALUES
(
  'Example Project',
  'Website',
  'Example Company',
  'A brief intro.',
  'This is paragraph 1 with a semicolon; it works fine. This is paragraph 2.\n\nThis is paragraph 3 with multiple; semicolons; and they all work.',
  NULL,
  1
);

-- Using UPDATE with semicolons
UPDATE projects 
SET description = E'First paragraph with a semicolon; and another one; works fine.\n\nSecond paragraph; also works; no problem.'
WHERE id = 'your-project-id';

-- Single Quotes (') - Need to escape with two single quotes ('')
INSERT INTO projects (title, category, company, intro, description, image_url, order_index) VALUES
(
  'Project Name',
  'Website',
  'Company Name',
  'Brief intro.',
  E'This is a description with single quotes: It''s working fine. Don''t worry about it.\n\nHere''s another sentence with quotes.',
  NULL,
  2
);

-- Double Quotes (") - No escaping needed
INSERT INTO projects (title, category, company, intro, description, image_url, order_index) VALUES
(
  'Project Name',
  'Website',
  'Company Name',
  'Brief intro.',
  E'This description has "double quotes" and they work fine.\n\nMultiple "quotes" are also "ok".',
  NULL,
  3
);

-- Multiple Special Characters Together
INSERT INTO projects (title, category, company, intro, description, image_url, order_index) VALUES
(
  'Complex Project',
  'Website',
  'Company Name',
  'Brief intro.',
  E'This is paragraph 1 with semicolons; quotes like "this"; and apostrophes like it''s.\n\nParagraph 2: More special chars; like colons: dashes - and exclamation marks!\n\nParagraph 3; Everything works; "no problem"; it''s all good.',
  NULL,
  4
);
