import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.employee.deleteMany();
  const newCoaches = await prisma.employee.createMany({
    data: [
      { name: "Uchiha Sasuke", age: 36, position: "Coach", team_id: "aot" },
      {
        name: "Sarutobi Konohamaru",
        age: 36,
        position: "Coach",
        team_id: "boboiboy",
      },
      { name: "Hatake Kakashi", age: 50, position: "Coach", team_id: "boruto" },
      { name: "Sakayanagi Arisu", age: 18, position: "Coach", team_id: "cote" },
      { name: "Kisuke Urahara", age: 35, position: "Coach", team_id: "bleach" },
      { name: "Hiroshi Agasa", age: 52, position: "Coach", team_id: "dfc" },
      { name: "Ubuyashiki Kagaya", age: 30, position: "Coach", team_id: "ds" },
      {
        name: "Elichiro Senjou",
        age: 52,
        position: "Coach",
        team_id: "doraemon",
      },
      { name: "Vegeta", age: 38, position: "Coach", team_id: "dbz" },
      { name: "Makarov Dreyar", age: 90, position: "Coach", team_id: "ft" },
      { name: "Ging Freecs", age: 43, position: "Coach", team_id: "hxh" },
      { name: "Kudou Michiya", age: 41, position: "Coach", team_id: "ie" },
      { name: "Monkey D Dragon", age: 55, position: "Coach", team_id: "op" },
      { name: "Kukui", age: 39, position: "Coach", team_id: "pl" },
      { name: "Ash Ketchum", age: 19, position: "Coach", team_id: "pw" },
      { name: "Uchiha Itachi", age: 42, position: "Coach", team_id: "ta" },
      { name: "Kozo Kira", age: 44, position: "Coach", team_id: "tfs" },
      {
        name: "Ismail bin Mail",
        age: 18,
        position: "Coach",
        team_id: "u_and_i",
      },
    ],
  });

  const allPlayers = await prisma.players.findMany();
  await prisma.playerTeammateThoughts.deleteMany();
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
  //console.log(await prisma.playerStats.findMany());

  const csvtojson = require("csvtojson");

  const playerRatingsArray = await csvtojson()
    .fromFile("player_ratings.csv")
    .then((jsonArray: any[]) => {
      return jsonArray.map((player) => ({
        player_id: player["player_id"],
        pace: parseInt(player["pace"]),
        shooting: parseInt(player["shooting"]),
        passing: parseInt(player["passing"]),
        dribbling: parseInt(player["dribbling"]),
        defending: parseInt(player["defending"]),
        physical: parseInt(player["physical"]),
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
    const team_achievements = await prisma.playerPersonalAchievements.create({
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
  /*const playerpersonalawards =
    await prisma.playerPersonalAchievements.createMany({
      data: [
        {
          id: "ta10MVPBOTB2022",
          player_id: "ta_10",
          achievement_id: "MVP",
          league_id: "BOTB",
          team_id: "op",
          time: "2022",
        },
        {
          id: "ta10MVPAFC2024",
          player_id: "ta_10",
          achievement_id: "MVP",
          league_id: "AFC_A",
          team_id: "ta",
          time: "2024",
        },
        {
          id: "ta10PMAFC2024",
          player_id: "ta_10",
          achievement_id: "PM",
          league_id: "AFC_A",
          team_id: "ta",
          time: "2024",
        },
      ],
    });*/
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
