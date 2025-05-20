const newPlayer = await prisma.Players.create({
    data: {
        id: "cote_10",
        name: "Kiyotaka Ayanokouji",
        age: 18,
        position: "Striker",
        team_id: "cote",
        shirt_no: 10
    }
})