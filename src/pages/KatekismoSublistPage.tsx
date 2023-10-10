// DetailPage.js
import React, { useEffect } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';
import { FlatList, View } from "react-native";
import { Divider, List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import KatekismoDetailPage from './KatekismoDetailPage';

const KatekismoSublistPage = ({ route }) => {
    const navigation = useNavigation();

    const { item, title} = route.params;
    useEffect(() => {
      // setUniqueLanguages(['eng']);
      // setSelectedLanguage('eng');
    }, [])


    const handleItemClick = (item: any) => {
      const isList = Array.isArray(item.content) && item.content.length > 0;
      navigation.navigate(isList ? 'KatekismoSublistPage' : 'KatekismoDetailPage', { item });
    };
        
    const renderItem = ({ item }: { item: { name: string } }) => (
      <>
        <List.Item
            title={item.name}
            onPress={() => handleItemClick(item)}
        />
        <Divider />
      </>
    );
    
  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={item.content}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
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

export default KatekismoSublistPage;
