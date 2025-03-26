import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'

const CategoryGridTile = ({category}) => {

    function handlePress(e) {
        console.log('pressed')
    }

    return(
    <View style={[styles.container, {backgroundColor: category.color}]}>
        <Pressable 
            android_ripple={{color: '#fcc'}} 
           

            style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
            >
            <View style={[styles.innerContainer, {backgroundColor: category.color}]}>                   
                <Text style={styles.title}>{category.title}</Text>                        
            </View>
        </Pressable>
    </View>)
}

export default CategoryGridTile

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 16,
        height: 150,
        width: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.select({ios: 'visible', android: 'hidden'}),
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
        color: 'white'
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})