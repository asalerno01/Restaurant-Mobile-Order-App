import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useFonts } from 'expo-font';
import Menu from './components/menu/Menu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontLoaded] = useFonts({
        'Lato Black': require('./assets/fonts/Lato-Black.ttf'),
        'Lato': require('./assets/fonts/Lato-Regular.ttf'),
        'Lato Thin': require('./assets/fonts/Lato-Thin.ttf'),
    });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={Menu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}