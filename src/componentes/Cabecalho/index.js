import { Link } from "react-router-dom";
import logo from './logo.png'
import styles from './Cabecalho.module.css'
import Cabecalholink from "../CabecalhoLink";

export default function Cabecalho() {
    return(
        <header className={styles.cabecalho}>
            <Link to= './'>
               <img src={logo} alt="logo" />
            </Link>
            <Cabecalholink url ='./'>
                Home
            </Cabecalholink>
            <Cabecalholink url ='./favoritos'>
                Favoritos
            </Cabecalholink>
           
        </header>
    )
}