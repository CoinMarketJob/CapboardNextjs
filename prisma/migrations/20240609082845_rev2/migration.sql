-- AlterTable
ALTER TABLE `transaction` MODIFY `purchasePrice` INTEGER NULL,
    MODIFY `vestingType` ENUM('Time', 'None') NULL DEFAULT 'Time';
