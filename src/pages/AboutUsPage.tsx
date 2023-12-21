import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';
import { useDispatch } from 'react-redux';
import { isArray, isUndefined } from 'lodash';

const AboutUsPage = (props: any) => {
  const { item, selectedLanguage, setselectStateLanguages, setSelectedLanguage } = props;
  const { width, height } = useWindowDimensions(); // Get the height of the screen

  return (
    // <ImageBackground source={'item.image'} style={styles.background}>
      <View style={{ padding: 10, paddingBottom: 100, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <ScrollView
          contentContainerStyle={{ minHeight: height }} // Ensure that the content is at least the height of the screen
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.text}>About Us</Text>
          <Text>About Us content</Text>
        </ScrollView>
      </View>
    // </ImageBackground >
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

export default AboutUsPage;
