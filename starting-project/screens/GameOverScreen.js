import { View, Text } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({onRestart}) {
  return <PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
}

export default GameOverScreen