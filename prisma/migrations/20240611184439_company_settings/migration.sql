-- CreateTable
CREATE TABLE `CompanyBasicInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logoURL` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `currency` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `showShareNumber` BOOLEAN NOT NULL,
    `decimalVesting` BOOLEAN NOT NULL,
    `isAnSpv` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BillingInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullCompanyName` VARCHAR(191) NOT NULL,
    `billingContract` VARCHAR(191) NOT NULL,
    `billingCountry` VARCHAR(191) NOT NULL,
    `billingAddress` VARCHAR(191) NOT NULL,
    `PostalCode` VARCHAR(191) NOT NULL,
    `vatRegistirationNumber` ENUM('TurkishTax', 'EuropenVat') NOT NULL,
    `TaxNumber` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
