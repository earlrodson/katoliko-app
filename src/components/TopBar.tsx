import React, { useState } from 'react';
import { Appbar, Menu, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TopBar = ({ title, selectedLanguage, setSelectedLanguage, uniqueLanguages = ['tag'] }) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => { navigation.goBack(); }} />
      <Appbar.Content title={title} />


      {/* Language Buttons */}
      <View style={styles.languageButtonsContainer}>
        {uniqueLanguages.map(language => (
          <TouchableOpacity
            key={language}
            style={[
              styles.languageButton,
              selectedLanguage === language && styles.selectedButton,
            ]}
            onPress={() => setSelectedLanguage(language)}
          >
            <Text>{language.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  languageButtonsContainer: {
    position: 'absolute',
    right: 20,
    flexDirection: 'row',
  },
  languageButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 2, // Set a default border bottom width
    borderBottomColor: 'transparent', // Initially, set border bottom color to transparent
    color: 'white', // Set the text color to white
  },
  selectedButton: {
    borderBottomColor: 'white', // Set border bottom color to white for selected button
    color: 'white',
  },
});

export default TopBar;
