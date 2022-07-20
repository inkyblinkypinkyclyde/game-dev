import avatar from '../static/images/avatar_placeholder.png'
import styled from 'styled-components'

const About = () => {
    return (
        <>
            <MainContainer>
                <h1>About the Project</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo laoreet sit amet. Nisl pretium fusce id velit ut tortor pretium. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Fermentum iaculis eu non diam. Sodales ut eu sem integer vitae justo eget. Orci sagittis eu volutpat odio facilisis. Non sodales neque sodales ut etiam sit. Cras semper auctor neque vitae tempus quam. Mi bibendum neque egestas congue. Eu volutpat odio facilisis mauris sit amet massa. Vestibulum sed arcu non odio euismod. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Sed lectus vestibulum mattis ullamcorper velit. Urna et pharetra pharetra massa massa. Mauris augue neque gravida in fermentum et sollicitudin ac. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nec dui nunc mattis enim ut tellus.</p>
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
                    <Image src={avatar}></Image>
                    <h2>Name</h2>
                    <IconsDiv>
                        <Github href=""><i className="fa fa-github icon fa-3x"></i></Github>
                        <LinkedIn href=""><i className="fa fa-linkedin icon fa-3x"></i></LinkedIn>
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
                    <Image src="https://imgur.com/a/blRPkfv"></Image>
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