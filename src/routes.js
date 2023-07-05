import Cabecalho from "Components/Cabecalho/Cabecalho";
import Container from "Components/Container/Container";
import Rodape from "Components/Rodape/Rodape";
import FavoritoProvider from "Context/Favoritos";
import Favoritos from "Paginas/Favoritos/Favoritos";
import Inicio from "Paginas/Inicio/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritoProvider>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Routes>
        </FavoritoProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}
