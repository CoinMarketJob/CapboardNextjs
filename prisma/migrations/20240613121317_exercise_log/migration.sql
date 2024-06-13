-- AlterTable
ALTER TABLE `logrecord` MODIFY `page` ENUM('Stakeholders', 'Transactions', 'Captable', 'ShareClasses', 'Pools', 'Plans', 'Grants', 'Exercise', 'Documents', 'Settings', 'BillingInfo', 'Collabarators', 'Meetings') NOT NULL;
