/*
  Warnings:

  - You are about to drop the column `name` on the `items_records` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "items_records.name_unique";

-- AlterTable
ALTER TABLE "items_records" DROP COLUMN "name";
