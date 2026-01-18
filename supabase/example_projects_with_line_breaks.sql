-- Example Projects with Line Breaks in Description
-- This shows how to insert project descriptions with multiple paragraphs using \n

-- Method 1: Using E'' prefix for escape sequences (PostgreSQL)
INSERT INTO projects (title, category, company, intro, description, image_url, order_index) VALUES
(
  'Motiv',
  'Website',
  'Move',
  'Motiv reviews hundreds of applications and millions of people on LinkedIn in under 60 seconds.',
  E'Motiv is an AI agent that helps teams decide on who to interview in under a minute. Whether you''re screening thousands of applications or sourcing from millions of LinkedIn profiles, Motiv vets whether or not candidates are real (not bots) and what kind of impact they would have in your role based on their results, promotions, previous companies, etc.\n\nThe cool thing about Motiv is it fits into whatever workflow you''re using. There are two modes: ATS mode and solo mode. If you use an ATS like Greenhouse, Lever, or Workable - you can sync your jobs and candidates, and Motiv will verify and review everyone in under a minute. Not using an ATS? In solo mode, just drop in the job title, description, and upload your applicants from LinkedIn, Indeed, etc. and Motiv will take it from there.\n\nI worked closely with two co-founders (Mason and Hussain) for developing the 2nd version of MVP during 5 months of contribution and created way more robust technical and architectural solutions, by enhancing the user experience, performance bottlenecks and security.',
  NULL,
  1
);

-- Method 2: Using CHR(10) for newline (PostgreSQL)
INSERT INTO projects (title, category, company, intro, description, image_url, order_index) VALUES
(
  'LegalNature',
  'Website',
  'LegalNature Inc',
  'Online legal documents and services that are state compliant and affordable for individuals and businesses.',
  'LegalNature provides comprehensive online legal documents and services.' || CHR(10) || CHR(10) || 
  'The platform offers a wide range of legal documents including business formation, estate planning, real estate, and family law documents.' || CHR(10) || CHR(10) ||
  'All documents are state-compliant and reviewed by legal professionals to ensure accuracy and compliance with local laws.',
  NULL,
  2
);

-- Method 3: Using UPDATE statement with E'' prefix
UPDATE projects 
SET description = E'This is the first paragraph of the description.\n\nThis is the second paragraph with a line break before it.\n\nAnd here is the third paragraph.'
WHERE id = 'your-project-id-here';

-- Method 4: Multi-line string in SQL (works in Supabase/PostgreSQL)
INSERT INTO projects (title, category, company, intro, description, image_url, order_index) VALUES
(
  'Example Project',
  'Website',
  'Example Company',
  'A brief one-line intro.',
  'This is the first paragraph of the project description.

This is the second paragraph. Notice the blank line above creates a paragraph break.

And here is the third paragraph. You can use actual line breaks in SQL when using E'' prefix or by formatting your query properly.',
  NULL,
  3
);

-- Method 5: Using Supabase Dashboard Table Editor
-- In the Supabase Dashboard, when editing in the Table Editor:
-- You can paste text with actual line breaks, and they will be stored as \n
-- Example text to paste:
-- Paragraph 1 text here
--
-- Paragraph 2 text here  
--
-- Paragraph 3 text here
