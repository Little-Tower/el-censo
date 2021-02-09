import styles from '../styles/photos.module.css'
import AOS from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";



const Cultivos = () => {

    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);

    return (
        <div data-aos="zoom-in" className="container-fluid mt-5 align-content-center">
            <div className="col-md-12 text-center">
                <h1 className={`mb-5 ${styles.titulos}`}>Nuestros cultivos</h1>
                <img className={`img-fluid ${styles.cultivos}`} src="./cultivos.png" />
            </div>
        </div>
    )
}

export default Cultivos;