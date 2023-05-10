import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "./componentes/Rodape";
import Cabecalho from "./componentes/Cabecalho";
import Container from "./componentes/Container";
import FavoritosProvider from "./componentes/Contexto";
export default function AppRoutes() {
    return(
        <BrowserRouter>
         <Cabecalho />
            <Container>
                <FavoritosProvider>
                <Routes>
                    <Route path="/" element={<Inicio />}/>
                    <Route path="/favoritos" element={<Favoritos />}/>
                </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
    
}