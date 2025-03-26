
import React from 'react';
import { View, Pressable, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback  } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealScreen from './screens/MealScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CATEGORIES } from './data/dummy-data';
import CategoryGridTile from './components/CategoryGridTile';
import CategoriesPage from './screens/CategoriesPage';
import { MyScreen } from './components/MyScreen';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{          
          headerStyle: { backgroundColor: '#351401'},
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25'}
          }}>
        <Stack.Screen name="Categories" component={CategoriesScreen} 
          options={{ title: "Categories" }} />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
          options={({route, navigation}) => { 
            return {
              title: "Meals " + route.params.categoryId
            }}}/>
        <Stack.Screen name="Meal" component={MealScreen} options={{title: "Meal"}}/>
      </Stack.Navigator>
{/*         
     <Pressable          
       onPress={() => {console.log('pressed2')}}
       style={styles.container}           
     >
       <Text>Test2</Text>
    </Pressable>         */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// <CategoryGridTile category={CATEGORIES[0]} />
    // <View style={styles.container}>
    //   {/* <NavigationContainer>
    //     <CategoriesScreen />
    //   </NavigationContainer> */}
    //   <CategoriesScreen />
    // </View>

