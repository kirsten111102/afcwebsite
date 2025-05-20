const allTeams = await prisma.Teams.createMany({
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
})