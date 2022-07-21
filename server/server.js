const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


//CHATBOX DB



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
        socket.broadcast.emit("receive_message", data)
    })
    socket.on("send_player1", (data) => {
        socket.broadcast.emit("receive_player1", data)
    })
    socket.on("send_player2", (data) => {
        socket.broadcast.emit("receive_player2", data)
    })
    socket.on("send_player1_ships", (data) => {
        socket.broadcast.emit("receive_player1_ships", data)
    })
    socket.on("send_player2_ships", (data) => {
        socket.broadcast.emit("receive_player2_ships", data)
    })
    socket.on("send_gamephase", (data) => {
        socket.broadcast.emit("receive_gamephase", data)
    })
})

server.listen(3001, () => {
    console.log("SERVER IS RUNNING");
})

