import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { RootStackParamList, MainTabParamList } from './types';
import { lightTheme, darkTheme, palette } from '../theme';

// Screens
import CalendarScreen from '../screens/CalendarScreen';
import FollowingScreen from '../screens/FollowingScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import OrganizerProfileScreen from '../screens/OrganizerProfileScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDarkMode ? palette.surfaceDark : palette.surface,
          borderTopColor: isDarkMode ? palette.dividerDark : palette.divider,
        },
        tabBarActiveTintColor: isDarkMode ? palette.primaryDark : palette.primary,
        tabBarInactiveTintColor: isDarkMode ? palette.textSecondaryDark : palette.textSecondary,
        headerStyle: {
          backgroundColor: isDarkMode ? palette.surfaceDark : palette.surface,
        },
        headerTintColor: isDarkMode ? palette.textDark : palette.text,
      }}
    >
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar-today" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Following"
        component={FollowingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="people" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: isDarkMode ? palette.surfaceDark : palette.surface,
          },
          headerTintColor: isDarkMode ? palette.textDark : palette.text,
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventDetails"
          component={EventDetailsScreen}
          options={{ title: 'Event Details' }}
        />
        <Stack.Screen
          name="OrganizerProfile"
          component={OrganizerProfileScreen}
          options={{ title: 'Organizer Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 