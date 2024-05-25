import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabsNavigator } from './TabsNavigator';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabs"
        component={TabsNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
