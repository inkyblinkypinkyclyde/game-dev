import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import About from '../components/About';
import Battleships from '../components/Battleships';
import HomePage from '../components/HomePage';
import NavBar from '../components/NavBar';

const GamesContainer = () => {

    return (
        <MainContainer>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/battleships' element={< Battleships />} />
                    <Route path='/about' element={< About />} />
                </Routes>
            </Router>
        </MainContainer>

    )
}

const MainContainer = styled.div`

`

export default GamesContainer