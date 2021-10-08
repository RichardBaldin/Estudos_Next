import Lista from "../../components/Lista"
import Item from "../../components/Item"


export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="Beleza" />
                <Item conteudo="Café" />
                <Item conteudo="Chocolate" />
                <Item conteudo="Algo" />
                <Item conteudo="Foi" />

            </Lista>
        </div>
    )
}