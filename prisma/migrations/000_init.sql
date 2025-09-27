-- DropForeignKey
ALTER TABLE `case_body_parts` DROP FOREIGN KEY `fk_body_case`;

-- DropForeignKey
ALTER TABLE `case_body_parts` DROP FOREIGN KEY `fk_case_body`;

-- DropForeignKey
ALTER TABLE `case_clinical_symptoms` DROP FOREIGN KEY `fk_case_clin`;

-- DropForeignKey
ALTER TABLE `case_clinical_symptoms` DROP FOREIGN KEY `fk_clin_case`;

-- DropForeignKey
ALTER TABLE `case_microbiome_factors` DROP FOREIGN KEY `fk_case_micro`;

-- DropForeignKey
ALTER TABLE `case_microbiome_factors` DROP FOREIGN KEY `fk_micro_case`;

-- DropForeignKey
ALTER TABLE `case_studies` DROP FOREIGN KEY `fk_cs_nutrition`;

-- DropForeignKey
ALTER TABLE `case_studies` DROP FOREIGN KEY `fk_cs_product`;

-- DropForeignKey
ALTER TABLE `case_studies` DROP FOREIGN KEY `fk_cs_user`;

-- DropForeignKey
ALTER TABLE `case_study_images` DROP FOREIGN KEY `fk_csi_case`;

-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `fk_events_case`;

-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `fk_events_user`;

-- DropForeignKey
ALTER TABLE `magic_links` DROP FOREIGN KEY `fk_ml_user`;

-- DropForeignKey
ALTER TABLE `patients` DROP FOREIGN KEY `fk_patient_case`;

-- DropForeignKey
ALTER TABLE `sessions` DROP FOREIGN KEY `fk_s_user`;

-- DropForeignKey
ALTER TABLE `user_roles` DROP FOREIGN KEY `fk_ur_role`;

-- DropForeignKey
ALTER TABLE `user_roles` DROP FOREIGN KEY `fk_ur_user`;

-- DropTable
DROP TABLE `body_parts`;

-- DropTable
DROP TABLE `case_body_parts`;

-- DropTable
DROP TABLE `case_clinical_symptoms`;

-- DropTable
DROP TABLE `case_microbiome_factors`;

-- DropTable
DROP TABLE `case_studies`;

-- DropTable
DROP TABLE `case_study_images`;

-- DropTable
DROP TABLE `clinical_symptoms`;

-- DropTable
DROP TABLE `events`;

-- DropTable
DROP TABLE `magic_links`;

-- DropTable
DROP TABLE `microbiome_factors`;

-- DropTable
DROP TABLE `nutritional_histories`;

-- DropTable
DROP TABLE `patients`;

-- DropTable
DROP TABLE `products`;

-- DropTable
DROP TABLE `roles`;

-- DropTable
DROP TABLE `sessions`;

-- DropTable
DROP TABLE `user_roles`;

-- DropTable
DROP TABLE `users`;

