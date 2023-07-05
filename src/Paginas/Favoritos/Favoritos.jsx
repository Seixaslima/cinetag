import Banner from "Components/Banner/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "Components/Titulo/Titulo";
import Card from "Components/Card/Card";

export default function Favoritos() {
  return (
    <>
      <Banner imagem={"favoritos"} />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card
          capa="https://thecatapi.com/api/images/get?format=src&type=png"
          id={1}
          titulo={"Gato bonifacio"}
        />
      </section>
    </>
  );
}
