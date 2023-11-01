import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';
import { useDispatch } from 'react-redux';
import { setLanguages } from '../../redux/reducers/app';
import { isArray, isUndefined } from 'lodash';
import catholicPrayers from '../../data/prayers';

const PrayerDetailPage = (props: any) => {
  const { item, selectedLanguage, setselectStateLanguages, setSelectedLanguage } = props;
  const { width, height } = useWindowDimensions(); // Get the height of the screen
  const dispatch = useDispatch();
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(getContent(item));
  }, [selectedLanguage]);

  const getContent = (item: any) => {
    let content;

    if (isArray(item.content)) {
      const uniqueLanguages = item.content.map((e: { lang: any; }) => e.lang);
      let selectedLanguageLocal = selectedLanguage;

      dispatch(setLanguages(uniqueLanguages));
      setselectStateLanguages(uniqueLanguages);

      const index = uniqueLanguages.indexOf(selectedLanguage);

      if (index !== -1) {
        console.log(`Found '${selectedLanguage}' at index ${index}`);
      } else {
        setSelectedLanguage(uniqueLanguages[0])
        selectedLanguageLocal = uniqueLanguages[0];
      }

      const selectedLanguageContent = item.content.find((langItem: { lang: any; }) => langItem.lang === selectedLanguageLocal);


      content = "<p>" + replacePrayerTags(selectedLanguageContent?.content, catholicPrayers) + "</p>";
    } else {
      content = "<p>" + replacePrayerTags(item.content, catholicPrayers) + "</p>";
    }
    return content;
  }

  function replacePrayerTags(content: string, prayers: any[]) {
    return content.replace(/\[prayer-(\d+)\]/g, (match: any, id: any) => {
      const prayer = prayers.find((item: { id: string; }) => item.id === `prayer-${id}`);
      if (prayer) {
        const prayerContent = prayer.content.find((item: { lang: any; }) => item.lang === selectedLanguage);
        return prayerContent ? prayerContent.content : match;
      }
      return match;
    });
  }


  return (
    <ImageBackground source={item.image} style={styles.background}>
      <View style={{ padding: 10, paddingBottom: 100, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <ScrollView
          contentContainerStyle={{ minHeight: height }} // Ensure that the content is at least the height of the screen
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.text}>{item.name}</Text>
          <HTML source={{ html: content }} contentWidth={width} tagsStyles={{
            p: { fontSize: 18, color: '#333', lineHeight: 30, textAlign: 'center' }
          }} />
        </ScrollView>
      </View>
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  background: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Roboto',
    color: 'black',
    textAlign: 'center',
    marginVertical: 20, // Add some margin to separate the text from the content
  },
});

export default PrayerDetailPage;
