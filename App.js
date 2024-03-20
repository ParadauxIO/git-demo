import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text>My Git Demo</Text>
      <TouchableOpacity style={[styles.button, {backgroundColor: "lightgreen"}]} onPress={() => setCounter(prev => prev + 1)}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {backgroundColor: "pink"}]} onPress={() => setCounter(prev => prev - 1)}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>Counter: {counter}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    backgroundColor: "rgb(255, 255, 0)",
    borderRadius: 12
  }
});
