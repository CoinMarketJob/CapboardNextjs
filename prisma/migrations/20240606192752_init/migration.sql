-- CreateTable
CREATE TABLE `Stakeholders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` BOOLEAN NOT NULL,
    `name` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `contactEmail` VARCHAR(191) NOT NULL,
    `group` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `optionalLineOfAddress` VARCHAR(191) NULL,
    `postalCode` VARCHAR(191) NULL,
    `cityName` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `identifier` VARCHAR(191) NULL,
    `customIdentifier` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `birthdate` VARCHAR(191) NULL,
    `nationality` VARCHAR(191) NULL,
    `civilStatus` VARCHAR(191) NULL,
    `customDetail` VARCHAR(191) NULL,
    `notes` VARCHAR(191) NULL,

    UNIQUE INDEX `Stakeholders_contactEmail_key`(`contactEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `hashedPassword` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShareClasses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `nominalPrice` DOUBLE NOT NULL,
    `Note` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pool` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `shareClassId` INTEGER NOT NULL,
    `documentId` INTEGER NULL,
    `Note` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PoolAmount` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `grantsAmount` INTEGER NOT NULL,
    `amountUnit` ENUM('Shares', 'Percent') NOT NULL DEFAULT 'Shares',
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `poolId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plans` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `planName` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `grantType` ENUM('Phantom', 'Stock', 'StockOptions', 'Warrants', 'SARs') NOT NULL DEFAULT 'Phantom',
    `pricePerShare` DOUBLE NOT NULL,
    `vestingType` ENUM('None', 'Time') NOT NULL,
    `startDate` DATETIME(3) NULL,
    `duration` INTEGER NULL,
    `vestEvery` INTEGER NULL,
    `cliff` INTEGER NULL,
    `goodLeaver` VARCHAR(191) NULL,
    `badLeaver` VARCHAR(191) NULL,
    `liquidityEvent` VARCHAR(191) NULL,
    `documentId` INTEGER NULL,
    `Note` VARCHAR(191) NOT NULL,
    `poolId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pool` ADD CONSTRAINT `Pool_shareClassId_fkey` FOREIGN KEY (`shareClassId`) REFERENCES `ShareClasses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PoolAmount` ADD CONSTRAINT `PoolAmount_poolId_fkey` FOREIGN KEY (`poolId`) REFERENCES `Pool`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Plans` ADD CONSTRAINT `Plans_poolId_fkey` FOREIGN KEY (`poolId`) REFERENCES `Pool`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
