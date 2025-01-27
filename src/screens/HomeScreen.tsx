import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { Appbar, Card } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlashList } from '@shopify/flash-list';
import { RootStackParamList } from '../navigationTypes';
import convert from 'xml-js';
import * as fs from 'fs';
import RenderHTML from 'react-native-render-html';

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

interface XMLData {
  rss: {
    channel: {
      lastBuildDate: string;
      language: string;
      description: string;
      item: NewsItem[];
    };
  };
}

interface Description {
  _cdata: string;
}

interface GuidAttributes {
  isPermaLink: string;
}

interface Guid {
  _attributes: GuidAttributes;
  _text: string;
}

interface Link {
  _text: string;
}

interface MediaContentAttributes {
  height: string;
  medium: string;
  type: string;
  url: string;
  width: string;
}

interface MediaContent {
  _attributes: MediaContentAttributes;
}

interface PubDate {
  _text: string;
}

interface Title {
  _cdata: string;
}

interface NewsItem {
  description: Description;
  guid: Guid;
  link: Link;
  "media:content": MediaContent;
  pubDate: PubDate;
  title: Title;
}

interface News {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  media: string;
}

const fetchVaticanNews = async () => {
  const feedUrl = 'https://www.vaticannews.va/en.rss.xml';

  try {
    const response = await fetch(feedUrl);

    if (!response.ok) throw new Error('Network response was not ok');
    const text = await response.text();
    const result = convert.xml2js(text, { compact: true }) as XMLData;


    if (!result || !result.rss || !result.rss.channel || !result.rss.channel.item) {
      throw new Error('Invalid RSS feed structure');
    }

    
    var resultJson: XMLData = {
      rss: {
        channel: {
          lastBuildDate: '',
          language: '',
          description: '',
          item: [],
        }
      }
    };

    const newsItems = result.rss.channel.item.map((item) => ({
      title: item.title._cdata || 'No title available',
      description: item.description._cdata || 'No description available',
      link: item.link._text || 'No link available',
      pubDate: item.pubDate._text || 'No date available',
      media: item['media:content']._attributes.url
    }));

    return newsItems;
  } catch (err) {
    console.error('Error fetching or parsing RSS feed:', err);
    return []; // Return empty array on error
  }
};


const TodaySlideScreen = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetchVaticanNews().then((newsItems) => {
      console.log('News items:', newsItems[0]);
      
      setNews(newsItems);
    });
  }, []);


  const renderItem = ({ item } : {item: News} ) => {
    return (
    <View style={styles.itemContainer}>
      <View style={styles.textContent}>
        <Text style={styles.title}>{item.title}</Text>
        <RenderHTML contentWidth={100} source={{ html: item.description }} />
      </View>
      <Image source={{ uri: item.media }} style={styles.image} />
    </View>
  )};

  return (
    <FlashList
      data={news}
      renderItem={renderItem}
      estimatedItemSize={120}
      contentContainerStyle={styles.flashListContent}
    />
  )
};

const Connect = () => {
  const renderItem = ({ item } : any ) => {
    return (
    <View style={styles.itemContainer}>
      <View style={styles.textContent}>
        <Text style={styles.title}>{item.title}</Text>
        <RenderHTML contentWidth={100} source={{ html: item.description }} />
      </View>
      <Image source={item.media} style={styles.image} />
    </View>
  )};

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      estimatedItemSize={120}
      contentContainerStyle={styles.flashListContent}
    />
)};

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
