import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0) 
    const [name, setName] = useState('Inicial...')

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"></SectionTitle>

            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button 
                        onClick={_ => setCount(count-1)}
                        className="btn"
                    >-1</button>
                    <button 
                        onClick={_ => setCount(count+1)}
                        className="btn">+1</button>
                    <button 
                        onClick={_ => setCount(current => current + 1000)}
                        className="btn">+1000</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02"></SectionTitle>
            <input value={name} onChange={e => setName(e.target.value)} type="text" className="input" />
        </div>
    )
}

export default UseState
