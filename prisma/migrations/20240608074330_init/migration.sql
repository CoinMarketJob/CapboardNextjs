-- CreateTable
CREATE TABLE `Transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `type` ENUM('Grant', 'PoolCreation', 'PlanCreation', 'PoolIncrease', 'PoolDecrease') NOT NULL,
    `stakeholderId` INTEGER NULL,
    `amount` INTEGER NOT NULL,
    `expiryDate` DATETIME(3) NULL,
    `purchasePrice` INTEGER NOT NULL,
    `vestingType` ENUM('Time', 'None') NOT NULL DEFAULT 'Time',
    `startDate` DATETIME(3) NULL,
    `duration` INTEGER NULL,
    `vestEveryDate` INTEGER NULL,
    `cliff` INTEGER NULL,
    `goodLeaver` VARCHAR(191) NULL,
    `badLeaver` VARCHAR(191) NULL,
    `liquidityEvent` VARCHAR(191) NULL,
    `note` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pool` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `poolName` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `shareClassId` INTEGER NOT NULL,
    `note` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_stakeholderId_fkey` FOREIGN KEY (`stakeholderId`) REFERENCES `Stakeholders`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pool` ADD CONSTRAINT `Pool_shareClassId_fkey` FOREIGN KEY (`shareClassId`) REFERENCES `ShareClasses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
