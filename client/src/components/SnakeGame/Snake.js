import React, {useState, useRef, useEffect} from "react";
import { useInterval } from './useInterval'
import styled from "styled-components";

const CANVAS_SIZE = [800, 800];
const SNAKE_START = [
  [8, 7],
  [8, 8]
];
const APPLE_START = [8, 3];
const SCALE = 40;
const SPEED = 100;
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};

const Snake = () => {
    
    const canvasRef = useRef()
    const [snake, setSnake] = useState(SNAKE_START)
    const [apple, setApple] = useState(APPLE_START)
    const [currentKeyStroke, setCurrentKeyStroke] = useState(38)
    const [direction, setDirection] = useState([0, -1])
    const [speed, setSpeed] = useState(null)
    const [applesCollected, setApplesCollected] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)

    const startGame = () => {
        setSnake(SNAKE_START)
        setApple(APPLE_START)
        setDirection([0, -1])
        setSpeed(SPEED)
        setGameOver(false)
        setApplesCollected(0)
    }

    const endGame = () => {
        if (applesCollected > highScore) {
            setHighScore(applesCollected)
        };
        setSpeed(null)
        setDirection([0, -1])
        setGameOver(true)
    }

    const moveSnake = ({ keyCode }) => {
        if (
            keyCode === 40 && currentKeyStroke === 38 ||
            keyCode === 38 && currentKeyStroke === 40 ||
            keyCode === 37 && currentKeyStroke === 39 ||
            keyCode === 39 && currentKeyStroke === 37 
        ) {
            return
        } else {
            keyCode >= 37 && keyCode <= 40 && setDirection(DIRECTIONS[keyCode])
            setCurrentKeyStroke(keyCode)
    }}

    const createApple = () => 
        apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));
    

    const checkCollision = (head, stateSnake = snake) => {
        if(
            head[0] * SCALE >= CANVAS_SIZE[0] ||
            head[0] < 0 ||
            head[1] * SCALE >= CANVAS_SIZE[1] ||
            head[1] < 0
        )
            return true;
        for(const segment of stateSnake) {
            if (head[0] === segment[0] && head[1] === segment[1]) return true;
        }
    return false;
    }

    const checkAppleCollision = newSnake => {
        if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
            let newApple = createApple();
            while (checkCollision(newApple, newSnake)) {
              newApple = createApple();
            }
            setApplesCollected(applesCollected + 1)
            setApple(newApple);
            return true;
          }
          return false;
        };

    const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snake));
        const newSnakeHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction [1]]; //Head of snake == [0] then [0 for x direction] [1 for y direction]
        snakeCopy.unshift(newSnakeHead);
        if (checkCollision(newSnakeHead)) endGame()
        if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
        setSnake(snakeCopy);
    }
    
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
        context.fillStyle = "white";
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1))
        context.fillStyle = "red"
        context.fillRect(apple[0], apple[1], 1, 1);
    }, [snake, apple, gameOver])

    useInterval(() => gameLoop(), speed);

    return (
        <Container>
            <Header>
                <P><Apple className="fa fa-square-full"></Apple> {applesCollected}</P>
                <P><Trophy className="fa-solid fa-trophy"></Trophy> {highScore}</P>
            </Header>
            <Game role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
                <Canvas style={{border: "2px solid black"}} ref={canvasRef} width={`${CANVAS_SIZE[0]}px`} height={`${CANVAS_SIZE[1]}px`}/>
                <Container>
                    <Button onClick={startGame}>Start Game</Button>
                    {gameOver && <P>GAME OVER!</P>}
                </Container>
            </Game>
        </Container>
    )
}

const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin-top: 3rem;
`

const P = styled.p`
font-weight: 500;
font-size: 2rem;
`

const Canvas = styled.canvas`
background-color: black;
`

const Game = styled.div`
display:flex;
background-color: lightgray;
`

const Button = styled.button`
width: 10rem;
height: 3rem;
margin-left: 2rem;
margin-right: 2rem;
`

const Header = styled.div`
background-color: lightgray;
width: 1028px;
display: flex;
justify-content: space-evenly;
`

const Apple = styled.i`
color: red;
`

const Trophy = styled.i`
color: yellow;
`

export default Snake;