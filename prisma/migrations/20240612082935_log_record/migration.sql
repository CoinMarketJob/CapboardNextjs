-- CreateTable
CREATE TABLE `LogRecord` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `type` ENUM('View', 'Edit', 'Delete', 'Create') NOT NULL,
    `page` ENUM('Stakeholders', 'Transactions', 'Captable', 'ShareClasses', 'Pools', 'Plans', 'Grants', 'Documents', 'Settings', 'Collabarators') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LogRecord` ADD CONSTRAINT `LogRecord_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
