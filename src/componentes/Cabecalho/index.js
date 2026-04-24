import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import Cabecalholink from "../CabecalhoLink";
import { useFilmesContext } from "../Contexto/filmes";

function IconeMenu() {
    return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}

function IconeFechar() {
    return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

export default function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);
    const { somenteLeitura } = useFilmesContext();

    return (
        <header className={styles.cabecalho}>
            <Link to='/' className={styles.logo}>
                <img src={logo} alt="CineTag" />
            </Link>

            <nav className={`${styles.nav} ${menuAberto ? styles.navAberto : ''}`}>
                <Cabecalholink url='/'>Home</Cabecalholink>
                <Cabecalholink url='/favoritos'>Favoritos</Cabecalholink>
                {!somenteLeitura && (
                    <Link to='/adicionar' className={styles.linkNovo}>
                        + Novo Filme
                    </Link>
                )}
            </nav>

            <button
                className={styles.hamburger}
                onClick={() => setMenuAberto(prev => !prev)}
                aria-label="Abrir menu"
            >
                {menuAberto ? <IconeFechar /> : <IconeMenu />}
            </button>
        </header>
    );
}
