const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const players = await prisma.players.findUnique({
      where: { id: id },
      include: {
        team: true,
      },
    });

    const playerratings = await prisma.playerRatings.findUnique({
      where: { player_id: id },
    });

    const playerinfo = await prisma.playerInfo.findUnique({
      where: { player_id: id },
    });

    const playerstats = await prisma.playerStats.findMany({
      where: { player_id: id },
      include: {
        team: true,
        league: true,
      },
      orderBy: { year: "desc" },
    });

    const teamachievement = await prisma.playerTeamAchievements.findMany({
      where: { player_id: id },
      include: {
        team: true,
        league: true,
      },
    });

    const personalachievement =
      await prisma.playerPersonalAchievements.findMany({
        where: { player_id: id },
        include: {
          team: true,
          league: true,
          achievement: true,
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

    res.json({
      players,
      playerratings,
      playerinfo,
      playerstats,
      teammatethoughts,
      teamachievement,
      personalachievement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
