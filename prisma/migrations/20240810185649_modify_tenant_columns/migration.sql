/*
  Warnings:

  - A unique constraint covering the columns `[tenantIdentify]` on the table `Tenant` will be added. If there are existing duplicate values, this will fail.
  - Made the column `tenantId` on table `jobs` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `jobs` DROP FOREIGN KEY `Jobs_tenantId_fkey`;

-- AlterTable
ALTER TABLE `jobs` MODIFY `tenantId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Tenant_tenantIdentify_key` ON `Tenant`(`tenantIdentify`);

-- AddForeignKey
ALTER TABLE `Jobs` ADD CONSTRAINT `Jobs_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `Tenant`(`tenantIdentify`) ON DELETE CASCADE ON UPDATE CASCADE;
