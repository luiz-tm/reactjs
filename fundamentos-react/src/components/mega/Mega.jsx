/* 
Numero gerado 
input de quantos numeros
botao pra gerar novos numeros
*/

import React, { useState } from 'react'
import './Mega.css'

export default function Mega(props) {

    function gerarNumeros(qtde) {
        const numeros = Array(qtde).fill(0).reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, []).sort((n1, n2) => n1-n2)
        return numeros;
    }

    function gerarNumeroNaoContido(min, max, array) {

        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
        return array.includes(aleatorio) ? 
        gerarNumeroNaoContido(min, max, array) : 
        aleatorio
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais) 

    return (
        <div className="Mega">
            <h2>Megasena</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de Números</label>
                <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)} />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    )
}