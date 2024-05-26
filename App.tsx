import 'react-native-get-random-values';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StackNavigator } from './src/navigation/StackNavigator';
import { Color } from './constants/Colors';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
