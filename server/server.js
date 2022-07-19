const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const http = require('http').createServer(app)


app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017',
{useUnifiedTopology: true})
.then((client) => {
  const db = client.db('grid');
  const tilesCollection = db.collection('tiles');
  const gridRouter = createRouter(tilesCollection);
  app.use('/api/tiles', gridRouter);
})

.catch(console.error)

app.get('/', function require(req, res) {
  res.json({message: "This is working!"});
});

app.listen(9000, function(){
  console.log(`Battleship server running on port 9000`);
});
