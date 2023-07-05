import Cabecalho from "Components/Cabecalho/Cabecalho";
import Container from "Components/Container/Container";
import Rodape from "Components/Rodape/Rodape";
import FavoritoProvider from "Context/Favoritos";
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <Container>
        <FavoritoProvider>
          <Outlet />
        </FavoritoProvider>
      </Container>
      <Rodape />
    </main>
  );
}
