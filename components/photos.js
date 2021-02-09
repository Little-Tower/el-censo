import styles from '../styles/photos.module.css';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";

const Photos = () => {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, []);

    return (
        <div className={styles.photos}>
            <Parallax bgImage="lupo-censo.jpg" strength={400}>
                <div className={`container text-center ${styles.parallaxText}`}>
                </div>
            </Parallax>
            <div className={`container-fluid mt-5 ${styles.textoFotos}`}>
                <div className="container">
                    <div className="row mb-3">
                        <div data-aos="zoom-in" className="col-md-7 text-white sm-text-center px-5 mt-3 mb-5">
                            <h1>Instalaciones e instracctura</h1>
                            <h5>✓ Limpieza</h5>
                            <h5>✓ Pesaje</h5>
                            <h5>✓ Almacenaiento</h5>
                            <h5>✓ Control de trazabilidad</h5>
                            <h5>✓ Desarrollo genético</h5>
                            <h5>✓ Energías renovables</h5>
                            <h5>✓ Investigación técnicas cultivos</h5>
                        </div>
                        <div className="col-md-5 ">
                            <motion.img whileHover={{ scale: 1.1, transition: { duration: .2 } }} className="img-fluid mb-3" src="./cinta.jpg" />
                        </div>
                    </div>
                </div>

            </div>

            <div className={`container-fluid ${styles.textoFotos}`}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-5">
                            <motion.img whileHover={{ scale: 1.1, transition: { duration: .2 } }} className="img-fluid mt-3" src="./tractores-censo.jpg" />
                        </div>
                        <div data-aos="zoom-in" className="col-md-7 text-white sm-text-center px-5 mt-3 mb-3">
                            <h1>Maquinaria puntera</h1>
                            <h5>✓ Cosechadoras</h5>
                            <h5>✓ Tractores con JDLink™</h5>
                            <h5>✓ Transportes efecientes</h5>
                            <h5>✓ Volteadores y arrados</h5>
                            <h5>✓ Tratamientos químicos eficientes</h5>
                            <h5>✓ Sensorización y medición de los cultivos</h5>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Photos;