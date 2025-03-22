import { useState } from 'react'

import { Alert, StyleSheet, TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('')

  function handleChange(text) {
    setEnteredNumber(text)
  }

  function confirmInputHandler() {
    const number = parseInt(enteredNumber)
    
    if (number <= 0 || number > 99) {
      console.log(number);
      Alert.alert(
        'Wrong number',
        "My Alert"
      )
    }
  }

  function handleReset() {
    setEnteredNumber('')
  }

  return (<View style={styles.container}>
    <TextInput 
      style={styles.numberInput} 
      maxLength={2} 
      onChangeText={handleChange}
      keyboardType='number-pad'
      autoCorrect={false}
      autoCapitalize='none'
      value={enteredNumber}/>
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>    
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>    
      </View>
    </View>
  </View>)
}

export default StartGameScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'blue',
    //width: '30%',
    justifyContent: 'space-evenly'
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  container: {    
    flexDirection: 'column',    
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 4,
    shadowOpacity: 0.25,
  },
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})