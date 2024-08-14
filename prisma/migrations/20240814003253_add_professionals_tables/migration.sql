-- CreateTable
CREATE TABLE `Professionals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `profilePicURL` VARCHAR(191) NULL DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjpidNNgEsw5FilrgRG31qHay4kKeS_EnyQ&s',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProfessionalJobs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `price` DECIMAL(65, 30) NOT NULL,
    `duration` BIGINT NOT NULL,
    `jobId` INTEGER NOT NULL,
    `professionalId` INTEGER NOT NULL,

    UNIQUE INDEX `ProfessionalJobs_jobId_professionalId_key`(`jobId`, `professionalId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WorkSchedule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dayOfWeek` INTEGER NOT NULL,
    `startTime` VARCHAR(191) NOT NULL,
    `endTime` VARCHAR(191) NOT NULL,
    `professionalId` INTEGER NOT NULL,
    `tenantId` VARCHAR(191) NOT NULL,

    INDEX `WorkSchedule_professionalId_idx`(`professionalId`),
    INDEX `WorkSchedule_tenantId_idx`(`tenantId`),
    UNIQUE INDEX `WorkSchedule_professionalId_dayOfWeek_key`(`professionalId`, `dayOfWeek`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Holiday` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HolidayException` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `holidayId` INTEGER NOT NULL,
    `workScheduleId` INTEGER NOT NULL,
    `isWorking` BOOLEAN NOT NULL,
    `startTime` VARCHAR(191) NULL,
    `endTime` VARCHAR(191) NULL,

    UNIQUE INDEX `HolidayException_holidayId_workScheduleId_key`(`holidayId`, `workScheduleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProfessionalJobs` ADD CONSTRAINT `ProfessionalJobs_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `Jobs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProfessionalJobs` ADD CONSTRAINT `ProfessionalJobs_professionalId_fkey` FOREIGN KEY (`professionalId`) REFERENCES `Professionals`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkSchedule` ADD CONSTRAINT `WorkSchedule_professionalId_fkey` FOREIGN KEY (`professionalId`) REFERENCES `Professionals`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkSchedule` ADD CONSTRAINT `WorkSchedule_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `Tenant`(`tenantIdentify`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HolidayException` ADD CONSTRAINT `HolidayException_holidayId_fkey` FOREIGN KEY (`holidayId`) REFERENCES `Holiday`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HolidayException` ADD CONSTRAINT `HolidayException_workScheduleId_fkey` FOREIGN KEY (`workScheduleId`) REFERENCES `WorkSchedule`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
