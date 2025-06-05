/*
  Warnings:

  - You are about to drop the column `is_participant` on the `Teams` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Teams" DROP COLUMN "is_participant";

-- CreateTable
CREATE TABLE "Is_Participant" (
    "team_id" TEXT NOT NULL,
    "is_participant" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Is_Participant_pkey" PRIMARY KEY ("team_id")
);

-- AddForeignKey
ALTER TABLE "Is_Participant" ADD CONSTRAINT "Is_Participant_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
