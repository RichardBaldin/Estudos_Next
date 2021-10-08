import Filho from "./Filho";

export default function Pai(props) {

    function falarComigo() {
        console.log("Alguém me falou")
    }
    return (
        <div>
            <Filho funcao={falarComigo}/>
        </div>
    )
}