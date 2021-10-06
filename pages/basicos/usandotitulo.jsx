import Titulo from '../../components/Titulo'

export default function usandotitulo() {
    return (
        <div>
            <Titulo 
                principal ="Página de Cadastro"
                descricao="incluir, alterar e excluir coisas!" 
            />

            <Titulo 
                principal ="Página de Login"
                descricao="Informe seu email e senha!!" 
                pequeno={true}
            />

<Titulo 
                principal ="Página de logout"
                descricao="Volte Sempre!!" 
                //Também entende como true
                pequeno
            />
        </div>
    )
}