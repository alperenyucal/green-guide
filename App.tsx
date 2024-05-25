import 'react-native-get-random-values';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { Color } from './constants/Colors';

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          text: Color.white,
          background: Color.white,
          primary: Color.white,
          card: Color.green,
          border: Color.green,
          notification: Color.white,
        },
        dark: false,
      }}>
      <StackNavigator />
    </NavigationContainer>
  );
}
