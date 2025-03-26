import { View, Text, StyleSheet } from 'react-native'

const CategoryView = ({category}) => {
    return(<View style={[styles.container, {backgroundColor: category.color}]}>
        <Text>{category.id}</Text>
        <Text>{category.title}</Text>        
    </View>)
}

export default CategoryView

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        height: 100,
        width: 100
    }
})