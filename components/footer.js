import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <div className={`container-fluid text-center ${styles.footer}`}>
            <h1 className="mt-3 mb-5">Dónde estamos</h1>
            <div className="container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12643.697843473667!2d-5.2110733!3d37.6039368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4703679645b5fb85!2sAgr%C3%ADcola%20El%20Censo%20Sl!5e0!3m2!1ses!2ses!4v1612725732078!5m2!1ses!2ses" width="100%" height="450px" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div className="container text-center mt-5">
                <h2>Contacto</h2>
                <h4>Teléfono: +34 666 799 035</h4>
                <h4>contacto@agricolaelcenso.es</h4>
                <img class={`img-fluid ${styles.logoFooter}`} src="./logo-ariza-gris.png"/>
                <p className="mt-5">Agrícola El Censo - Écija, Sevilla - 2021</p>
            </div>
            <div className="container">
                <img className="img-fluid" src="./grass.png"/>
            </div>  
        </div>
    )
}

export default Footer;