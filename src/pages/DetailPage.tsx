// DetailPage.js
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';

const DetailPage = ({ route }) => {
    const { item } = route.params;
    
  return (
    <ImageBackground source={item.image} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>{item.content}</Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with 0.9 opacity
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Roboto',
    color: '#333',
  },
});

export default DetailPage;
