import If, { Else } from "./If"

export default function UsuarioInfo(props) {
    const usuario = props.usuario || {}

    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem-vindo(a), <strong>{props.usuario.nome}</strong>
                <Else>
                    Seja bem-vindo(a) <strong>Anônimo</strong>
                </Else>
            </If>
        </div>
    )
}