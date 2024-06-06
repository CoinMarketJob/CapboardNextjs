-- CreateTable
CREATE TABLE `Plans` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `planName` VARCHAR(191) NOT NULL,
    `poolId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `grantType` ENUM('Phantom', 'Stock', 'StockOptions', 'Warrants', 'SARs') NOT NULL DEFAULT 'Phantom',
    `pricePerShare` DOUBLE NOT NULL,
    `purchasePrice` DOUBLE NOT NULL,
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

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
