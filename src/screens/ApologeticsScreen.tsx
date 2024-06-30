import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';

const ApologeticsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Apologetics" />
      </Appbar.Header>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <View style={styles.content}>
        <Text>ApologeticsScreen Screen</Text>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ApologeticsScreen;
