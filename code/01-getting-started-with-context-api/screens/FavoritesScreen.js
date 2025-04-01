import { useContext } from 'react';
import { View, Text } from 'react-native-web';
import { StyleSheet } from 'react-native-web';
import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
  const favoritesCtx = useContext(FavoritesContext)

  const favoriteMeals = MEALS.filter(m => favoritesCtx.ids.includes(m.id));

  // if (favoriteMeals.length === 0) {
  //   return <Text>bam</Text>
  // }

  // if (favoriteMeals.length === 0) {
  //   return <Text>bla</Text>    
  // }
  
  return <Text>bam</Text>
  //  <MealsList items={favoriteMeals}/>
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})