import React from 'react'
import './Menu.css'

import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/param/123">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/456">Param #02</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/naoExiste">Não existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}