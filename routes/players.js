const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const players = await prisma.players.findUnique({
      where: { id: id },
      include: {
        team: true,
        player_rating: true,
        player_info: true,
        player_stats: true,
      },
    });

    const teammatethoughts = await prisma.playerTeammateThoughts.findMany({
      where: { sent_to: id },
      include: {
        author: true,
        receiver: true,
      },
    });

    if (!players && !teammatethoughts) {
      return res.status(404).json({ error: "Player not found" });
    }

    res.json({ players, teammatethoughts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
