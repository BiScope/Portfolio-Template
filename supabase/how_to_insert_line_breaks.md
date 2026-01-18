# How to Insert Line Breaks in Project Descriptions

## Method 1: Using E'' Prefix (Recommended for PostgreSQL/Supabase)

The `E''` prefix in PostgreSQL allows escape sequences like `\n` to work:

```sql
INSERT INTO projects (title, category, company, intro, description, image_url, order_index) VALUES
(
  'Project Name',
  'Website',
  'Company Name',
  'One sentence intro.',
  E'First paragraph text here.\n\nSecond paragraph text here.\n\nThird paragraph text here.',
  NULL,
  1
);
```

## Method 2: Using Supabase Dashboard Table Editor

1. Go to your Supabase Dashboard
2. Navigate to **Table Editor**
3. Select the `projects` table
4. Click on a row or add a new row
5. In the `description` field, simply paste your text with actual line breaks:
   ```
   First paragraph text here.
   
   Second paragraph text here.
   
   Third paragraph text here.
   ```
6. Save the row - Supabase will automatically convert line breaks to `\n`

## Method 3: Using UPDATE Statement

```sql
UPDATE projects 
SET description = E'Updated first paragraph.\n\nUpdated second paragraph.\n\nUpdated third paragraph.'
WHERE id = 'your-project-id';
```

## Method 4: Using CHR(10) Function

```sql
INSERT INTO projects (title, category, company, intro, description, image_url, order_index) VALUES
(
  'Project Name',
  'Website',
  'Company Name',
  'Intro',
  'Paragraph 1' || CHR(10) || CHR(10) || 'Paragraph 2' || CHR(10) || CHR(10) || 'Paragraph 3',
  NULL,
  1
);
```

## Tips:

- Use `\n\n` for paragraph breaks (double newline)
- Use `\n` for single line breaks
- In the dashboard, just use actual line breaks in the text field
- The `E''` prefix is the most reliable method for SQL scripts

## Special Characters:

### Semicolon (;)
- **No special escaping needed** - semicolons in text work fine
- Example: `'Text with semicolon; more text; works fine.'`

### Single Quotes (')
- **Escape with two single quotes** (`''`)
- Example: `E'It''s working fine. Don''t worry.'`

### Double Quotes (")
- **No escaping needed** - double quotes work as-is
- Example: `'Text with "double quotes" works fine.'`

### Other Characters
- Colons (`:`), dashes (`-`), exclamation marks (`!`), etc. work fine without escaping
