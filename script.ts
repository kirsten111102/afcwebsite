import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  /*const allTeams = await prisma.teams.createMany({
        data: [
            {id: "aot", name: "Attack on Titan"},
            {id: "bleach", name: "Bleach"},
            {id: "boboiboy", name: "Boboiboy"},
            {id: "boruto", name: "Boruto"},
            {id: "cote", name: "Classroom of the Elite"},
            {id: "dfc", name: "Detective FC"},
            {id: "ds", name: "Demon Slayer"},
            {id: "dbz", name: "Dragon Ball Z"},
            {id: "doraemon", name: "Doraemon"},
            {id: "ft", name: "Fairy Tail"},
            {id: "hxh", name: "Hunter x Hunter"},
            {id: "ie", name: "Inazuma Eleven"},
            {id: "op", name: "One Piece"},
            {id: "pl", name: "Pokemon Legends"},
            {id: "pw", name: "Pokemon Warriors"},
            {id: "ta", name: "Team Anime"},
            {id: "tfs", name: "Tsubasa: Football Stars"},
            {id: "u&i", name: "Upin and Ipin"},
        ]
    })*/
  /*const updatePlayer = await prisma.players.update({
    where: { id: "ds_30" },
    data: {
      age: 24,
    },
  });*/
  /*const updateTeams = await prisma.teams.update({
    where: { id: "u&i" },
    data: {
      id: "u_and_i",
    },
  });*/
  /*const newCoaches = await prisma.employee.createMany({
    data: [
      { name: "Kisuke Urahara", age: 35, position: "Coach", team_id: "bleach" },
      { name: "Hiroshi Agasha", age: 52, position: "Coach", team_id: "dfc" },
      { name: "Kaguya Ubuyashiki", age: 30, position: "Coach", team_id: "ds" },
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
  });*/
  /*const updateCoach = await prisma.employee.updateMany({
    where: { team_id: "ds" },
    data: {
      name: "Ubuyashiki Kagaya",
    },
  });*/
  /*const newPlayer = await prisma.players.create({
    data: {
      id: "ft_5",
      name: "Elfman Strauss",
      age: 23,
      team_id: "ft",
      position: "Midfielder",
      shirt_no: 5,
    },
  });*/
  const allPlayers = await prisma.players.findMany();
  /*const ratings = await prisma.playerRatings.create({
    data: {
      player_id: "cote_10",
      pace: 80,
      shooting: 91,
      passing: 62,
      dribbling: 60,
      defending: 67,
      physical: 63,
    },
  });*/
  /*const info = await prisma.playerInfo.create({
    data: {
      player_id: "cote_10",
      dob: new Date("1900-10-20"),
      birthplace: "Japan",
      gender: "Male",
      height: 176,
      biography:
        "Genius of White Room, Mastermind of everywhere he goes, great tactician, but little who know he really is.; Good skills for playing football, can evaluate and analyse what happened in the pitch, but only keeps in his mind while he is playing, need to be understood or his team will lose because of disconnection.",
    },
  });*/
  /*const deletedRatings = await prisma.playerRatings.delete({
    where: { player_id: "cote_10" },
  });*/
  /*const thoughts = await prisma.playerTeammateThoughts.createMany({
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
  });*/
  /*const allinfo = await prisma.playerInfo.findMany();*/
  var fs = require("fs");

  fs.writeFile(
    "allplayers.txt",
    JSON.stringify(allPlayers),
    function (err: any) {
      if (err) throw err;
      console.log("Updated!");
    }
  );

  const rawdata = fs.readFileSync("all_player_stats.txt", "utf-8");
  const playerStatsArray = JSON.parse(rawdata);
  /*await prisma.playerStats.deleteMany();
  const stats = await prisma.playerStats.createMany({
    data: playerStatsArray,
  });*/
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

  /*await prisma.playerRatings.deleteMany();
  const ratings = await prisma.playerRatings.createMany({
    data: playerRatingsArray,
  });*/

  const rawinfo = fs.readFileSync("all_player_info.txt", "utf-8");
  const playerInfoArray = JSON.parse(rawinfo);
  /*await prisma.playerInfo.deleteMany();
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
  });*/

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

  /*const playerleague = await prisma.playerTeamAchievements.createMany({
    data: [
      {
        id: "ta10AFC2022",
        player_id: "ta_10",
        place: "Runner-up",
        league_id: "AFC_A",
        team_id: "op",
        time: "2022",
      },
      {
        id: "ta10BOTB2022",
        player_id: "ta_10",
        place: "Champions",
        league_id: "BOTB",
        team_id: "op",
        time: "2022",
      },
    ],
  });*/

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
