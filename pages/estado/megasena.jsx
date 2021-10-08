import { useEffect, useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"

export default function megasena() {

    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    }, [])

    function renderNumeros() {
        return numeros.map(numero =>  <NumeroDisplay key={numero} numero={numero} />)
    }
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            }}>
            <h1>Mega Sena</h1>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                }}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtde} onChange={evento => setQtde(+evento.target.value)}/>
                <button onClick={() => setNumeros(mega(qtde))}> Gerar Aposta</button>
            </div>

        </div>
    )
}