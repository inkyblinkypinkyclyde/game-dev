const express = require('express');
const app = express();

const cors = require('cors');

app.get('/', function require(req, res) {
  res.json({message: "This is working!"});
});

app.listen(9000, function(){
  console.log(`Battleship server running on port 9000`);
});