import Banner from "Components/Banner/Banner";
import Cabecalho from "Components/Cabecalho/Cabecalho";
import Card from "Components/Card/Card";
import Rodape from "Components/Rodape/Rodape";
import Titulo from "Components/Titulo/Titulo";
import styles from "./Inicio.module.css";
import videos from "json/db.json";

export default function Inicio() {
  console.log(videos);
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map(video => (
          <Card {...video} key={video.id} />
        ))}
      </section>
    </>
  );
}
