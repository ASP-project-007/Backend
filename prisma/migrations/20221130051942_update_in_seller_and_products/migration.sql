/*
  Warnings:

  - You are about to drop the column `location` on the `Seller` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Products` ADD COLUMN `images` VARCHAR(191) NOT NULL DEFAULT 'NA';

-- AlterTable
ALTER TABLE `Seller` DROP COLUMN `location`,
    ADD COLUMN `images` VARCHAR(191) NOT NULL DEFAULT 'NA',
    ADD COLUMN `lat` VARCHAR(191) NOT NULL DEFAULT 'NA',
    ADD COLUMN `long` VARCHAR(191) NOT NULL DEFAULT 'NA';
