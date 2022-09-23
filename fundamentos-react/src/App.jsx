import "./App.css";

import Comp from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#13 - Desafio Megasena" color="#827811">
                    <Mega qtde={8}/>
                </Card>

                <Card titulo="#12 - Contador" color="#424242">
                    <Contador numeroInicial={10}></Contador>
                </Card>

                <Card titulo="#11 - Componente Controlado (Input)" color="#726182">
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#182728">
                    <IndiretaPai />
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#918272">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#271822">
                    <ParOuImpar numero={20} />
                    <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
                </Card>

                <Card titulo="#07 - Tabela Produtos" color="#182729">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color="#9FE2BF">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="#DE3163">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#FFBF00">
                    <Aleatorio max={1} min={60} />
                    <Aleatorio max={1} min={60} />
                    <Aleatorio max={1} min={60} />
                    <Aleatorio max={1} min={60} />
                    <Aleatorio max={1} min={60} />
                    <Aleatorio max={1} min={60} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#40E0D0">
                    <Fragmento />
                </Card>
                <Card titulo="#02 - Com Parâmetro" color="#DE3163">
                    <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9} />
                </Card>
                <Card titulo="#01 - Primeiro Componente" color="#CCCCFF">
                    <Comp></Comp>
                </Card>
            </div>
        </div>
    );
}

export default App;
