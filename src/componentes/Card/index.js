import { useState } from 'react';
import { useFavoritoContext } from '../Contexto/favoritos';
import { useFilmesContext } from '../Contexto/filmes';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

function IconePlay() {
    return (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="white" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))' }}>
            <polygon points="6,3 20,12 6,21" />
        </svg>
    );
}

function IconeCoracao({ preenchido }) {
    return preenchido ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
    ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
    );
}

function IconeEditar() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
    );
}

function IconeLixeira() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        </svg>
    );
}

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const { removerFilme } = useFilmesContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const [confirmando, setConfirmando] = useState(false);

    async function handleDeletar() {
        if (ehFavorito) adicionarFavorito({ id, titulo, capa });
        await removerFilme(id);
    }

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <div className={styles.overlay}>
                    <IconePlay />
                </div>
            </Link>

            {confirmando ? (
                <div className={styles.confirmar}>
                    <span>Deletar este filme?</span>
                    <div className={styles.botoesConfirm}>
                        <button className={styles.btnCancelar} onClick={() => setConfirmando(false)}>Não</button>
                        <button className={styles.btnConfirmar} onClick={handleDeletar}>Sim</button>
                    </div>
                </div>
            ) : (
                <div className={styles.bottomCard}>
                    <span className={styles.titulo}>{titulo}</span>
                    <div className={styles.acoes}>
                        <Link to={`/editar/${id}`} className={styles.btnAcao} title="Editar">
                            <IconeEditar />
                        </Link>
                        <button
                            className={`${styles.btnAcao} ${styles.btnDeletar}`}
                            onClick={() => setConfirmando(true)}
                            title="Deletar"
                        >
                            <IconeLixeira />
                        </button>
                        <button
                            className={`${styles.btnFavoritar} ${ehFavorito ? styles.favoritado : ''}`}
                            onClick={() => adicionarFavorito({ id, titulo, capa })}
                            aria-label={ehFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                        >
                            <IconeCoracao preenchido={ehFavorito} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;
