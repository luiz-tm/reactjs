import React from 'react'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu></Menu>
                <Content></Content>
            </BrowserRouter>
        </div>
    )
}