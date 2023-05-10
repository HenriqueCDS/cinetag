import { Children } from 'react';
import styles from './Container.module.css';

export default function name({ children }) {
    return (
        <section className={styles.container} >
            {children}
        </section>
    )
    
}