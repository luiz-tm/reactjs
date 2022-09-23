// Criar uma tabela mostrando todos os produtos em sua devida coluna (map)


import produtos from "../../data/produtos";
import './TabelaProdutos.css'

export default function TabelaProdutos() {
    const listaProdutos = produtos.map((produto, i) => {
        return (
            <tr key={i} className="tabela-produtos">
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.valor.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <tbody>
                    <tr className="tabela-produtos">
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Valor</td>
                    </tr>
                    {listaProdutos}
                </tbody>
            </table>
        </div>
    )
}