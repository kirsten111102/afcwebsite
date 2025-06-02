const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const team = await prisma.teams.findUnique({
      where: { id: id },
      include: {
        player: true,
        employee: true,
      },
    });

    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }

    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
