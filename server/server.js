const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const createRouter = require('./helpers/create_router.js');
const http = require('http').createServer(app)

player = {"username": "string", "score": "integer"};

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017',
{useUnifiedTopology: true})
.then((client) => {
  const db = client.db('leaderboard');
  const scoresCollection = db.collection('scores');
  const scoresRouter = createRouter(scoresCollection);
  app.use('/api/scores', scoresRouter);
})

.catch(console.error)

app.get('/', function require(req, res) {
  res.json({message: "This is working!"});
});

app.listen(9000, function(){
  console.log(`Leaderboard server running on port 9000`);
});

