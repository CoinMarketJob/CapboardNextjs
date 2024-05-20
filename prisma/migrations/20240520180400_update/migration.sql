/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Stakeholders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` BOOLEAN NOT NULL,
    `name` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `contactEmail` VARCHAR(191) NOT NULL,
    `group` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `optionalLineOfAddress` VARCHAR(191) NULL,
    `postalCode` VARCHAR(191) NULL,
    `cityName` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `identifier` VARCHAR(191) NULL,
    `customIdentifier` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `birthdate` VARCHAR(191) NULL,
    `nationality` VARCHAR(191) NULL,
    `civilStatus` VARCHAR(191) NULL,
    `customDetail` VARCHAR(191) NULL,
    `notes` VARCHAR(191) NULL,

    UNIQUE INDEX `Stakeholders_contactEmail_key`(`contactEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
