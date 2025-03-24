import { StyleSheet, Platform } from "react-native"
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
    borderWidth: Platform.select({ 'ios': 0, 'android' : 3 },
    borderColor: 'white',
    padding: 8,
    maxWidth: '80%s',
    minWidth: '60%'
  }
})


export default Title;