function acao1() {
    console.log("acao1")
}

export default function botao() {
    function acao2() {
        console.log("acao2")
    }
    return (
        <div>
            <button onClick={acao1}>Click</button>
            <button onClick={acao2}>Click2</button>

        </div>
    )
}