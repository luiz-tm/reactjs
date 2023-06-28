import React from 'react'
import './Content.css'
import { Routes, Route } from 'react-router-dom';

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from './../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/param/:id" element={<Param />}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="*" element={<h1>
                <NotFound></NotFound>
            </h1>}></Route>
        </Routes>
    </main>
)

export default Content;