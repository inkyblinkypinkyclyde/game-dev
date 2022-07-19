use leaderboard;
db.dropDatabase();

db.scores.insertMany([
  {
    username: "Calum",
    score: "70"
  },
  {
    username: "Michael",
    score: "80"
  },
  {
    username: "Richard",
    score: "50"
  },
  {
    username: "Jack",
    score: "100"
  }
]);