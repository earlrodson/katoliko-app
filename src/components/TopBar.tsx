import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Appbar, Text } from 'react-native-paper';
import { selectStatePage } from '../redux/selector/selectPage';

const TopBar = (props: any) => {
  const { setSelectedLanguage, selectedLanguage, backToPage, selectStateLanguages = [] } = props;

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
  }

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => backToPage()} />
      <Appbar.Content title={selectStatePage.title} />


      {/* Language Buttons */}
      <View style={styles.languageButtonsContainer}>
        {selectStateLanguages.map(language => (
          <TouchableOpacity
            key={language}
            style={[
              styles.languageButton,
              selectedLanguage === language && styles.selectedButton,
            ]}
            onPress={() => changeLanguage(language)}
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
