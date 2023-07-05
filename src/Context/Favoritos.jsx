const { createContext, useContext, useState } = require("react");

const favoritosContext = createContext();
favoritosContext.displayName = "Favoritos";

export default function FavoritoProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  return (
    <favoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </favoritosContext.Provider>
  );
}

export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(favoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

    const novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    return setFavorito(novaLista.filter(item => item.id !== novoFavorito.id));
  }

  return {
    favorito,
    adicionarFavorito
  };
}
