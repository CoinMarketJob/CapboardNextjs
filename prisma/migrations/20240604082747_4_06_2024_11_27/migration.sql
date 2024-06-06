-- DropForeignKey
ALTER TABLE `poolamount` DROP FOREIGN KEY `PoolAmount_poolId_fkey`;

-- AddForeignKey
ALTER TABLE `PoolAmount` ADD CONSTRAINT `PoolAmount_poolId_fkey` FOREIGN KEY (`poolId`) REFERENCES `Pool`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
