-- Example Contact Information Data for Portfolio Website
-- Run this SQL in your Supabase SQL Editor after creating the schema

INSERT INTO contact_info (type, label, value, icon, order_index) VALUES
-- Email
('email', 'Email', 'azuresphere7@gmail.com', NULL, 1),

-- Phone
('phone', 'Phone', '+1 (737) 321-8057', NULL, 2),

-- Location
('location', 'Location', 'Austin, TX, 78735, USA', NULL, 3),

-- Social Media Links (LinkedIn)
('social', 'LinkedIn', 'https://www.linkedin.com/in/dustin-lee-0431b235', NULL, 4),

-- Social Media Links (GitHub)
('social', 'GitHub', 'https://github.com/azurespheredev', NULL, 5);

-- Example with icons (if you want to store icon names/codes)
-- Note: The icon field is optional and can store emoji or icon class names
/*
INSERT INTO contact_info (type, label, value, icon, order_index) VALUES
('email', 'Email', 'contact@example.com', '📧', 1),
('phone', 'Phone', '+1 (555) 123-4567', '📞', 2),
('location', 'Location', 'San Francisco, CA', '📍', 3),
('social', 'LinkedIn', 'https://www.linkedin.com/in/yourprofile', '💼', 4),
('social', 'GitHub', 'https://github.com/yourusername', '💻', 5),
('social', 'Twitter', 'https://twitter.com/yourusername', '🐦', 6),
('social', 'Instagram', 'https://instagram.com/yourusername', '📸', 7);
*/
