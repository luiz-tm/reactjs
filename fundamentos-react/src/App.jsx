import './App.css'
import Comp from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#04 - Desafio Aleatório">
                    <Aleatorio max={1} min={60} />
                    <Aleatorio max={1} min={60} />
                    <Aleatorio max={1} min={60} />
                    <Aleatorio max={1} min={60} />
                    <Aleatorio max={1} min={60} />
                    <Aleatorio max={1} min={60} />
                </Card>
                
                <Card titulo="#03 - Fragmento" >
                    <Fragmento />
                </Card>
                <Card titulo="#02 - Com Parâmetro" >
                    <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9} />
                </Card>
                <Card titulo="#01 - Primeiro Componente">
                    <Comp></Comp>
                </Card>
            </div>
        </div>
    )
}

export default App;
