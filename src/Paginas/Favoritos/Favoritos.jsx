import Banner from "Components/Banner/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "Components/Titulo/Titulo";
import Card from "Components/Card/Card";
import { useFavoritoContext } from "Context/Favoritos";

export default function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem={"favoritos"} />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map(fav => (
          <Card {...fav} key={fav.id} />
        ))}
      </section>
    </>
  );
}
