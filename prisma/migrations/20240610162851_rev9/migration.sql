-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `cap` INTEGER NULL,
    ADD COLUMN `discount` INTEGER NULL,
    ADD COLUMN `floor` INTEGER NULL,
    ADD COLUMN `interestStartDate` DATETIME(3) NULL,
    ADD COLUMN `issuePrice` INTEGER NULL,
    ADD COLUMN `maturityDate` DATETIME(3) NULL,
    ADD COLUMN `nonCompounding` INTEGER NULL,
    ADD COLUMN `retention` INTEGER NULL,
    ADD COLUMN `shareClassId` INTEGER NULL,
    ADD COLUMN `totalInvestment` INTEGER NULL,
    ADD COLUMN `totalPayment` INTEGER NULL,
    ADD COLUMN `transferPrice` INTEGER NULL,
    MODIFY `type` ENUM('StockSplit', 'ConvertibleLoan', 'Secondary', 'DecreaseShares', 'IssueShares', 'Payout', 'Grant', 'PoolCreation', 'PlanCreation', 'PoolIncrease', 'PoolDecrease') NOT NULL;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_shareClassId_fkey` FOREIGN KEY (`shareClassId`) REFERENCES `ShareClasses`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
