// DetailPage.js
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, useWindowDimensions } from 'react-native';
import ccc from '../data/ccc';
import HTML from 'react-native-render-html';

const KatekismoDetailPage = ({ route }) => {

    const { width } = useWindowDimensions();  
    const { item } = route.params;


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
    <ImageBackground source={item.image && item.image} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>{item.name}</Text>
        <HTML source={{ html: replacedMessage }} contentWidth={width} />
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
    flexGrow: 1, // Allow the container to grow to accommodate the content
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // White background with 0.9 opacity
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    lineHeight: 30,
    fontFamily: 'Roboto',
    color: '#333',
  },
});

export default KatekismoDetailPage;
