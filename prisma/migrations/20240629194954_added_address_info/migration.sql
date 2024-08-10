-- AlterTable
ALTER TABLE `tenant` ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `documentNumber` BIGINT NULL,
    ADD COLUMN `latitude` BIGINT NULL,
    ADD COLUMN `longitude` BIGINT NULL,
    ADD COLUMN `name` VARCHAR(191) NULL;
