// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import BottomNavigator from './src/components/BottomNavigator';
import DetailPage from './src/pages/DetailPage';
import SplashScreen from './src/pages/SplashScreen';
import KatekismoDetailPage from './src/pages/KatekismoDetailPage';
import KatekismoSublistPage from './src/pages/KatekismoSublistPage';

const Stack = createStackNavigator();

const App = () => {
  const [pageTitle, setPageTitle] =useState('Nilalaman')
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Use a Screen component for SplashScreen */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="KatolikoApp" 
          component={BottomNavigator} 
          options={{ 
            headerTitle: 'Katoliko App',
            headerShown: false, 
          }}  
        />
        <Stack.Screen 
          name="DetailPage" 
          component={DetailPage} 
          options={{ 
            headerTitle: 'Nilalaman',
          }} 
        />
        <Stack.Screen 
          name="KatekismoSublistPage" 
          component={KatekismoSublistPage} 
          options={{ 
            headerTitle: pageTitle,
          }} 
        />
        <Stack.Screen 
          name="KatekismoDetailPage" 
          component={KatekismoDetailPage} 
          options={{ 
            headerTitle: pageTitle,
          }} 
        />
        {/* Add more screens if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
