// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BottomNavigator from './src/components/BottomNavigator';
import DetailPage from './src/pages/DetailPage';
import SplashScreen from './src/pages/SplashScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Use a Screen component for SplashScreen */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="KatolikoApp" 
          component={BottomNavigator} 
          options={{ 
            headerTitle: 'Katoliko App',
          }}  
        />
        <Stack.Screen 
          name="DetailPage" 
          component={DetailPage} 
          options={{ 
            headerTitle: 'Nilalaman',
          }} 
        />
        {/* Add more screens if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
