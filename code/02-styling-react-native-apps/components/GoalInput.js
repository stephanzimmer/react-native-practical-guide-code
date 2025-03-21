import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'
import icon from '../assets/goal.png'

function GoalInput({isVisible, onAddGoal}) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {    
    setEnteredGoalText(enteredText)
}

function addGoalHandler() {    
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
}

function cancelHandler() {
  onAddGoal(undefined)
  setEnteredGoalText('')
}
  
  return (
    <Modal visible={isVisible} animationType='slide'>      
      <View style={styles.inputContainer}> 
        <Image source={icon} style={styles.imageStylte}/>
        <TextInput 
            style={styles.textInput}        
            placeholder='Your course goal'
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={cancelHandler} color='#f31282'/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
    //marginBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
    padding: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',    
    width: '100%',
    marginRight: 8,
    padding: 8,
    color: '#120438',
    borderRadius: 6
  },
  buttonContainer: {
    flexDirection: 'row',    
    justifyContent: 'center',
    width: '80%',
    margin: 20
  },
  button: {
    width: 100,
    marginHorizontal: 10
  },
  imageStylte: {    
    //backgroundColor: 'black',
    margin: 20,
    tintColor: '#120438'
  }
})