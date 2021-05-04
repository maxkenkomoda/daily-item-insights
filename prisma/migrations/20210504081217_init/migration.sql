-- CreateTable
CREATE TABLE "items_exchanges" (
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
CREATE UNIQUE INDEX "items_exchanges.name_unique" ON "items_exchanges"("name");

-- AddForeignKey
ALTER TABLE "items_exchanges" ADD FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
