import { Pressable, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const MealsOverflowScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const { categoryId } = route.params
    
    const categories = CATEGORIES.filter(c => c.id === categoryId)
    const category = categories[0]
    const meals = MEALS.filter(m => m.categoryIds.includes(categoryId))

    //navigation.setOptions({})

    function handlePress(m) {
        console.log('meal pressed')
        navigation.navigate('Meal', {meal: m, category})
    }

    const list = meals.map(m => <View key={m.id}>
        <Pressable
            onPress={() => handlePress(m)}>
            <Text>{m.title}</Text>
        </Pressable>
    </View>)
    
    return <View style={{backgroundColor: category.color}}>
            <Text>MealsOverflowScreen</Text>

            <Text>{category.title}</Text>
            <View>
                {list}
            </View>
        </View>    
}

export default MealsOverflowScreen