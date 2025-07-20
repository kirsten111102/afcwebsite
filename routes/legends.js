const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const legends = await prisma.legends.findUnique({
      where: { id: id },
      include: {
        team: true,
      },
    });

    const ratings = await prisma.legendsRatings.findUnique({
      where: { player_id: id },
    });

    const info = await prisma.legendsInfo.findUnique({
      where: { player_id: id },
    });

    const teamachievement = await prisma.legendsTeamAchievements.findMany({
      where: { player_id: id },
      include: {
        team: true,
        league: true,
      },
    });

    const personalachievement =
      await prisma.legendsPersonalAchievements.findMany({
        where: { player_id: id },
        include: {
          team: true,
          league: true,
          achievement: true,
        },
      });

    const teammatethoughts = await prisma.legendsTeammateThoughts.findMany({
      where: { sent_to: id },
      include: {
        receiver: true,
      },
    });

    if (!legends) {
      return res.status(404).json({ error: "Player not found" });
    }

    res.json({
      legends,
      ratings,
      info,
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
