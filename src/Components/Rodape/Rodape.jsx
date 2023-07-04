import styles from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <p className={styles.texto}>
        Implementado por Lucas Seixas | Desenvolvido por Alura
      </p>
    </footer>
  );
}
