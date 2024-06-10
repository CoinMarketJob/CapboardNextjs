-- DropForeignKey
ALTER TABLE `plan` DROP FOREIGN KEY `Plan_poolId_fkey`;

-- AddForeignKey
ALTER TABLE `Plan` ADD CONSTRAINT `Plan_poolId_fkey` FOREIGN KEY (`poolId`) REFERENCES `Pool`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
