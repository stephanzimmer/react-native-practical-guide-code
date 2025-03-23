import { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import generateRandomBetween from '../extra-files/logic/random'
import Colors from '../constants/colors'
import NumberContainer from '../components/game/NumberContainer'

const minBoundary = 1
const maxBoundary = 100

function GameScreen({number, onGameOver}) {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, number)
  const [currentGuess, setCurrentGuess ] = useState({
    guess: initialGuess,
    top: maxBoundary,
    bottom: minBoundary,
  })

  useEffect(() => {    
    if (number === currentGuess.guess) {            
      onGameOver()
    }
  }, [number, currentGuess])

  function handlePlus() {
    const guess = generateRandomBetween(currentGuess.guess+1, currentGuess.top)    
    setCurrentGuess({
      ...currentGuess,
      bottom: currentGuess.guess,      
      guess      
    })
  }

  function handleMinus() {
    const guess = generateRandomBetween(currentGuess.bottom, currentGuess.guess-1)    
    setCurrentGuess({
      ...currentGuess,
      top: currentGuess.guess,
      guess      
    })       
  }

  const hasWon = number === currentGuess.guess;
  


  return <View style={[styles.screen, styles.text]}>
    {/* <Title>{hasWon ? "Woohoo!" : "Opponent's Guess:"}</Title> */}
    <Title>Opponent's Guess:</Title>
    
    {console.log(`${number} ${currentGuess.guess}`)}
    <NumberContainer>{currentGuess.guess}</NumberContainer>
    <View>
      <Text style={styles.text}>Higher or lower?</Text>
    </View>
    {hasWon || <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handlePlus}>+</PrimaryButton>    
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleMinus}>-</PrimaryButton>    
        </View>
      </View>}
      
    </View>
  }

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    // alignItems: 'center',
    // justifyContent: 'center',    
  }, 
  buttonsContainer: {
    flex: 1,    
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: Colors.buttonBorder,    
    justifyContent: 'flex-start'
  },
  buttonContainer: {    
    marginHorizontal: 8,
  },
  text: {
    color: Colors.accent500,
  }
})