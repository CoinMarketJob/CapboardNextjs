/*
  Warnings:

  - You are about to drop the column `amountUnit` on the `pool` table. All the data in the column will be lost.
  - You are about to drop the column `grantsAmount` on the `pool` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `pool` DROP COLUMN `amountUnit`,
    DROP COLUMN `grantsAmount`;

-- CreateTable
CREATE TABLE `PoolAmount` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `grantsAmount` INTEGER NOT NULL,
    `amountUnit` ENUM('Shares', 'Percent') NOT NULL DEFAULT 'Shares',
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `poolId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PoolAmount` ADD CONSTRAINT `PoolAmount_poolId_fkey` FOREIGN KEY (`poolId`) REFERENCES `Pool`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
