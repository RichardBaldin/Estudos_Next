export default function Lista(props) {
    return (
        <ul style={{
            listStyle: "none",
            color: "blue",
        }}>
            {props.children}
        </ul>
    )
}