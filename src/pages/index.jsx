import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Pixel from '../components/pixel/facebook/pixel-1'


export default function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter()

  function cadastroMailbiz(e) {
    // e.preventDefault();
    // const options = {
    //   method: 'POST',
    //   url: `https://mbiz.mailclick.me/api.php/Subscriber.Subscribe?APIKey=${process.env.API_KEY}&Command=Subscriber.Subscribe&ResponseFormat=JSON&ListID=13848&EmailAddress=${email}&CustomField1=${nome}&IPAddress=12`
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    router.push('/obrigado');
  }
  return (
    <>
      {/* <Pixel name='FACEBOOK_PIXEL_1' /> */}
      <div className={styles.main}>

        <div className={styles.wapper}>

          <div className={styles.container}>
            <h1>WINTER SALE</h1>
            <p>
              Bye, Bye inverno! Prepare-se para a liqui mais esperada do ano!<br /><br />

              <b>Dia 08/07, 12hrs</b>: live com cupom exclusivo para dar início à nossa mega sale de inverno.
            </p>
            <input className={styles.button} type="submit" onClick={cadastroMailbiz} value={'CLIQUE E SAIBA MAIS'} />

          </div>

          {/* <form className={styles.form} onSubmit={cadastroMailbiz}>
            <input
              className={styles.nome}
              type="text"
              placeholder='NOME'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              className={styles.email}
              type="email"
              name="email"
              placeholder='EMAIL'
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              </form> */}
        </div>
      </div>
    </>
  );
}
