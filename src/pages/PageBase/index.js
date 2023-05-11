import Cabecalho from "componentes/Cabecalho";
import FavoritosProvider from "componentes/Contexto/favoritos";
import Rodape from "componentes/Rodape";
import Container from "componentes/Container"
import { Outlet } from "react-router-dom";

export default function PageBase() {
    return (
        <main>
             <Cabecalho/>
             <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
             </FavoritosProvider>
             <Rodape/>
        </main>
    )
    
}