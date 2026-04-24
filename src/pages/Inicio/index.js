import { useState } from 'react';
import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import Card from "../../componentes/Card";
import { useFilmesContext } from "../../componentes/Contexto/filmes";
import styles from './inicio.module.css';

export default function Inicio() {
    const { filmes, carregando, erroApi } = useFilmesContext();
    const [busca, setBusca] = useState('');

    const filmesFiltrados = filmes.filter(f =>
        f.titulo.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <section className={styles.home}>
            <Banner imagem="home" />
            <Titulo><h1>Meus Filmes Favoritos</h1></Titulo>

            <div className={styles.barrabusca}>
                <input
                    type="text"
                    placeholder="Buscar filme pelo título..."
                    value={busca}
                    onChange={e => setBusca(e.target.value)}
                    className={styles.inputBusca}
                />
                {busca && (
                    <button className={styles.btnLimpar} onClick={() => setBusca('')} aria-label="Limpar busca">
                        ✕
                    </button>
                )}
            </div>

            {carregando && <p className={styles.mensagem}>Carregando filmes...</p>}
            {erroApi && <p className={styles.mensagemErro}>{erroApi}</p>}
            {!carregando && !erroApi && filmesFiltrados.length === 0 && (
                <p className={styles.mensagem}>Nenhum filme encontrado para "{busca}".</p>
            )}

            <div className={styles.grid}>
                {filmesFiltrados.map((video) => (
                    <Card {...video} key={video.id} />
                ))}
            </div>
        </section>
    );
}
