import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function App() {
  function handlePress() {
    console.error('test')
    alert('test')
  }

  return (
    <View pointerEvents="box-none"  style={styles.container}>
      <Button title="Press me3" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aac',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// import React from 'react';
// import {Text, View, Pressable} from 'react-native';
// //import { GestureHandlerRootView } from 'react-native-gesture-handler';


// export default function App() {
//     return (
//         <View style={{padding: 50}}>
//             <Pressable onPress={() => console.log("press")}>
//             <View
//                 style={{
//                     backgroundColor: 'red',
//                     width: 100,
//                     height: 100,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 }}>
//                 <Text>1</Text>
//             </View>
//             </Pressable>
//             <View
//                 style={{
//                     backgroundColor: 'blue',
//                     width: 100,
//                     height: 100,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 }}>
//                 <Text>2</Text>
//             </View>
//             <View
//                 style={{
//                     backgroundColor: 'green',
//                     width: 100,
//                     height: 100,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 }}>
//                 <Text>3</Text>
//             </View>
//         </View>
//     );
// }
