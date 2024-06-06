-- DropForeignKey
ALTER TABLE `plans` DROP FOREIGN KEY `Plans_poolId_fkey`;

-- AddForeignKey
ALTER TABLE `Plans` ADD CONSTRAINT `Plans_poolId_fkey` FOREIGN KEY (`poolId`) REFERENCES `Pool`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
