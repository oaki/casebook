-- Baseline migration to mark current schema as applied

-- The following SQL represents the current state of the database schema.
-- This migration is used to baseline the existing production database.

CREATE TABLE `body_parts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(100) NOT NULL,
    `svg_region` TEXT NOT NULL,
    `created_by` INTEGER NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_by` INTEGER NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deleted_at` DATETIME(0) NULL,
    UNIQUE INDEX `code`(`code`),
    INDEX `idx_bp_created_by`(`created_by`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- (Include all other tables and constraints as per current schema...)

-- Note: This migration file should include the full current schema as a snapshot.
