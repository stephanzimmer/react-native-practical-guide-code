import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}) {
  return <View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
  </View>
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    margin: 24,    
  },
  numberText: {
    color: Colors.accent500,
    fontWeight: 'bold'
  }
})