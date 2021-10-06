export default function Titulo(props) {

    if(props.pequeno) {
        return (
            <>
            <p>{props.principal}</p>
            <p>{props.descricao}</p>
            </>
        )

    } else {
        return (
            <>
            <h1>{props.principal}</h1>
            <h2>{props.descricao}</h2>
            </>
        )

    }
  
}