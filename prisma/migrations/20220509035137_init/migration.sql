/*
  Warnings:

  - You are about to drop the `MissionCOmmander` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MissionCOmmander";

-- CreateTable
CREATE TABLE "MissionCommander" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "missionCommander" TEXT NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MissionCommander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MissionCommander_name_key" ON "MissionCommander"("name");
