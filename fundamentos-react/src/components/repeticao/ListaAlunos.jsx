import React from 'react'
import alunos from '../../data/alunos'

export default function ListaAlunos(props) {
    
    const listaAlunos = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id} - {aluno.nome} - {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul>
                {listaAlunos}
            </ul>
        </div>
    )
}