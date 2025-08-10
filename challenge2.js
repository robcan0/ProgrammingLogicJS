// Validates if the parameters are non-negative integers
function getPlayerRank(wins, losses) {
  if (!Number.isInteger(wins) || !Number.isInteger(losses) || wins < 0 || losses < 0) {
    throw new Error('Wins and losses must be non-negative integers');
  }

  // Calculate the win balance (wins - losses)
  const winBalance = wins - losses;

  // Sets rank levels based on win balance
  const levels = [
    { min: -Infinity, max: -1, rank: "Disqualified", title: "The Loser" }, // New level for negative balance
    { min: 0, max: 9, rank: "Iron", title: "The Newbie" },
    { min: 10, max: 20, rank: "Bronze", title: "The Recruit" },
    { min: 21, max: 50, rank: "Silver", title: "The Apprentice" },
    { min: 51, max: 80, rank: "Gold", title: "The Aspirant" },
    { min: 81, max: 90, rank: "Diamond", title: "The Protector" },
    { min: 91, max: 100, rank: "Legendary", title: "The Guardian" },
    { min: 101, max: Infinity, rank: "Immortal", title: "The Hero" },
  ];

  // Find the level corresponding to the winning balance
  const playerRank = levels.find(level => winBalance >= level.min && winBalance <= level.max);

  // optional chaining to safely access ranking and title
  const rank = playerRank?.rank || 'Unknown';
  const title = playerRank?.title || 'Unknown';

  // Returns the appropriate message based on the player's ranking
  if (rank === "Disqualified") {
    return `With a win balance of ${winBalance}, the player has been disqualified. It seems the enemies are winning... for now. But every loss is a lesson — Time to train and bounce back.`;
  }
  return `With a win balance of ${winBalance}, the player has reached the ${rank} level and earned the title of ${title}.`;
}

// List of players with their wins and losses
const players = [
  { wins: 60, losses: 87 },
  { wins: 78, losses: 69 },
  { wins: 79, losses: 68 },
  { wins: 84, losses: 63 },
  { wins: 99, losses: 48 },
  { wins: 114, losses: 33 },
  { wins: 119, losses: 28 },
  { wins: 124, losses: 23 } // Negative balance
];

// Iterates over the list of players and displays their rankings
for (let i = 0; i < players.length; i++) {
  try {
    const player = players[i];
    const result = getPlayerRank(player.wins, player.losses);
    console.log(`Player ${i + 1}: ${result}`);
  } catch (error) {
    console.error(`Player ${i + 1}: Erro - ${error.message}`);
  }
}