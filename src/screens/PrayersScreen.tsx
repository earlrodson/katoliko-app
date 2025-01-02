import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';

const PrayersScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  interface PrayerData {
    id: number;
    text: string;
  }

  const prayersList = [
    {
      id:1, 
      text: "Common Prayers"
    },
    {
      id: 2,
      text: "Devotional Prayers"
    }
  ]
  
  const renderItem = ({ item }: { item: PrayerData }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Prayers" />
      </Appbar.Header>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <View style={styles.container}>
        <FlatList
            data={prayersList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContent} // Corrected style here
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  listContainer: {
    flex: 1, // This is for the wrapping View to take up the available space
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContent: {
    paddingBottom: 20, // You can modify this based on your needs
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default PrayersScreen;
