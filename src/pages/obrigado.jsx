import styles from "../styles/Home.module.css";
import Pixel from '../components/pixel/facebook/pixel-1'
import { useEffect } from "react";



export default function Home() {

    useEffect(() => {
        // fbq('track', 'Lead');
    }, [])

    return (
        <>
            {/* <Pixel name='FACEBOOK_PIXEL_1' /> */}
            <div className={styles.main}>

                <div className={styles.wapper}>

                    <div className={styles.container}>
                        <h2 className={styles.h1Obr} >Participe do nosso grupo exclusivo e <br /> receba em primeirão mão:</h2>
                        <div className={styles.obg}>
                            <p><b className={styles.boldP} >✔ Dicas diretamente da boss e informaçoes antecipadas:</b>
                                <br />saiba quais serão as peças e preços da sale</p>
                            <p className={styles.cupomP} >
                                ✔ Cupom de desconto EXCLUSIVO
                            </p>
                            <p className={styles.ultimoP} >
                                participe agora para não perder nenhum detalhe!
                            </p>
                            <a className={styles.buttonObg} href="https://devzapp.com.br/api-engennier/campanha/api/redirect/66293b4e230a9c00011b2fd2">QUERO PARTICIPAR!</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
