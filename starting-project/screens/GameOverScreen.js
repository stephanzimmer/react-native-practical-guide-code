import { View } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'

function GameOverScreen({onRestart}) {
  return <View>
    <Title>Woohoo</Title>
    <PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
  </View>
}

export default GameOverScreen