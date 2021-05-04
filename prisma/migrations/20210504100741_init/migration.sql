/*
  Warnings:

  - You are about to drop the `items_exchanges` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "items_exchanges" DROP CONSTRAINT "items_exchanges_itemId_fkey";

-- DropTable
DROP TABLE "items_exchanges";

-- CreateTable
CREATE TABLE "items_records" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "itemId" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "bought_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "items_records.name_unique" ON "items_records"("name");

-- AddForeignKey
ALTER TABLE "items_records" ADD FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
