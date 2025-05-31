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
  /*const newPlayer = await prisma.players.createMany({
    data: [
      {
        id: "ft_10",
        name: "Natsu Dragneel",
        age: 24,
        team_id: "ft",
        position: "Striker",
        shirt_no: 10,
      },
      {
        id: "ft_7",
        name: "Gray Fullbuster",
        age: 23,
        team_id: "ft",
        position: "Striker",
        shirt_no: 7,
      },
      {
        id: "ft_6",
        name: "Laxus Dreyar",
        age: 25,
        team_id: "ft",
        position: "Midfielder",
        shirt_no: 6,
      },
      {
        id: "ft_23",
        name: "Jellal Fernandes",
        age: 19,
        team_id: "ft",
        position: "Midfielder",
        shirt_no: 23,
      },
      {
        id: "ft_1",
        name: "Gajeel Redfox",
        age: 24,
        team_id: "ft",
        position: "Goalkeeper",
        shirt_no: 1,
      },
      {
        id: "hxh_10",
        name: "Hisoka Morow",
        age: 24,
        team_id: "hxh",
        position: "Striker",
        shirt_no: 10,
      },
      {
        id: "hxh_7",
        name: "Killua Zoldyck",
        age: 23,
        team_id: "hxh",
        position: "Striker",
        shirt_no: 7,
      },
      {
        id: "hxh_11",
        name: "Kurapika Kurta",
        age: 23,
        team_id: "hxh",
        position: "Midfielder",
        shirt_no: 11,
      },
      {
        id: "hxh_4",
        name: "Chrollo Lucifer",
        age: 28,
        team_id: "hxh",
        position: "Defender",
        shirt_no: 4,
      },
      {
        id: "hxh_1",
        name: "Gon Freecs",
        age: 23,
        team_id: "hxh",
        position: "Goalkeeper",
        shirt_no: 1,
      },
      {
        id: "ie_11",
        name: "Kiyama Hiroto",
        age: 20,
        team_id: "ie",
        position: "Center Forward",
        shirt_no: 11,
      },
      {
        id: "ie_2",
        name: "Kazemaru Ichirouta",
        age: 20,
        team_id: "ie",
        position: "Midfielder",
        shirt_no: 2,
      },
      {
        id: "ie_10",
        name: "Gouenji Shuuya",
        age: 20,
        team_id: "ie",
        position: "Striker",
        shirt_no: 10,
      },
      {
        id: "ie_14",
        name: "Kidou Yuuto",
        age: 20,
        team_id: "ie",
        position: "Midfielder",
        shirt_no: 14,
      },
      {
        id: "ie_1",
        name: "Endou Mamoru",
        age: 20,
        team_id: "ie",
        position: "Goalkeeper",
        shirt_no: 1,
      },
      {
        id: "ie_20",
        name: "Tachimukai Yuuki",
        age: 20,
        team_id: "ie",
        position: "Goalkeeper",
        shirt_no: 20,
      },
      {
        id: "op_7",
        name: "Vinsmoke Sanji",
        age: 26,
        team_id: "op",
        position: "Striker",
        shirt_no: 7,
      },
      {
        id: "op_10",
        name: "Roronoa Zoro",
        age: 26,
        team_id: "op",
        position: "Striker",
        shirt_no: 10,
      },
      {
        id: "op_6",
        name: "Koby",
        age: 20,
        team_id: "op",
        position: "Midfielder",
        shirt_no: 6,
      },
      {
        id: "op_4",
        name: "Franky",
        age: 27,
        team_id: "op",
        position: "Defender",
        shirt_no: 4,
      },
      {
        id: "op_1",
        name: "Monkey D. Luffy",
        age: 23,
        team_id: "op",
        position: "Goalkeeper",
        shirt_no: 1,
      },
      {
        id: "op_23",
        name: "Jinbei",
        age: 27,
        team_id: "op",
        position: "Goalkeeper",
        shirt_no: 23,
      },
      {
        id: "pw_7",
        name: "Arcanine",
        age: 20,
        team_id: "pw",
        position: "Striker",
        shirt_no: 7,
      },
      {
        id: "pw_10",
        name: "Pikachu",
        age: 20,
        team_id: "pw",
        position: "Striker",
        shirt_no: 10,
      },
      {
        id: "pw_6",
        name: "Charizard",
        age: 22,
        team_id: "pw",
        position: "Midfielder",
        shirt_no: 6,
      },
      {
        id: "pw_4",
        name: "Venusaur",
        age: 22,
        team_id: "pw",
        position: "Defender",
        shirt_no: 4,
      },
      {
        id: "pw_1",
        name: "Machamp",
        age: 20,
        team_id: "pw",
        position: "Goalkeeper",
        shirt_no: 1,
      },
      {
        id: "pl_7",
        name: "Landorus",
        age: 20,
        team_id: "pl",
        position: "Striker",
        shirt_no: 7,
      },
      {
        id: "pl_10",
        name: "Mewtwo",
        age: 20,
        team_id: "pl",
        position: "Striker",
        shirt_no: 10,
      },
      {
        id: "pl_9",
        name: "Thundurus",
        age: 20,
        team_id: "pl",
        position: "Midfielder",
        shirt_no: 9,
      },
      {
        id: "pl_11",
        name: "Tornadus",
        age: 20,
        team_id: "pl",
        position: "Midfielder",
        shirt_no: 11,
      },
      {
        id: "pl_1",
        name: "Heatran",
        age: 20,
        team_id: "pl",
        position: "Goalkeeper",
        shirt_no: 1,
      },
      {
        id: "ta_7",
        name: "Charlotte Katakuri",
        age: 21,
        team_id: "ta",
        position: "Striker",
        shirt_no: 7,
      },
      {
        id: "ta_10",
        name: "Trafalgar D. Law",
        age: 23,
        team_id: "ta",
        position: "Midfielder",
        shirt_no: 10,
      },
      {
        id: "ta_9",
        name: "Portgas D. Ace",
        age: 25,
        team_id: "ta",
        position: "Striker",
        shirt_no: 9,
      },
      {
        id: "ta_11",
        name: "Sabo",
        age: 25,
        team_id: "ta",
        position: "Midfielder",
        shirt_no: 11,
      },
      {
        id: "ta_25",
        name: "Eustass Kid",
        age: 23,
        team_id: "ta",
        position: "Goalkeeper/Midfielder",
        shirt_no: 25,
      },
      {
        id: "ta_1",
        name: "Bartholomew Kuma",
        age: 27,
        team_id: "ta",
        position: "Goalkeeper",
        shirt_no: 1,
      },
      {
        id: "tfs_10",
        name: "Tsubasa Ozora",
        age: 21,
        team_id: "tfs",
        position: "Striker",
        shirt_no: 10,
      },
      {
        id: "tfs_9",
        name: "Kojiro Hyuga",
        age: 21,
        team_id: "tfs",
        position: "Striker",
        shirt_no: 9,
      },
      {
        id: "tfs_14",
        name: "Jun Mizugi",
        age: 21,
        team_id: "tfs",
        position: "Midfielder",
        shirt_no: 14,
      },
      {
        id: "tfs_12",
        name: "Hikaru Matsuyama",
        age: 21,
        team_id: "tfs",
        position: "Defender",
        shirt_no: 12,
      },
      {
        id: "tfs_25",
        name: "Ken Wakashimazu",
        age: 21,
        team_id: "tfs",
        position: "Goalkeeper",
        shirt_no: 25,
      },
      {
        id: "tfs_1",
        name: "Genzo Wakabayashi",
        age: 21,
        team_id: "tfs",
        position: "Goalkeeper",
        shirt_no: 1,
      },
      {
        id: "u_and_i_10",
        name: "Ijat",
        age: 18,
        team_id: "u_and_i",
        position: "Midfielder",
        shirt_no: 10,
      },
      {
        id: "u_and_i_9",
        name: "Upin",
        age: 18,
        team_id: "u_and_i",
        position: "Striker",
        shirt_no: 9,
      },
      {
        id: "u_and_i_11",
        name: "Ipin",
        age: 18,
        team_id: "u_and_i",
        position: "Midfielder",
        shirt_no: 11,
      },
      {
        id: "u_and_i_7",
        name: "Ehsan",
        age: 18,
        team_id: "u_and_i",
        position: "Defender",
        shirt_no: 7,
      },
      {
        id: "u_and_i_3",
        name: "Jarjit",
        age: 18,
        team_id: "u_and_i",
        position: "Midfielder",
        shirt_no: 3,
      },
      {
        id: "u_and_i_1",
        name: "Dzul",
        age: 18,
        team_id: "u_and_i",
        position: "Goalkeeper",
        shirt_no: 1,
      },
    ],
  });*/
  /*const newCoaches = await prisma.employee.createMany({
    data: [
      {name: "Uchiha Sasuke", age: 36, position: "Coach", team_id: "aot"},
      {name: "Hatake Kakashi", age: 50, position: "Coach", team_id: "boruto"},
      {name: "Sarutobi Konohamaru", age: 34, position: "Coach", team_id: "boboiboy"},
      {name: "Sakanayagi Arisu", age: 18, position: "Coach", team_id: "cote"},
    ]
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
  /*const stats = await prisma.playerStats.createMany({
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

  /*const ratings = await prisma.playerRatings.createMany({
    data: playerRatingsArray,
  });*/
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
