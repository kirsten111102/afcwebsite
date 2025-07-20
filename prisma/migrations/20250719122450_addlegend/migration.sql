-- CreateTable
CREATE TABLE "Legends" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,

    CONSTRAINT "Legends_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegendsInfo" (
    "player_id" TEXT NOT NULL,
    "dob" DATE NOT NULL,
    "birthplace" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "biography" TEXT NOT NULL,
    "height" INTEGER NOT NULL,

    CONSTRAINT "LegendsInfo_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "LegendsRatings" (
    "player_id" TEXT NOT NULL,
    "pace" INTEGER NOT NULL,
    "shooting" INTEGER NOT NULL,
    "passing" INTEGER NOT NULL,
    "physical" INTEGER NOT NULL,
    "defending" INTEGER NOT NULL,
    "dribbling" INTEGER NOT NULL,

    CONSTRAINT "LegendsRatings_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "LegendsTeamAchievements" (
    "id" TEXT NOT NULL,
    "player_id" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "league_id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "LegendsTeamAchievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegendsPersonalAchievements" (
    "id" TEXT NOT NULL,
    "player_id" TEXT NOT NULL,
    "achievement_id" TEXT NOT NULL,
    "league_id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "LegendsPersonalAchievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegendsTeammateThoughts" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "thoughts" TEXT NOT NULL,
    "sent_to" TEXT NOT NULL,

    CONSTRAINT "LegendsTeammateThoughts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Legends" ADD CONSTRAINT "Legends_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegendsInfo" ADD CONSTRAINT "LegendsInfo_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Legends"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegendsRatings" ADD CONSTRAINT "LegendsRatings_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Legends"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegendsTeamAchievements" ADD CONSTRAINT "LegendsTeamAchievements_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Legends"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegendsTeamAchievements" ADD CONSTRAINT "LegendsTeamAchievements_league_id_fkey" FOREIGN KEY ("league_id") REFERENCES "Leagues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegendsTeamAchievements" ADD CONSTRAINT "LegendsTeamAchievements_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegendsPersonalAchievements" ADD CONSTRAINT "LegendsPersonalAchievements_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Legends"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegendsPersonalAchievements" ADD CONSTRAINT "LegendsPersonalAchievements_achievement_id_fkey" FOREIGN KEY ("achievement_id") REFERENCES "PersonalAchievements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegendsPersonalAchievements" ADD CONSTRAINT "LegendsPersonalAchievements_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegendsPersonalAchievements" ADD CONSTRAINT "LegendsPersonalAchievements_league_id_fkey" FOREIGN KEY ("league_id") REFERENCES "Leagues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegendsTeammateThoughts" ADD CONSTRAINT "LegendsTeammateThoughts_sent_to_fkey" FOREIGN KEY ("sent_to") REFERENCES "Legends"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
