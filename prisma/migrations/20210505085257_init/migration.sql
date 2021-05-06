/*
  Warnings:

  - The `nextBuy` column on the `users_items` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "users_items" DROP COLUMN "nextBuy",
ADD COLUMN     "nextBuy" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
