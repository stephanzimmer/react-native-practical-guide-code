import { FlatList, Text, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import CategoryView from "../components/CategoryView";

const CategoriesScreen = () => {    
    const navigation = useNavigation()

    function pressHandler({title, id}) {
        console.log("pressed " + id)
        navigation.navigate('MealsOverview', { categoryId: id })
    }

    return (
    <FlatList
        data={CATEGORIES}
        renderItem={ itemData  => (            
            <CategoryGridTile category={itemData.item} onPress={pressHandler}/>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
/>
)}

export default CategoriesScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },   
    item: {
        flex: 1
    }
})