/*
  Warnings:

  - You are about to drop the column `issuePrice` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `totalInvestment` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `transferPrice` on the `transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `issuePrice`,
    DROP COLUMN `totalInvestment`,
    DROP COLUMN `transferPrice`,
    ADD COLUMN `price` INTEGER NULL;
