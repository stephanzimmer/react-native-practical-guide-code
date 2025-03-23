import { StyleSheet } from "react-native"
import { Text } from "react-native"
import Colors from "../../constants/colors"

function Title({children}) {
  return (<Text style={styles.title}>{children}</Text>)
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 8,
  }
})


export default Title;