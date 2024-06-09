-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `poolId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_poolId_fkey` FOREIGN KEY (`poolId`) REFERENCES `Pool`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
