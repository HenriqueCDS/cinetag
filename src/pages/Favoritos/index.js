import styles from './Favoritos.module.css';
import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import Card from "../../componentes/Card";
import { Link } from 'react-router-dom';
import gifNotfound from "./john-travolta.gif";
import { useFavoritoContext } from '../../componentes/Contexto/favoritos';
import { useFilmesContext } from '../../componentes/Contexto/filmes';

function Favoritos() {
    const { favorito } = useFavoritoContext();
    const { filmes } = useFilmesContext();

    // Remove from favorites any film that was deleted from the catalog
    const favoritosValidos = favorito.filter(fav => filmes.some(f => f.id === fav.id));

    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            {favoritosValidos.length < 1 ? (
                <div className={styles.vazio}>
                    <img src={gifNotfound} alt="Nenhum favorito encontrado" />
                    <p>Você ainda não tem favoritos.</p>
                    <Link to="/" className={styles.linkHome}>Explorar filmes</Link>
                </div>
            ) : (
                <section className={styles.grid}>
                    {favoritosValidos.map((fav) => <Card {...fav} key={fav.id} />)}
                </section>
            )}
        </>
    );
}

export default Favoritos;
