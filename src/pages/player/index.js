import Titulo from '../../componentes/Titulo';
import Banner from '../../componentes/Banner';
import styles from './player.module.css';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import { useFilmesContext } from '../../componentes/Contexto/filmes';

export default function Player() {
    const { id } = useParams();
    const { filmes } = useFilmesContext();
    const video = filmes.find(v => v.id === Number(id));

    if (!video) {
        return <NotFound />;
    }

    return (
        <section className={styles.containerPlayer}>
            <Banner imagem="player" />
            <Titulo><h1>{video.titulo}</h1></Titulo>
            <div className={styles.iframeWrapper}>
                <iframe
                    src={video.link}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </section>
    );
}
