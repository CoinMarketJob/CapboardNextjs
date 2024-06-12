/*
  Warnings:

  - You are about to drop the column `Note` on the `shareclasses` table. All the data in the column will be lost.
  - You are about to drop the column `antiDilition` on the `shareclasses` table. All the data in the column will be lost.
  - You are about to drop the column `taxValue` on the `shareclasses` table. All the data in the column will be lost.
  - Made the column `hurdle` on table `shareclasses` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `shareclasses` DROP COLUMN `Note`,
    DROP COLUMN `antiDilition`,
    DROP COLUMN `taxValue`,
    ADD COLUMN `antiDilution` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `liquidationPreference` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `tax` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `hurdle` BOOLEAN NOT NULL DEFAULT false;
