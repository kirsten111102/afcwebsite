import { PrismaClient } from './generated/prisma'

const prisma = new PrismaClient()

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
        where: {id: "aot_10"},
        data: {
            name: "Eren Yeager", age: 20, position: "Striker", team_id: "aot", shirt_no: 10
        }
    })*/
   /*const newPlayer = await prisma.players.createMany({
        data: [
            {id: "boruto_8", name: "Mitsuki", age: 18, position: "Midfielder", team_id: "boruto", shirt_no: 8},
            {id: "boruto_25", name: "Shinki", age: 18, position: "Goalkeeper", team_id: "boruto", shirt_no: 25},
            {id: "boruto_1", name: "Metal Lee", age: 18, position: "Goalkeeper", team_id: "boruto", shirt_no: 1},
            {id: "boruto_17", name: "Naru Shikadai", age: 18, position: "Midfielder", team_id: "boruto", shirt_no: 17},
            {id: "boruto_12", name: "Yamanaka Inojin", age: 18, position: "Midfielder", team_id: "boruto", shirt_no: 12},
            {id: "boruto_10", name: "Uzumaki Boruto", age: 18, position: "Striker", team_id: "boruto", shirt_no: 10},
            {id: "boruto_7", name: "Kawaki", age: 21, position: "Striker", team_id: "boruto", shirt_no: 7},
        ]
    })*/
    const allPlayers = await prisma.players.findMany()
    console.log(allPlayers)
}


main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })