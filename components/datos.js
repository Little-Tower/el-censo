import styles from '../styles/photos.module.css'

const Datos = () => {
    return (
        <div className={`container-fluid ${styles.datosVarios}`}>
            <div className="container">
                <div className="row">
                    <div className={`col-md-4 ${styles.tituloDatosvarios}`}>
                        <h1>El Gran título latereal de esta sección</h1>
                    </div>
                    <div className="col-md-8 mt-3">
                        <div className="row">

                            <div className="col-md-6 px-5 text-center">
                                <img className="img-fluid" src="./1.png" alt="Imagen de dato" />
                                <h4>Texto de uno de los dats de prueba</h4>
                            </div>

                            <div className="col-md-6 px-5 text-center">
                                <img className="img-fluid" src="./2.png" alt="Imagen de dato" />
                                <h4>Texto de uno de los dats de prueba</h4>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6 px-5 mt-5 text-center">
                                <img className="img-fluid" src="./3.png" alt="Imagen de dato" />
                                <h4>Texto de uno de los dats de prueba</h4>
                            </div>

                            <div className="col-md-6 px-5 mt-5 text-center">
                                <img className="img-fluid" src="./4.png" alt="Imagen de dato" />
                                <h4>Texto de uno de los dats de prueba</h4>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Datos;