// src/navigation/BottomTabsNavigator.tsx

import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { RootStackParamList } from '../navigationTypes';
import PrayersScreen from '../screens/PrayersScreen';
import ApologeticsScreen from '../screens/ApologeticsScreen';
import MoreScreen from '../screens/MoreScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function BottomTabsNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeTab"
        activeColor="#7900ff"
        inactiveColor="#baaacc"
        barStyle={{ backgroundColor: '#f8f8f8' }}
        shifting={false} // Ensure shifting is disabled
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackNavigator}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={26}
                style={{ backgroundColor: focused ? 'transparent' : 'transparent' }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="PrayersTab"
          component={PrayersScreen}
          options={{
            tabBarLabel: 'Prayers',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="hands-pray"
                color={color}
                size={26}
                style={{ backgroundColor: focused ? 'transparent' : 'transparent' }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Apologetics"
          component={ApologeticsScreen}
          options={{
            tabBarLabel: 'Apologetics',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="shield-cross-outline"
                color={color}
                size={26}
                style={{ backgroundColor: focused ? 'transparent' : 'transparent' }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            tabBarLabel: 'More',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="menu"
                color={color}
                size={26}
                style={{ backgroundColor: focused ? 'transparent' : 'transparent' }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabsNavigator;
