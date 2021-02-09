import styles from '../styles/txtHead.module.css';
import { Parallax } from 'react-parallax';


const TxtHead = () => {

    return (
        <div className="container-fluid">
            <div className={`container mt-5 ${styles.textoDescripcion}`}>
                <div className="col-md-12 text-center">
                    <h1>Sobre nosotros</h1>
                    <p>La empresa Agrícola El Censo gestiona una superficie de explotación agrícola superior a las 500 Ha, con una amplia diversidad de cultivos y actividades. Con proyectos en curso como el paso al consumo de energía 100% solar, nuestra empresa demuestra su espiritu innovador y en la busqueda constate de mejorar en el amplio campo de la agricultura.</p>
                </div>
            </div>

            <Parallax  bgImage="tractores2-censo.jpg" strength={600}>
                <div className={`container text-center ${styles.parallaxText}`}>
                   
                </div>
            </Parallax>
        </div>
    )
}

export default TxtHead;