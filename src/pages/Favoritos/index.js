import styles from './Favoritos.module.css';
import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import Card from "../../componentes/Card";
import gifNotfound from  "./john-travolta.gif";

import { useFavoritoContext } from '../../componentes/Contexto/favoritos';


function Favoritos() {
    const { favorito } = useFavoritoContext();

   
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.length < 1 ? (
                    
                    <img src={gifNotfound} alt="Nenhum favorito encontrado" />
                ) : (
                    favorito.map((fav) => <Card {...fav} key={fav.id} />)
                )}
            </section>
        </>
    )
}

export default Favoritos;