import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackScreen from './components/StackScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/font/Roboto-Black.ttf'),
    'Roboto-BlackItalic': require('./assets/font/Roboto-BlackItalic.ttf'),
    'Roboto-Bold': require('./assets/font/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('./assets/font/Roboto-BoldItalic.ttf'),
    'Roboto-Italic': require('./assets/font/Roboto-Italic.ttf'),
    'Roboto-Light': require('./assets/font/Roboto-Light.ttf'),
    'Roboto-LightItalic': require('./assets/font/Roboto-LightItalic.ttf'),
    'Roboto-Medium': require('./assets/font/Roboto-Medium.ttf'),
    'Roboto-MediumItalic': require('./assets/font/Roboto-MediumItalic.ttf'),
    'Roboto-Regular': require('./assets/font/Roboto-Regular.ttf'),
    'Roboto-Thin': require('./assets/font/Roboto-Thin.ttf'),
    'Roboto-ThinItalic': require('./assets/font/Roboto-ThinItalic.ttf'),
  })
  if (!fontsLoaded){
    return null;
  }
  return (
    
      <NavigationContainer>
        <StackScreen/>
      </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
