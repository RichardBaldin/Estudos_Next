import Filho from "./Filho"

export default function Pai(props) {
    return (
        <div style={{display: "flex"}}>
            <Filho nome="Richard" familia="Baldin" />
            <Filho  {...props} />

        </div>
    )
    }