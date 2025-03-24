import { View, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function Card({children}) {
    return <View style={styles.container}>
        {children}
    </View>
}

export default Card

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        flexDirection: 'column',    
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 4,
        shadowOpacity: 0.25,
      },
})