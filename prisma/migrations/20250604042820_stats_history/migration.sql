/*
  Warnings:

  - The primary key for the `PlayerStats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `league_id` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `PlayerStats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlayerStats" DROP CONSTRAINT "PlayerStats_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "league_id" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL,
ADD CONSTRAINT "PlayerStats_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "PlayerStats" ADD CONSTRAINT "PlayerStats_league_id_fkey" FOREIGN KEY ("league_id") REFERENCES "Leagues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
