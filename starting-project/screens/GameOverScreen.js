import { View, Image, StyleSheet, Text } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'

function GameOverScreen({onRestart, guesses}) {
  return <View style={styles.container}>
    <Title>Woohoo</Title>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/images/success.png')} />
    </View>
    <Text style={styles.summary}>
        Your phone needed <Text style={styles.highlight}>{guesses.moves}</Text> rounds to guess your number <Text style={styles.highlight}>{guesses.number}</Text>.
    </Text>
    <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
  </View>
}

export default GameOverScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    width: 400,
    height: 400,  
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,    
  },
  image:  {
    width: '100%'
  },
  summary: {
    color: Colors.primary500,
    textAlign: 'center',
    marginVertical: 24
  },
  highlight: {
    color: Colors.primary800
  }
})