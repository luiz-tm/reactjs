export default function ComParametro(props) {
    
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado';

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.aluno} tem nota <strong>{props.nota}</strong></p>
            <h3>O aluno está {status}</h3>
        </div>
    )
}