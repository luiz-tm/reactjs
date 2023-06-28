import React, { useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { useState } from 'react'

function calcFatorial(n) {
    if(n < 0) return -1;
    if(n === 0) return 1;
    return calcFatorial(n-1) * n;
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <div className="center">
                <span className="text">Fatorial:</span>
                <span className="text red">{fatorial}</span>
                <input type="number" className="input" 
                    value={number}
                    onChange={e => setNumber(e.target.value)}    
                />
            </div>
        </div>
    )
}

export default UseEffect
