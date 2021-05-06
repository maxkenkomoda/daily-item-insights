/*
  Warnings:

  - You are about to drop the column `nextBuy` on the `users_items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users_items" DROP COLUMN "nextBuy",
ADD COLUMN     "nextBuyDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
