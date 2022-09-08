import { createContext, useContext } from "react";
import { api } from "../services/api";

export const FavoritesContext = createContext([])


function FavoritesProvider({ children }) {

  async function favorites() {
    try {
      const response = await api.get("/favorites");
      console.log(response);

    } catch (error){
      console.log(error);
    }
  }

  return (
    <FavoritesContext.Provider >
      {children}
    </FavoritesContext.Provider>
  )
}

function useFavorites() {
  const context = useContext(FavoritesContext)

  return context
}

export {
  FavoritesProvider,
  useFavorites,
  
}