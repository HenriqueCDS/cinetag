import { useFavoritoContext } from '../Contexto/favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    return (
        <div className={styles.container}>
            <div className={styles.topCard}>
                <Link className={styles.link} to={`/${id}`}>
                    <img src={capa} alt={titulo} className={styles.capa} />
                </Link>
            </div>

            <div className={styles.bottomCard}>
                <h2>{titulo}</h2>
                <img src={icone}
                    alt="Favoritar filme"
                    className={styles.favoritar}
                    onClick={() => {
                        adicionarFavorito({ id, titulo, capa })
                    }} />

            </div>
          
           
        </div>

    )
}

export default Card;