import { View, Text, StyleSheet } from 'react-native'
import CategoryView from '../components/CategoryView'
import { CATEGORIES } from '../data/dummy-data.js'

function CategoriesPage() {
    const list = CATEGORIES.map(cat => <CategoryView key={cat.id} category={cat}/>)

    let rows = []
    let col = 0
    let row = []    
    for (const cv of list) {
        if (col++ < 2) {
            row.push(cv)            
        } else {
            rows.push(<View style={styles.row} key={rows.length}>{row}</View>)            
            row = [cv]            
            col = 1                        
        }
    }

    return(<View style={styles.container}>
        <Text>{rows.length}</Text>
        {rows}
    </View> )
}

export default CategoriesPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',        
    },

    row: {        
        flexDirection: 'row',
    }
})