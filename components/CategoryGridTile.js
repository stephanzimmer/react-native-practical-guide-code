import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

function CategoryGridTile({category, onPress}) {
    const { title, color } = category
  return (

    

    <View style={[styles.gridItem, {backgroundColor: color}]}>
       <Pressable
          android_rippe={{color: '#ccc'}}
          onPress={() => onPress(category)}
          style={styles.button}
          // style={({ pressed }) => [
          //   styles.button,
          //   {backgroundColor: pressed ? 'gray' : 'white'},
          //   pressed ? styles.buttonPressed : null]}
        >
          
       <Text style={styles.title}>{category.title}</Text>    
       </Pressable>

      
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
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
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
    //backgroundColor: 'green'
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});