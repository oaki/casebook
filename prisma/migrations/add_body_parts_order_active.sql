-- Add order and is_active columns to body_parts table
ALTER TABLE body_parts
ADD COLUMN `order` INT DEFAULT 0,
ADD COLUMN is_active BOOLEAN DEFAULT true;

-- Insert the three body parts with Slovak codes and English svg_region
INSERT INTO body_parts (code, svg_region, `order`, is_active, created_at, updated_at) VALUES
('skin', 'skin', 1, true, NOW(), NOW()),
('digestive_system', 'digestive_system', 2, true, NOW(), NOW()),
('respiratory_system', 'respiratory_system', 3, true, NOW(), NOW());
