import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Appbar, Card } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlashList } from '@shopify/flash-list';
import { RootStackParamList } from '../navigationTypes';

const Tab = createMaterialTopTabNavigator();

const data = [
  { 
    id: '1', 
    title: 'Pope Francis Visits Refugee Camp', 
    content: 'Pope Francis visited a refugee camp in <Location> and urged the world to show compassion and solidarity towards refugees.', 
    date: '2024-06-01',
    image: require('../../assets/uploads/Barcelona_Iglesia_Sagrada_Familia_02.jpg') // Example image path, replace with actual image path
  },
  { 
    id: '2', 
    title: 'New Encyclical Released: "Fratelli Tutti"', 
    content: 'Pope Francis released a new encyclical titled "Fratelli Tutti" (Brothers All), emphasizing the importance of fraternity and social friendship.', 
    date: '2024-05-25',
    image: require('../../assets/uploads/Barcelona_Iglesia_Sagrada_Familia_02.jpg') // Example image path, replace with actual image path
  },
  { 
    id: '2', 
    title: 'New Encyclical Released: "Fratelli Tutti"', 
    content: 'Pope Francis released a new encyclical titled "Fratelli Tutti" (Brothers All), emphasizing the importance of fraternity and social friendship.', 
    date: '2024-05-25',
    image: require('../../assets/uploads/Barcelona_Iglesia_Sagrada_Familia_02.jpg') // Example image path, replace with actual image path
  },
  { 
    id: '2', 
    title: 'New Encyclical Released: "Fratelli Tutti"', 
    content: 'Pope Francis released a new encyclical titled "Fratelli Tutti" (Brothers All), emphasizing the importance of fraternity and social friendship.', 
    date: '2024-05-25',
    image: require('../../assets/uploads/Barcelona_Iglesia_Sagrada_Familia_02.jpg') // Example image path, replace with actual image path
  },
  { 
    id: '2', 
    title: 'New Encyclical Released: "Fratelli Tutti"', 
    content: 'Pope Francis released a new encyclical titled "Fratelli Tutti" (Brothers All), emphasizing the importance of fraternity and social friendship.', 
    date: '2024-05-25',
    image: require('../../assets/uploads/Barcelona_Iglesia_Sagrada_Familia_02.jpg') // Example image path, replace with actual image path
  },
  { 
    id: '2', 
    title: 'New Encyclical Released: "Fratelli Tutti"', 
    content: 'Pope Francis released a new encyclical titled "Fratelli Tutti" (Brothers All), emphasizing the importance of fraternity and social friendship.', 
    date: '2024-05-25',
    image: require('../../assets/uploads/Barcelona_Iglesia_Sagrada_Familia_02.jpg') // Example image path, replace with actual image path
  },
  { 
    id: '2', 
    title: 'New Encyclical Released: "Fratelli Tutti"', 
    content: 'Pope Francis released a new encyclical titled "Fratelli Tutti" (Brothers All), emphasizing the importance of fraternity and social friendship.', 
    date: '2024-05-25',
    image: require('../../assets/uploads/Barcelona_Iglesia_Sagrada_Familia_02.jpg') // Example image path, replace with actual image path
  },
  // Add more entries as needed
];

const renderItem = ({ item } : any ) => (
  <View style={styles.itemContainer}>
    <View style={styles.textContent}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.content}</Text>
    </View>
    <Image source={item.image} style={styles.image} />
  </View>
);

const TodaySlideScreen = () => (
  <FlashList
    data={data}
    renderItem={renderItem}
    estimatedItemSize={120}
    contentContainerStyle={styles.flashListContent}
  />
);

const Connect = () => (
  <FlashList
    data={data}
    renderItem={renderItem}
    estimatedItemSize={120}
    contentContainerStyle={styles.flashListContent}
  />
);

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#7900ff',
      tabBarIndicatorStyle: {
        backgroundColor: '#7900ff',
        height: 3,
      },
      tabBarStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      },
    }}>
    <Tab.Screen name="Today" component={TodaySlideScreen} options={{ tabBarLabel: 'Today' }} />
    <Tab.Screen name="Connect" component={Connect} options={{ tabBarLabel: 'Connect' }} />
  </Tab.Navigator>
);

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
        <Appbar.Action icon="account-circle" onPress={() => navigation.navigate('Profile')} />
      </Appbar.Header>
      <HomeTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flashListContent: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  textContent: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default HomeScreen;
