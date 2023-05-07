import Rodape from "../../componentes/Rodape";
import Cabecalho from "../../componentes/Cabecalho";
import Banner from "../../componentes/Banner";
import Titulo from "componentes/Titulo";

export default function Inicio() {
    return(
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo><h1>Um lugar para guardar seus videos e filmes</h1></Titulo>
            <Rodape />
        </>
    )
    
};
