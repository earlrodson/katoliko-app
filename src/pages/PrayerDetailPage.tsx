import { isArray } from 'lodash';
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';

const PrayerDetailPage = ({ route }) => {
  const [content, setContent] = useState('');
  const { item, selectedLanguage, title, setUniqueLanguages} = route.params;
  const { width } = useWindowDimensions();
  console.log('selectedLanguage',selectedLanguage);
  useEffect(() => {
    if(isArray(item.content)) {
      const uniqueLanguages = item.content.map(e => e.lang);
      setUniqueLanguages(uniqueLanguages);
  
      const selectedContent = item.content.find(langItem => langItem.lang === selectedLanguage);
      setContent(selectedContent.content);
      console.log('item-xxx',uniqueLanguages);
      
    }
    else {
      setContent(item.content);
    }
  }, [])

  useEffect(()=>{
    console.log('x');
    
  },[selectedLanguage])
  

  return (
    <ImageBackground source={item.image} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>{item.name}</Text>
        <HTML source={{ html: content }} contentWidth={width} />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Roboto',
    color: '#333',
  },
  languageButtonsContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
  },
  languageButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: '#333',
    color: 'white',
  },
});

export default PrayerDetailPage;
