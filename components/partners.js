import styles from '../styles/partners.module.css';

const Partners = () => {
    return (
        <div class={`container text-center ${styles.partners}`} >
            <h1>Nuestros Partners</h1>
            <div className="d-flex justify-content-center">
                <div class={styles.mainScroll}>
                    <div class={styles.itemScroll}><img src="jh.png"/></div>
                    <div class={styles.itemScroll}><img src="ts.png"/></div>
                    <div class={styles.itemScroll}><img src="masur.png"/></div>
                    <div class={styles.itemScroll}><img src="santander.png"/></div>
                    <div class={styles.itemScroll}><img src="shell.png"/></div>
                    <div class={styles.itemScroll}><img src="syngenta.png"/></div>
                    <div class={styles.itemScroll}><img src="peregrin.jpg"/></div>
                    <div class={styles.itemScroll}><img src="repsol.png"/></div>
                    <div class={styles.itemScroll}><img src="dpioneer.png"/></div>
                </div>
            </div>
            <h4 className="mb-5">Deslice para ver más </h4>
        </div>
    )
}

export default Partners;