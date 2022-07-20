import avatar from '../static/images/avatar_placeholder.png'
import styled from 'styled-components'

const About = () => {
    return (
        <>
            <MainContainer>
                <h1>About the Project</h1>
                <p>
                   The project team are all CodeClan students who were assigned together to choose a project which was to completed in 6 days, the group decided to pick a browser game
                   project. This browser game had to be based on an existing card or dice game. We were tasked with being able to model and test the game
                   logic and the display it in the browser for a user to interact with. 
                </p>   
                <p>
                    The browser game we decided on was Battleships portrayed in an arcade themed website.
                    We decided on our MVP (minimum viable product) with extensions (bonuses)
                    for the project. These objectives (MVP) were to play a Battleships Game against a computer or
                    another player and track hits and ships destroyed in each game. 
                    Our extra objectives (extensions) were to be able to record scores by having a leaderboard, make a game have multiplayer capabilty from different machines
                    include a message board on the website, add animations to Battleships and add extra games to the website.
                    The group planned by using a website called Trello to list ideas and to assign tasks to each group member. 
                    Each person within the group has gained valueable skills within software development such as react, socket, styled-components and using github branches.
                </p>
                
                
                   
                
                
                <h1>New Game Suggestions</h1>
                <p>If you would like to submit a suggestion for a future game, please submit your request below and we'll try to implement it in the future!</p>
                <form>
                    <input></input>
                    <button>Submit</button>
                </form>
                <h1>Project Team</h1>
            </MainContainer>
            <TeamContainer>
                <Member>
                    <Image src="https://i.imgur.com/z47iuxB.jpeg"></Image>
                    <h2>Jack Slater</h2>
                    <IconsDiv>
                        <Github href="https://github.com/JackSlater99"><i className="fa fa-github icon fa-3x"></i></Github>
                        <LinkedIn href="https://www.linkedin.com/in/J-Slater99"><i className="fa fa-linkedin icon fa-3x"></i></LinkedIn>
                    </IconsDiv>
                </Member>
                <Member>
                    <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQG9F9TtcO8QEQ/profile-displayphoto-shrink_100_100/0/1618850793555?e=1663804800&v=beta&t=glNmSX4VeEPSsYdmOV8BwClNhw8fw2lpl5j0W0oSysg"></Image>
                    <h2>Caulm Cook</h2>
                    <IconsDiv>
                        <Github href="https://github.com/DonutsGoHere"><i className="fa fa-github icon fa-3x"></i></Github>
                        <LinkedIn href="https://linkedin.com/in/calum-cook89"><i className="fa fa-linkedin icon fa-3x"></i></LinkedIn>
                    </IconsDiv>
                </Member>
                <Member>
                    <Image src={avatar}></Image>
                    <h2>Name</h2>
                    <IconsDiv>
                        <Github href=""><i className="fa fa-github icon fa-3x"></i></Github>
                        <LinkedIn href=""><i className="fa fa-linkedin icon fa-3x"></i></LinkedIn>
                    </IconsDiv>
                </Member>
                <Member>
                    <Image src="https://i.imgur.com/5XamRWJ.png"></Image>
                    <h2>Michael Lyon</h2>
                    <IconsDiv>
                        <Github href="https://github.com/Michael19994"><i className="fa fa-github icon fa-3x"></i></Github>
                        <LinkedIn href="https://www.linkedin.com/in/michael-lyon-6a211a227/"><i className="fa fa-linkedin icon fa-3x"></i></LinkedIn>
                    </IconsDiv>
                </Member>
            </TeamContainer>
        </>
    )
}

const MainContainer = styled.div`
display:flex;
align-items:center;
flex-direction:column;
margin-inline:2rem;
text-align: center;
`

const Image = styled.img`
height: 12rem;
width: 12rem;
`

const TeamContainer = styled.div`
display:flex;
justify-content:space-evenly;
`

const Member = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
text-align: center;
`

const IconsDiv = styled.div`
display:flex;
justify-content: space-evenly;
`

const Github = styled.a`
text-decoration:none;
color:#333;
`
const LinkedIn = styled.a`
text-decoration:none;
color:#0077b5;
`


export default About