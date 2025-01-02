// src/navigation/BottomTabsNavigator.tsx

import React, { Suspense } from 'react';
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
import CatechismScreen from '../screens/CatechismScreen';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();
// Function to load CatechismScreen dynamically with Suspense
const LazyCatechismScreen = React.lazy(() => import('../screens/CatechismScreen'));

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Catechism">
        {() => (
          <Suspense fallback={<LoadingIndicator />}>
            <CatechismScreen />
          </Suspense>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function MoreStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MoreScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Catechism">
        {() => (
          <Suspense fallback={<LoadingIndicator />}>
            <CatechismScreen />
          </Suspense>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}



const LoadingIndicator = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" />
  </View>
);


function BottomTabsNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeTab"
        activeColor="#7900ff"
        inactiveColor="#baaacc"
        activeIndicatorStyle={{ backgroundColor: 'transparent' }}
        barStyle={{ backgroundColor: '#f8f8f8' }}
        shifting={false} 
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
                style={{ backgroundColor: 'transparent' }}
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
                style={{ backgroundColor: 'transparent' }}
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
                style={{ backgroundColor: 'transparent' }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreStackNavigator}
          options={{
            tabBarLabel: 'More',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="menu"
                color={color}
                size={26}
                style={{ backgroundColor: 'transparent' }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabsNavigator;
