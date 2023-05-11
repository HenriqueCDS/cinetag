import styles from './Card.module.css';
import iconFavoritar from './favoritar.png';
import iconDesfavoritar from './desfavoritar.png';
import { useFavoritoContext } from '../Contexto/favoritos';
import { Link } from 'react-router-dom';

export default function Card({ id, titulo, capa }) {
    const {favorito,adicionarFavorito} = useFavoritoContext();
    const ehfavorito = favorito.some((fav) =>fav.id ===id);
    const icone = !ehfavorito ? iconFavoritar : iconDesfavoritar
    return (
        <div className={styles.container}>
            
            <Link className={styles.Link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
         
            <img src={icone}
                alt="Favoritar filme"
                className={styles.favoritar} 
                onClick={()=>
                {adicionarFavorito({ id, titulo, capa })}}/>
                
        </div>

    )
}

