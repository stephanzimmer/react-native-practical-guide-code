import { useState, createContext } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([])

  const addFavorite = (id) => 
    setFavoriteMealIds(current => [...current, id])
  

  const removeFavorite = (id) => 
    setFavoriteMealIds(current => current.filter(i => i !== id))
  

  const ctx = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite
  }

  return <FavoritesContext.Provider value={ctx}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;