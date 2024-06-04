-- CreateTable
CREATE TABLE `ShareClasses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `nominalPrice` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pool` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `grantsAmount` INTEGER NOT NULL,
    `amountUnit` ENUM('Shares', 'Percent') NOT NULL DEFAULT 'Shares',
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `shareClassId` INTEGER NOT NULL,
    `documentId` INTEGER NULL,
    `Note` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pool` ADD CONSTRAINT `Pool_shareClassId_fkey` FOREIGN KEY (`shareClassId`) REFERENCES `ShareClasses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
