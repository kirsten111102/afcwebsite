/*
  Warnings:

  - The primary key for the `PlayerPersonalAchievements` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `league` on the `PlayerPersonalAchievements` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `PlayerPersonalAchievements` table. All the data in the column will be lost.
  - You are about to drop the column `win_rate` on the `PlayerStats` table. All the data in the column will be lost.
  - The primary key for the `PlayerTeamAchievements` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `year` on the `PlayerTeamAchievements` table. All the data in the column will be lost.
  - Added the required column `id` to the `PlayerPersonalAchievements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `league_id` to the `PlayerPersonalAchievements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `PlayerPersonalAchievements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `PlayerTeamAchievements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlayerInfo" ALTER COLUMN "dob" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "PlayerPersonalAchievements" DROP CONSTRAINT "PlayerPersonalAchievements_pkey",
DROP COLUMN "league",
DROP COLUMN "year",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "league_id" TEXT NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL,
ADD CONSTRAINT "PlayerPersonalAchievements_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PlayerStats" DROP COLUMN "win_rate";

-- AlterTable
ALTER TABLE "PlayerTeamAchievements" DROP CONSTRAINT "PlayerTeamAchievements_pkey",
DROP COLUMN "year",
ADD COLUMN     "time" TEXT NOT NULL,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "PlayerTeamAchievements_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "PlayerPersonalAchievements" ADD CONSTRAINT "PlayerPersonalAchievements_league_id_fkey" FOREIGN KEY ("league_id") REFERENCES "Leagues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
