import { useState } from 'react'

import { Alert, StyleSheet, TextInput, View, Text } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';

function StartGameScreen({onConfirm}) {
  const [enteredNumber, setEnteredNumber] = useState('')

  function handleChange(text) {
    setEnteredNumber(text)
  }

  function confirmInputHandler() {
    const number = parseInt(enteredNumber)
    
    if (enteredNumber === '' || isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        `Invalid number ${enteredNumber}`,
        'Number has to be in (0, 99]'
        [{ text: 'Okay', style:'destructive'}]
      )

      return;
    }

    onConfirm(number)
  }

  function handleReset() {
    setEnteredNumber('')
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <View style={styles.container}>
        <Text style={styles.instructionText}>Enter a Number</Text>
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
      </View>
  </View>)
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.buttonBorder,
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
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
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
    borderBottomColor: Colors.yellow,
    borderBottomWidth: 2,
    color: Colors.yellow,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})