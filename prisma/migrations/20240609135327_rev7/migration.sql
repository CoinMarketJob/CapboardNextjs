-- AlterTable
ALTER TABLE `shareclasses` ADD COLUMN `antiDilition` VARCHAR(191) NULL,
    ADD COLUMN `dividendRights` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `hurdle` INTEGER NULL,
    ADD COLUMN `issueCertificates` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `taxValue` INTEGER NULL,
    ADD COLUMN `votingRights` BOOLEAN NOT NULL DEFAULT false;
