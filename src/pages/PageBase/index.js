import Cabecalho from "componentes/Cabecalho";
import FavoritosProvider from "componentes/Contexto/favoritos";
import FilmesProvider from "componentes/Contexto/filmes";
import Rodape from "componentes/Rodape";
import Container from "componentes/Container";
import { Outlet } from "react-router-dom";
import style from "./stlyle.module.css";

export default function PageBase() {
    return (
        <main className={style.main}>
            <Cabecalho />
            <FilmesProvider>
                <FavoritosProvider>
                    <Container>
                        <Outlet />
                    </Container>
                </FavoritosProvider>
            </FilmesProvider>
            <Rodape />
        </main>
    );
}
