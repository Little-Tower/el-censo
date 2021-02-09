import styles from '../styles/navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.headerContent}>

                    <div className={`row ${styles.logoContainer}`}>
                        <img className={` ${styles.logo}`} src='./logo-ariza-gris.png' alt="Logo head" />
                    </div>

                    <div className="row">

                        <div className={`col-lg-6 ${styles.textoGlass}`}>
                            <h1>Agrícola El Censo</h1>
                            <p>El ejemplo de la dedicación diaria a la mejorar de la sostenibilidad, innovación y productividad de la agricultura del siglo XXI.</p>
                            <a className={styles.btnMore} href="#">Ver más</a>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Navbar;