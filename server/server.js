const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


//CHATBOX DB

// const mongoose = require('mongoose')
// const mongoDB = 'mongodb+srv://jslater:jslater123@cluster0.ty2du.mongodb.net/message-database?retryWrites=true&w=majority';
// const Message = require('./models/messages')
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
//   console.log("connected via mongoose");
// }).catch(err => console.log(err))

//CHATBOX

const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("send_message", (data) => {
      // const dbMessage = new Message({data});
      // dbMessage.save().then(() => {
      socket.broadcast.emit("receive_message", data)
      
    })
    socket.on("send_player1", (data) => {
        socket.broadcast.emit("receive_player1", data)
    })
    socket.on("send_player2", (data) => {
        socket.broadcast.emit("receive_player2", data)
    })
  })

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
})

