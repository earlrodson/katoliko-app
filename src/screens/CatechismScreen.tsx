import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker'; // Correct import
import catechismData from '../../assets/data/catechism.json'; // Adjust the path as necessary

const CatechismScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchType, setSearchType] = React.useState('number'); // Default to search by CCC number

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const onSearchTypeChange = (value: string) => setSearchType(value);

  interface CatechismData {
    id: number;
    text: string;
  }

  const filterData = () => {
    if (!searchQuery) return catechismData; // If no search query, return all data

    // Split search query into multiple keywords
    const keywords = searchQuery.toLowerCase().split(' ');

    if (searchType === 'number') {
      // Search by CCC number (id)
      const filteredById = catechismData.filter(
        (item) => keywords.some((keyword) => item.id.toString().includes(keyword))
      );
      return filteredById;
    } else if (searchType === 'keywords') {
      // Search by content (text)
      const filteredByText = catechismData.filter(
        (item) =>
          keywords.some((keyword) => item.text.toLowerCase().includes(keyword))
      );
      return filteredByText;
    }

    return catechismData;
  };

  const renderItem = ({ item }: { item: CatechismData }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        <Text style={{ fontWeight: 'bold' }}>{item.id}</Text> {item.text}
      </Text>
    </View>
  );

  const filteredData = filterData();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Catechism of the Catholic Church" />
      </Appbar.Header>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
        <Picker
          selectedValue={searchType}
          onValueChange={onSearchTypeChange}
          style={styles.picker}
        >
          <Picker.Item label="Search by CCC #" value="number" />
          <Picker.Item label="Search by Keywords" value="keywords" />
        </Picker>
      </View>
      <View style={styles.listContainer}>
        {filteredData.length === 0 ? (
          <Text style={styles.noResults}>No results found</Text>
        ) : (
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContent}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    margin: 10,
  },
  searchBar: {
    marginBottom: 10,
  },
  picker: {
    marginBottom: 20,
    height: 40,
    width: '100%',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContent: {
    paddingBottom: 20,
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
  noResults: {
    fontSize: 18,
    color: 'gray',
  },
});

export default CatechismScreen;
