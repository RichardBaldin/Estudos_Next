import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador() {

    const [numero, setNumero] = useState(0)


    const incremento = () =>  setNumero(numero + 1)
    

    function decremento() {
        setNumero(numero - 1)

    }
    return (
        <div>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero} />
            <button onClick={decremento}>-</button>
            <button onClick={incremento}>+</button>

        </div>
    )
}