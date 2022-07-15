import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Battleships from '../components/Battleships';
import NavBar from '../components/NavBar';

const GamesContainer = () => {

    return (
        <MainContainer>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/battleships' element={< Battleships />} />
                </Routes>
            </Router>
        </MainContainer>

    )
}

const MainContainer = styled.div`

`

export default GamesContainer