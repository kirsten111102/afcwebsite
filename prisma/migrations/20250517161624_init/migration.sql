-- CreateTable
CREATE TABLE "Teams" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chairman" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "team_id" TEXT NOT NULL,

    CONSTRAINT "Chairman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "shirt_no" INTEGER NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leagues" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Leagues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalAchievements" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PersonalAchievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerInfo" (
    "player_id" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "birthplace" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "biography" TEXT NOT NULL,
    "height" INTEGER NOT NULL,

    CONSTRAINT "PlayerInfo_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "PlayerRatings" (
    "player_id" TEXT NOT NULL,
    "pace" INTEGER NOT NULL,
    "shooting" INTEGER NOT NULL,
    "passing" INTEGER NOT NULL,
    "physical" INTEGER NOT NULL,
    "defending" INTEGER NOT NULL,
    "dribbling" INTEGER NOT NULL,

    CONSTRAINT "PlayerRatings_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "PlayerStats" (
    "player_id" TEXT NOT NULL,
    "matches" INTEGER NOT NULL,
    "goals" INTEGER NOT NULL,
    "assists" INTEGER NOT NULL,
    "yellow_cards" INTEGER NOT NULL,
    "red_cards" INTEGER NOT NULL,
    "win_rate" DECIMAL(65,30) NOT NULL DEFAULT 0.00,

    CONSTRAINT "PlayerStats_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "PlayerTeamAchievements" (
    "id" INTEGER NOT NULL,
    "player_id" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "league_id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "PlayerTeamAchievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerPersonalAchievements" (
    "player_id" TEXT NOT NULL,
    "achievement_id" TEXT NOT NULL,
    "league" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "PlayerPersonalAchievements_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "PlayerTeammateThoughts" (
    "id" SERIAL NOT NULL,
    "player_id" TEXT NOT NULL,
    "thoughts" TEXT NOT NULL,
    "sent_to" TEXT NOT NULL,

    CONSTRAINT "PlayerTeammateThoughts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chairman_team_id_key" ON "Chairman"("team_id");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chairman" ADD CONSTRAINT "Chairman_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Players" ADD CONSTRAINT "Players_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerInfo" ADD CONSTRAINT "PlayerInfo_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerRatings" ADD CONSTRAINT "PlayerRatings_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerStats" ADD CONSTRAINT "PlayerStats_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerTeamAchievements" ADD CONSTRAINT "PlayerTeamAchievements_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerTeamAchievements" ADD CONSTRAINT "PlayerTeamAchievements_league_id_fkey" FOREIGN KEY ("league_id") REFERENCES "Leagues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerTeamAchievements" ADD CONSTRAINT "PlayerTeamAchievements_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerPersonalAchievements" ADD CONSTRAINT "PlayerPersonalAchievements_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerPersonalAchievements" ADD CONSTRAINT "PlayerPersonalAchievements_achievement_id_fkey" FOREIGN KEY ("achievement_id") REFERENCES "PersonalAchievements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerPersonalAchievements" ADD CONSTRAINT "PlayerPersonalAchievements_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerTeammateThoughts" ADD CONSTRAINT "PlayerTeammateThoughts_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerTeammateThoughts" ADD CONSTRAINT "PlayerTeammateThoughts_sent_to_fkey" FOREIGN KEY ("sent_to") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
