import Banner from "Components/Banner/Banner";
import Card from "Components/Card/Card";
import Titulo from "Components/Titulo/Titulo";
import styles from "./Inicio.module.css";
import { useEffect, useState } from "react";

export default function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Seixaslima/cinetag-api/videos")
      .then(resposta => resposta.json())
      .then(dados => setVideos(dados));
  }, []);

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
