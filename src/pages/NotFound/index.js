

import Titulo from "../../componentes/Titulo";
import styles from './NotFound.module.css'
import gifNotfound from  "./john-travolta.gif";


export default function Inicio() {
    return(
        <>

            <section  className={styles.container}>
                <Titulo>
                    <h1>Ops!</h1>
                    <h1>Conteudo que voce procura não foi encontrado!</h1>
                </Titulo>

                <img src={gifNotfound} alt='Não encontrado'/>
             </section>    
        
        </>
    )
    
};
