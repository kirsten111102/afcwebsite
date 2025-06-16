/*
  Warnings:

  - The primary key for the `Chairman` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Chairman` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Chairman_team_id_key";

-- AlterTable
ALTER TABLE "Chairman" DROP CONSTRAINT "Chairman_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Chairman_pkey" PRIMARY KEY ("team_id");
