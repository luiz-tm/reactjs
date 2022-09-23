import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default function DiretaPai(props) {
    
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)


    // nome idade nerd
    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>{nome}</div>
            <div>{idade}</div>
            <div>{nerd ? 'Verdadeiro' : 'Falso'}</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}