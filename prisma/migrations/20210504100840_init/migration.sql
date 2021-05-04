/*
  Warnings:

  - You are about to drop the `items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_userId_fkey";

-- DropForeignKey
ALTER TABLE "items_records" DROP CONSTRAINT "items_records_itemId_fkey";

-- DropTable
DROP TABLE "items";

-- CreateTable
CREATE TABLE "users_items" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_items.name_unique" ON "users_items"("name");

-- AddForeignKey
ALTER TABLE "users_items" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_records" ADD FOREIGN KEY ("itemId") REFERENCES "users_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
