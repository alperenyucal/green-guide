import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

import { NewChatButton } from '@/components/NewChatButton';
import { TabsParamList } from '../types/TabsParamList';
import { DashboardScreen } from '../screens/DashboardScreen';
import { MapScreen } from '../screens/MapScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { GoalsScreen } from '../screens/GoalsScreen';

export const Tab = createBottomTabNavigator<TabsParamList>();

interface TabNavigatorProps {
  options?: BottomTabNavigationOptions;
}

export function TabsNavigator(props: TabNavigatorProps) {
  return (
    <Tab.Navigator
      {...props.options}
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'globe' : 'globe-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="goals"
        component={GoalsScreen}
        options={{
          headerShown: true,
          title: 'Goals & Achievements',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'planet' : 'planet-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="map"
        component={MapScreen}
        options={{
          headerShown: true,
          title: 'Nearby Places',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'map' : 'map-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={ChatScreen}
        options={{
          headerShown: true,
          title: 'GiGi Assistant',
          headerRight: () => <NewChatButton />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'chatbox' : 'chatbox-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
