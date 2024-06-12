-- AlterTable
ALTER TABLE `logrecord` MODIFY `page` ENUM('Stakeholders', 'Transactions', 'Captable', 'ShareClasses', 'Pools', 'Plans', 'Grants', 'Documents', 'Settings', 'BillingInfo', 'Collabarators') NOT NULL;
