import Banner from "Components/Banner/Banner";
import styles from "./Player.module.css";
import Titulo from "Components/Titulo/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "Paginas/NaoEncontrada/NaoEncontrada";
import { useEffect, useState } from "react";

export default function Player() {
  const parametros = useParams();
  const [video, setVideo] = useState();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/Seixaslima/cinetag-api/videos?id=${parametros.id}`
    )
      .then(resposta => resposta.json())
      .then(dados => setVideo(...dados));
  }, [parametros]);

  if (!video) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}
