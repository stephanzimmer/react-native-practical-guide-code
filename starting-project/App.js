import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';
//import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
  const [userNumber, setUserNumber] = useState()  
  const [isGameOver, setIsGameOver] = useState()
  const [guesses, setGuesses] = useState({})
  

  // const [fontsLoaded] = useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  // })

  // if (fontsLoaded) {
  //   SplashScreen.hideAsync()
  // }

  function handlePickedNumber(pickedNumber) {
    console.log(pickedNumber);
    setUserNumber(pickedNumber)
    setIsGameOver(false)
  }

  let screen = <StartGameScreen onConfirm={handlePickedNumber}/>

  if (userNumber) {
    screen = <GameScreen number={userNumber} onGameOver={handleGameOver} />
  }

  if (isGameOver && userNumber) {
    screen = <GameOverScreen onRestart={handleRestart} guesses={guesses}/>
  }


  function handleGameOver(currentGuess) {
    console.log("GAME OVER")    
    setGuesses(currentGuess)
    setIsGameOver(true)    
  }

  function handleRestart() {
    setUserNumber(undefined)
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



// "plugins": [
//   [
//     "expo-font",
//     {
//       "fonts": [
//         "./assets/fonts/OpenSans-Regular.ttf", 
//         "./assets/fonts/OpenSans-Bold.ttf"]
//     }
//   ]
// ],