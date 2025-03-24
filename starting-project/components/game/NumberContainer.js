import { StyleSheet, View, Text, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}) {
  return <View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
  </View>
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;


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
    padding: deviceWidth < 450 ? 12 : 23,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    //fontFamily: 'open-sans'
    fontWeight: 'bold'
  }
})