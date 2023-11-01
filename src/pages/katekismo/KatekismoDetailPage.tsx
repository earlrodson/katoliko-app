// DetailPage.js
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import ccc from '../../data/ccc';
import HTML from 'react-native-render-html';
import { isArray } from 'lodash';
import { useDispatch } from 'react-redux';

const KatekismoDetailPage = (props: any) => {
  const { item, selectedLanguage, setselectStateLanguages, setSelectedLanguage } = props;
  const { width, height } = useWindowDimensions(); // Get the height of the screen
  const dispatch = useDispatch();
  const [content, setContent] = useState('');

  useEffect(() => {
    setselectStateLanguages(['eng'])
    setSelectedLanguage('eng');
  }, []);


    // Function to replace [ccc=...] patterns with content based on cccNumber
    function replaceCCCContent(input) {
      const regex = /\[ccc=(\d+)(?:-(\d+))?\]/g;
      const replacedInput = input.content.replace(regex, (match, startRange, endRange) => {
        const contentArray = [];

        ccc.forEach(obj => {
          const sRange = parseInt(startRange);
          const eRange = endRange ? parseInt(endRange) : sRange;

          if (obj.cccNumber >= sRange && obj.cccNumber <= eRange) {
            contentArray.push(`<br /><br /><b>CCC# ${obj.cccNumber}</b> ${obj.content}`);
          }
        });

        return contentArray.join(' ');
      });
      
      return replacedInput;
    }

    
    const replacedMessage = replaceCCCContent(item);
    

  return (
    <ImageBackground source={item.image} style={styles.background}>
      <View style={{ padding: 10, paddingBottom: 100, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <ScrollView
          contentContainerStyle={{ minHeight: height }} // Ensure that the content is at least the height of the screen
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.text}>{item.name}</Text>
          <HTML source={{ html: replacedMessage }} contentWidth={width} tagsStyles={{
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

export default KatekismoDetailPage;
