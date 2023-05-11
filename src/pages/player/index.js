import Titulo from '../../componentes/Titulo';
import Banner from '../../componentes/Banner';
import styles from './player.module.css';
import { useParams } from 'react-router-dom';
import videos from  "json/db.json";
import NotFound from  "../NotFound";

export default function Player() {
    const params = useParams();
    const video = videos.find((video) => {
        return video.id === Number(params.id); 
    })
    console.log(video);

    if(!video){
        return <NotFound />


      
    }
    return(
        <>
            <Banner imagem ="player"/>
            <Titulo>
                <h1>Player</h1>
                <section  className={styles.container}>
                <iframe  src={video.link}  title={video.Titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         
                </section>
            </Titulo>
        
        </>
    )
}