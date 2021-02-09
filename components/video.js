import styles from '../styles/videos.module.css'
import ReactPlayer from 'react-player';
import { Parallax } from 'react-parallax';

const Video = () => {
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <Parallax bgImage="cielo-censo.jpg" strength={700}>
                    <div className={`container text-center ${styles.parallaxText}`}>
                        
                    </div>
                </Parallax>
            </div>
            <h1 className="mb-5 mt-5">Vídeos</h1>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-5 col-sm-12 px-3 py-3 d-flex justify-content-center">
                        <ReactPlayer className={styles.video} url="https://youtu.be/NkyMssQg3AA" />
                    </div>
                    <div className="col-xl-5  col-sm-12 px-3 py-3 d-flex justify-content-center">
                        <ReactPlayer className={styles.video} url="https://youtu.be/_RYWFcS7T80" />
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Video;