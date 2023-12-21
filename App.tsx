// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import BottomNavigator from './src/components/BottomNavigator';
import PrayerDetailPage from './src/pages/prayer/PrayerDetailPage';
import SplashScreen from './src/pages/SplashScreen';
import KatekismoDetailPage from './src/pages/katekismo/KatekismoDetailPage';
import KatekismoSublistPage from './src/pages/katekismo/KatekismoSublistPage';
import PrayerSublistPage from './src/pages/prayer/PrayerSublistPage';
import TopBar from './src/components/TopBar';
import { selectStateCurrentPrayerLanguage } from './src/redux/selector/selectLanguages';
import FABandDrawer from './src/components/FABandDrawer';

const Stack = createStackNavigator();
const App = () => {
  const [pageTitle, setPageTitle] = useState('Nilalaman');
  const [selectedLanguage, setSelectedLanguage] = useState('tag'); // Default language
  const [title, setTitle] = useState('Page'); // Default language

  const [active, setActive] = React.useState('');
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const [isSplash, setIsSplash] = useState(true);
  useEffect(() => {
    // Simulate a delay for the splash screen (e.g., 2 seconds)
    setTimeout(() => {
      // Navigate to your main screen (e.g., BottomNavigator)
      setIsSplash(false);
    }, 2500);
  }, []);
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: ({ scene, previous, navigation, setSelectedLanguage }) => (
              <TopBar
                scene={scene}
                navigation={navigation}
                title={title}
                setSelectedLanguage={setSelectedLanguage}
              />
            ),
          }}
        >
          {/* Use a Screen component for SplashScreen */}
          {isSplash &&
            <Stack.Screen name="SplashScreen" component={SplashScreen}
              options={() => ({
                headerTitle: null, // Hide the header title
                headerLeft: null,  // Disable the back button
                headerShown: false, // Hide the entire header
              })}
            />
          }
          <Stack.Screen name="KatolikoApp"
            component={BottomNavigator}
            options={{
              headerTitle: pageTitle,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PrayerDetailPage"
            component={PrayerDetailPage}
            initialParams={{ selectedLanguage, title }}
            options={{
              headerTitle: 'Nilalaman',
            }}
          />
          <Stack.Screen
            name="PrayerSublistPage"
            component={PrayerSublistPage}
            options={{
              headerTitle: pageTitle,
            }}
          />
          <Stack.Screen
            name="KatekismoSublistPage"
            component={KatekismoSublistPage}
            initialParams={{ selectedLanguage, title }}
            options={{
              headerTitle: pageTitle,
            }}
          />
          <Stack.Screen
            name="KatekismoDetailPage"
            component={KatekismoDetailPage}
            initialParams={{ selectedLanguage, title }}
            options={{
              headerTitle: pageTitle,
            }}
          />
          {/* Add more screens if needed */}
        </Stack.Navigator>
      </NavigationContainer>
      {!isSplash &&
          <FABandDrawer />
      }
    </>
  );
};

export default App;
