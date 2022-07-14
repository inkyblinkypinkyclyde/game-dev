import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Battleships from '../components/Battleships';
import NavBar from '../components/NavBar';

const GamesContainer = () => {

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/battleships' element={< Battleships />} />
            </Routes>
        </Router>

    )
}

export default GamesContainer