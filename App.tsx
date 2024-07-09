import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/sreens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
