import { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import generateRandomBetween from '../extra-files/logic/random'
import Colors from '../constants/colors'
import NumberContainer from '../components/game/NumberContainer'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import EvilIcons from '@expo/vector-icons/EvilIcons';

const minBoundary = 1
const maxBoundary = 100

function GameScreen({number, onGameOver}) {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, number)
  const [currentGuess, setCurrentGuess ] = useState({
    guess: initialGuess,
    top: maxBoundary,
    bottom: minBoundary,
    moves: 0,
    number
  })

  useEffect(() => {    
    if (number === currentGuess.guess) {            
      onGameOver(currentGuess)
    }
  }, [number, currentGuess])

  function handlePlus() {
    const guess = generateRandomBetween(currentGuess.guess+1, currentGuess.top)    
    setCurrentGuess({
      ...currentGuess,
      bottom: currentGuess.guess,      
      moves: currentGuess.moves+1,
      guess      
    })
  }

  function handleMinus() {
    const guess = generateRandomBetween(currentGuess.bottom, currentGuess.guess-1)    
    setCurrentGuess({
      ...currentGuess,
      top: currentGuess.guess,
      moves: currentGuess.moves+1,
      guess      
    })       
  }

  const hasWon = number === currentGuess.guess;
  


  return <View style={[styles.screen, styles.text]}>    
    <Title>Opponent's Guess:</Title>
    
    {console.log(`${number} ${currentGuess.guess}`)}
    <NumberContainer>{currentGuess.guess}</NumberContainer>
    <Card>
      <InstructionText>Higher or lower?</InstructionText>
    
      {hasWon || <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handlePlus}>
            <EvilIcons name="plus" size={24} color="white" />
          </PrimaryButton>    
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleMinus}>
            <EvilIcons name="minus" size={24} color="white" />
          </PrimaryButton>    
        </View>
      </View>}
      </Card>
    </View>
  }

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,    
  }, 
  buttonsContainer: {
      
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.buttonBorder,    
    justifyContent: 'flex-start',
    padding: 2,
  },
  buttonContainer: {    
    marginHorizontal: 8,
  },
  text: {
    color: Colors.accent500,
  }
})