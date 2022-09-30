import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1

    return calcFatorial(n - 1) * n
}

function parOuImpar(num) {
    return num % 2 === 0 ? 'Par' : 'Ímpar'
}

const UseEffect = (props) => {
    const [num, setNum] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    
    useEffect(function () {
        setFatorial(calcFatorial(num))
    }, [num])
    
    const [parImpar, setParImpar] = useState("Ímpar")

    useEffect(function() {
        setParImpar(parOuImpar(num))
    }, [num])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"></SectionTitle>


            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input
                    value={num}
                    onChange={e => setNum(+e.target.value)}
                    type="number"
                    className="input"
                />
            </div>

            <SectionTitle title="Exercício #02"></SectionTitle>

            <div className="center">
                <div>
                    <span className="text">Status:</span>
                    <span className="text red">{parImpar}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
