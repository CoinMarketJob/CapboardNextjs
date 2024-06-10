-- AlterTable
ALTER TABLE `plan` ADD COLUMN `documentId` INTEGER NULL;

-- AlterTable
ALTER TABLE `pool` ADD COLUMN `documentId` INTEGER NULL;

-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `documentId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Documents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `DocumentName` VARCHAR(191) NOT NULL,
    `Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `Documents`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pool` ADD CONSTRAINT `Pool_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `Documents`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Plan` ADD CONSTRAINT `Plan_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `Documents`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
