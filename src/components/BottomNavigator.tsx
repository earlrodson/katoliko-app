import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import KatekismoPage from '../pages/KatekismoPage';
import PrayerPage from '../pages/PrayersPage';
import MotherMaryPage from '../pages/MotherMaryPage';

const BottomNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'prayers', title: 'Dasal', focusedIcon: 'hands-pray', unfocusedIcon: 'hands-pray' },
    { key: 'motherMary', customIcon: require('../assets/FinalKAicon.png') },
    { key: 'katekismo', title: 'Katekismo', focusedIcon: 'book-multiple', unfocusedIcon: 'book-multiple-outline' },
    // { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    // { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    prayers: PrayerPage,
    motherMary: MotherMaryPage, // You can specify the same page as for "motherMary"
    katekismo: KatekismoPage,
    // recents: RecentsRoute,
    // notifications: NotificationsRoute,
  });

  const goBack = () => {
    // navigation.goBack();
    alert(1);
  };

  return (
    <View style={{ flex: 1 }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        labeled={true} // Optional, depending on your design
        barStyle={{ backgroundColor: 'white' }} // Optional, depending on your design
        activeColor="#007AFF" // Optional, depending on your design
        inactiveColor="#999" // Optional, depending on your design
        shifting={false} // Optional, depending on your design
        compact={true}
        sceneAnimationEnabled={true} // Optional, depending on your design
        renderIcon={({ route, focused, color }) => {
          if (route.key === 'motherMary') {
            // If the route is "motherMary," render the custom logo and hide the label
            return (
              <View style={styles.customIconContainer}>
                <Image
                  source={route.customIcon}
                  style={[styles.customIcon, { tintColor: color }]}
                />
                <Text style={[styles.customIconText, { color: focused ? '#0097a7' : '#455a64' }]}>
                  {route.title}
                </Text>
              </View>
            );
          } else {
            // Render the MaterialCommunityIcons for other routes
            return (
              <Icon name={focused ? route.focusedIcon ? route.focusedIcon?.toString() : 'cross' : route.unfocusedIcon ? route.unfocusedIcon?.toString() : 'cross'} size={focused ? 24 : 20} color={focused ? '#0097a7' : '#455a64'} />
            );
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  customIconContainer: {
    alignItems: 'center', // Center vertically
  },
  customIcon: {
    width: 32, // Adjust the size as needed
    height: 32, // Adjust the size as needed
  },
  customIconText: {
    fontSize: 12, // Adjust the font size as needed
  },
});

export default BottomNavigator;
