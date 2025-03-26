import { useNavigation, useRoute } from "@react-navigation/core"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"

function MealScreen() {
    const route = useRoute()    
    const navigation = useNavigation()

    const { meal, category } = route.params

    const { imageUrl } = meal

    const ingredients = meal.ingredients.map((i, index) => <Text key={index}>{index+1} {i}</Text>)

    return <View style={[styles.container, {backgroundColor: category.color}]}>
        <Pressable>
            <Text style={styles.title}>{meal.title}</Text>
            <Text>{meal.affordability}</Text>
            <Text>{meal.duration}</Text>
            <View>{ingredients}</View>

            <Image 
                style= { styles.image }
                source={{uri: imageUrl}} />
         </Pressable>
    </View>

}

export default MealScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    }
})