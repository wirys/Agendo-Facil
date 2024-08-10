-- CreateTable
CREATE TABLE `TenantExpedient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `weekDayName` VARCHAR(191) NOT NULL,
    `initialServiceAt` DECIMAL(65, 30) NOT NULL DEFAULT 0.00,
    `finalServiceAt` DECIMAL(65, 30) NOT NULL DEFAULT 0.00,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tenantId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TenantExpedient` ADD CONSTRAINT `TenantExpedient_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `Tenant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
