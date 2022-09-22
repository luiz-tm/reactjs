export default function Aleatorio(props) {
    const { min, max } = props;
    const aleatorio = Math.floor(Math.random() * (max - min) + min)

    return (
        <p>O número sorteado entre {max} e {min} foi de: {aleatorio}</p>
    )
}