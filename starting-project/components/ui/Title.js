import { StyleSheet } from "react-native"
import { Text } from "react-native"

function Title({children}) {
  return (<Text style={styles.title}>{children}</Text>)
}

const styles = StyleSheet.create({
  title: {
    //fontFamily: 'open-sans-bold',
    fontWeight: 'bold',
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