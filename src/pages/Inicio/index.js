
import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import Card from "../../componentes/Card";
import videos from  "json/db.json";

import styles from './inicio.module.css'
export default function Inicio() {
    return(
    
            <section className={styles.home}>
                <Banner imagem="home" />
                <Titulo><h1>Um lugar que eu uso para guardar meus filmes </h1></Titulo>
                <div className={styles.container}>
                    {videos.map((video) => {
                        return <Card {...video} key={video.id} />
                        
                    })}

                </div>
            </section>
       
    )
    
};
