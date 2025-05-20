const express = require('express');
const { PrismaClient } = require('./generated/prisma');
const app = express();
const prisma = new PrismaClient();

// Serve all static files from the public folder
app.use(express.static('public'));

app.get('/api/:teamId-players', async (req, res) => {
  const { teamId } = req.params;

  try {
    const players = await prisma.players.findMany({
      where: { team_id: teamId },
    });

    res.json(players);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.get('/api/team/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const team = await prisma.teams.findUnique({
      where: { id },
    });

    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    
    res.json(team);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/teams', async (req, res) => {
  const teams = await prisma.teams.findMany();
  res.json(teams)
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/html/Frontpage.html');
});