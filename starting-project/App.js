import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [isGameOver, setIsGameOver] = useState()

  function handlePickedNumber(pickedNumber) {
    console.log(pickedNumber);
    setUserNumber(pickedNumber)
  }

  useEffect(() => {
    
  }, [])

  let screen = <StartGameScreen onConfirm={handlePickedNumber}/>

  if (userNumber) {
    screen = <GameScreen number={userNumber} />
  }

  if (isGameOver) {
    screen = <GameOverScreen />
  }


  function handleGameOver() {
    setUserNumber(undefined)
    setIsGameOver(true)
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.yellow]} style={styles.container}>            
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode="cover" 
        imageStyle={{
          opacity: 0.15
        }}
        style={styles.container} 
        >      
          <SafeAreaView style={styles.container}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      {/* <StatusBar style="auto" /> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,        
  },
});
