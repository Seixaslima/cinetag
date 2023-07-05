import Cabecalho from "Components/Cabecalho/Cabecalho";
import Container from "Components/Container/Container";
import Rodape from "Components/Rodape/Rodape";
import FavoritoProvider from "Context/Favoritos";
import Favoritos from "Paginas/Favoritos/Favoritos";
import Inicio from "Paginas/Inicio/Inicio";
import NaoEncontrada from "Paginas/NaoEncontrada/NaoEncontrada";
import PaginaBase from "Paginas/PaginaBase/PaginaBase";
import Player from "Paginas/Player/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
