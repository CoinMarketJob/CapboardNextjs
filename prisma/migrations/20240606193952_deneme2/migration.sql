-- AlterTable
ALTER TABLE `plans` MODIFY `vestingType` ENUM('None', 'Time') NOT NULL DEFAULT 'Time';
