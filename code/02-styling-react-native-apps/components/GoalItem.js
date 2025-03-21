import { StyleSheet, View, Text, Pressable } from 'react-native'


function GoalItem({handleLongPress, item, ...props}) {
  return(      
      <View style={styles.goalItem}>      
      <Pressable 
        android_ripple={{color: '#dddddd'}} 
        onLongPress={handleLongPress.bind(this, item.id)}
        style={(pressData) => pressData.pressed && styles.pressedItem}>
          <Text style={styles.goalText}>{item.text}</Text>      
          </Pressable>
      </View>      
  )
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: 'white'
  },
  pressedItem: {
    color: 'red'
  }
})