import {PrismaClient} from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const allPlayers = await prisma.players.findMany();
  await prisma.playerTeammateThoughts.deleteMany();
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "PlayerTeammateThoughts" RESTART IDENTITY CASCADE`
  );
  const thoughts = await prisma.playerTeammateThoughts.createMany({
    data: [
      {
        player_id: "cote_8",
        thoughts: "He is a good player, a player whom I can trust.",
        sent_to: "cote_10",
      },
      {
        player_id: "cote_25",
        thoughts:
          "He is good but I should be the captain to kick his ass cause sometimes he doesn't focus on the f**king pitch.",
        sent_to: "cote_10",
      },
    ],
  });
  var fs = require("fs");

  const rawdatateams = fs.readFileSync("./txt/all_teams_info.txt", "utf-8");
  const teamsarray = JSON.parse(rawdatateams);
  const teams = await prisma.teams.createMany({
    data: teamsarray,
    skipDuplicates: true,
  });

  const rawdatateamsstatus = fs.readFileSync(
    "./txt/all_teams_qualify_status.txt",
    "utf-8"
  );
  const teamsstatusarray = JSON.parse(rawdatateamsstatus);
  await prisma.is_Participant.deleteMany();
  teamsstatusarray.forEach(async (team: any) => {
    const teamsstatus = await prisma.is_Participant.create({
      data: {
        team_id: team["id"],
        is_participant: team["is_participant"],
      },
    });
  });

  const rawdatachairman = fs.readFileSync("./txt/team_chairman.txt", "utf-8");
  const chairmanarray = JSON.parse(rawdatachairman);
  const chairman = await prisma.chairman.createMany({
    data: chairmanarray,
    skipDuplicates: true,
  });

  const rawemployees = fs.readFileSync("./txt/team_employees.txt", "utf-8");
  const employeesarray = JSON.parse(rawemployees);
  await prisma.employee.deleteMany();
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "Employee" RESTART IDENTITY CASCADE`
  );
  const employees = await prisma.employee.createMany({
    data: employeesarray,
    skipDuplicates: true,
  });

  const rawdataplayers = fs.readFileSync("allplayersdata.txt", "utf-8");
  const playersarray = JSON.parse(rawdataplayers);
  const players = await prisma.players.createMany({
    data: playersarray,
    skipDuplicates: true,
  });

  /*const update = await prisma.players.update({
    where: { id: "jjk_8" },
    data: {
      name: "Inumaki Toge",
      age: 19,
    },
  });*/

  const rawdata = fs.readFileSync("all_player_stats.txt", "utf-8");
  const playerStatsArray = JSON.parse(rawdata);
  await prisma.playerStats.deleteMany();
  const stats = await prisma.playerStats.createMany({
    data: playerStatsArray,
    skipDuplicates: true,
  });

  const rawdata_b = fs.readFileSync("all_player_stats_b.txt", "utf-8");
  const playerStatsArray_B = JSON.parse(rawdata_b);
  const stats_b = await prisma.playerStats.createMany({
    data: playerStatsArray_B,
    skipDuplicates: true,
  });

  const rawdata_v2 = fs.readFileSync("./txt/all_player_stats_v2.txt", "utf-8");
  const playerStatsArray_v2 = JSON.parse(rawdata_v2);
  const stats_v2 = await prisma.playerStats.createMany({
    data: playerStatsArray_v2,
    skipDuplicates: true,
  });
  //console.log(await prisma.playerStats.findMany());

  const csvtojson = require("csvtojson");

  const playerRatingsArray = await csvtojson()
    .fromFile("./csv/player_ratings_2025_A.csv")
    .then((jsonArray: any[]) => {
      return jsonArray.map((player) => ({
        player_id: player["player_id"],
        pace: parseInt(player["PAC"]),
        shooting: parseInt(player["SHO"]),
        passing: parseInt(player["PAS"]),
        dribbling: parseInt(player["DRI"]),
        defending: parseInt(player["DEF"]),
        physical: parseInt(player["PHY"]),
      }));
    })
    .catch((err: any) => {
      console.error("Error parsing CSV:", err);
      return [];
    });

  await prisma.playerRatings.deleteMany();
  const ratings = await prisma.playerRatings.createMany({
    data: playerRatingsArray,
    skipDuplicates: true,
  });

  const rawinfo = fs.readFileSync("all_player_info.txt", "utf-8");
  const playerInfoArray = JSON.parse(rawinfo);
  await prisma.playerInfo.deleteMany();
  playerInfoArray.forEach(async (player: any) => {
    const info = await prisma.playerInfo.create({
      data: {
        player_id: player.player_id,
        dob: new Date(player.dob),
        birthplace: player.birthplace,
        gender: player.gender,
        height: player.height,
        biography: player.biography,
      },
    });
  });

  //console.log(await prisma.playerInfo.findMany());

  /*const league = await prisma.leagues.createMany({
    data: [
      { id: "AFC_B", name: "AFC Manga League B" },
      { id: "AFC_A", name: "AFC Manga League" },
      { id: "SC", name: "Super Cup" },
      { id: "BOTB", name: "Best of the Best" },
    ],
  });*/

  /*const personalawards = await prisma.personalAchievements.createMany({
    data: [
      { id: "MVP", name: "Best Player" },
      { id: "GB", name: "Golden Boot" },
      { id: "PM", name: "Passing Master" },
      { id: "BGK", name: "Best Goalkeeper" },
    ],
  });*/

  const rawleaguetrophies = fs.readFileSync(
    "./txt/player_team_achievements.txt",
    "utf-8"
  );
  const leaguetrophiesArray = JSON.parse(rawleaguetrophies);
  await prisma.playerTeamAchievements.deleteMany();
  leaguetrophiesArray.forEach(async (achievements: any) => {
    const team_achievements = await prisma.playerTeamAchievements.create({
      data: {
        id: achievements.id,
        player_id: achievements.player_id,
        place: achievements.place,
        league_id: achievements.league_id,
        team_id: achievements.team_id,
        time: achievements.Time.toString(),
      },
    });
  });

  const rawpersonalawards = fs.readFileSync(
    "./txt/player_personal_awards.txt",
    "utf-8"
  );
  const personalawardsArray = JSON.parse(rawpersonalawards);
  await prisma.playerPersonalAchievements.deleteMany();
  personalawardsArray.forEach(async (achievements: any) => {
    const player_achievements = await prisma.playerPersonalAchievements.create({
      data: {
        id: achievements.id,
        player_id: achievements.player_id,
        achievement_id: achievements.achievement_id,
        league_id: achievements.league_id,
        team_id: achievements.team_id,
        time: achievements.time.toString(),
      },
    });
  });

  const rawdatalegends = fs.readFileSync("./txt/legends_data.txt", "utf-8");
  const legendsarray = JSON.parse(rawdatalegends);
  const legends = await prisma.legends.createMany({
    data: legendsarray,
    skipDuplicates: true,
  });

  const rawlegendsinfo = fs.readFileSync("./txt/legends_info.txt", "utf-8");
  const legendsInfoArray = JSON.parse(rawlegendsinfo);
  await prisma.legendsInfo.deleteMany();
  legendsInfoArray.forEach(async (legends: any) => {
    const info = await prisma.legendsInfo.create({
      data: {
        player_id: legends.player_id,
        dob: new Date(legends.dob),
        birthplace: legends.birthplace,
        gender: legends.gender,
        height: legends.height,
        biography: legends.biography,
      },
    });
  });

  const rawlegendsrating = fs.readFileSync("./txt/legends_rating.txt", "utf-8");
  const legendsRatingArray = JSON.parse(rawlegendsrating);
  await prisma.legendsRatings.deleteMany();
  const legendsRating = await prisma.legendsRatings.createMany({
    data: legendsRatingArray,
    skipDuplicates: true,
  });

  const rawlegendsleaguetrophies = fs.readFileSync(
    "./txt/legends_team_achievements.txt",
    "utf-8"
  );
  const legendsleaguetrophiesArray = JSON.parse(rawlegendsleaguetrophies);
  await prisma.legendsTeamAchievements.deleteMany();
  legendsleaguetrophiesArray.forEach(async (achievements: any) => {
    const team_achievements = await prisma.legendsTeamAchievements.create({
      data: {
        id: achievements.id,
        player_id: achievements.player_id,
        place: achievements.place,
        league_id: achievements.league_id,
        team_id: achievements.team_id,
        time: achievements.time.toString(),
      },
    });
  });

  /*const rawlegendspersonalawards = fs.readFileSync(
    "./txt/legends_personal_awards.txt",
    "utf-8"
  );
  const legendspersonalawardsArray = JSON.parse(rawlegendspersonalawards);
  await prisma.legendsPersonalAchievements.deleteMany();
  legendspersonalawardsArray.forEach(async (achievements: any) => {
    const team_achievements = await prisma.legendsPersonalAchievements.create({
      data: {
        id: achievements.id,
        player_id: achievements.player_id,
        achievement_id: achievements.achievement_id,
        league_id: achievements.league_id,
        team_id: achievements.team_id,
        time: achievements.time.toString(),
      },
    });
  });*/

  const rawlegendsteammatethoughts = fs.readFileSync(
    "./txt/legends_teammate_thoughts.txt",
    "utf-8"
  );
  const legendsteammatethoughtsarray = JSON.parse(rawlegendsteammatethoughts);
  await prisma.legendsTeammateThoughts.deleteMany();
  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "LegendsTeammateThoughts" RESTART IDENTITY CASCADE`
  );
  const legendsteammatethoughts =
    await prisma.legendsTeammateThoughts.createMany({
      data: legendsteammatethoughtsarray,
      skipDuplicates: true,
    });
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
