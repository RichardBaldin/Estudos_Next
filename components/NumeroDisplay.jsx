export default function NumeroDisplay(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            width: "200px",
            borderRadius: "100px",
            backgroundColor: "#222",
            color: "#fff",
            fontSize: "4rem",
            margin: "20px"

        }}>
            {props.numero}
        </div>
    )
}