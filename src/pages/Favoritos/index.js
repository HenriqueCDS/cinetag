import styles from './Favoritos.module.css';
import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import Card from "../../componentes/Card";
import videos from  "json/db.json";

export default function Favoritos() {
    return (
        <>
         <Banner imagem="favoritos" />
            <Titulo><h1>Um lugar para guardar seus videos e filmes</h1></Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                    
                })}

            </section>
        
        </>
    )
}