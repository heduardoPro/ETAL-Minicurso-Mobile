import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';
import Input from './src/components/Input';
import ImageSrc from './src/assets/imgs/00png.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}> Todo List</Text>
      <Input />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 40,
    fontFamily: 'Poppins',
    
  },
  ImageMain: {
    width: '80%',
    height: 150,
    marginBottom: 20,
  }
});
