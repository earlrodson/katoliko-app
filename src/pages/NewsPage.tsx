// NewsPage.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Avatar } from 'react-native-paper';

const newsItems = [
  {
    id: 1,
    title: 'New Feature Released',
    description: 'We have released an exciting new feature! Check it out now.',
    date: '2024-03-01',
  },
  {
    id: 2,
    title: 'Upcoming Event',
    description: 'Join us for the upcoming event on 2024-03-15. Save the date!',
    date: '2024-03-10',
  },
  // Add more news items as needed
];

const NewsPage = () => {
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>News and Updates</List.Subheader>
        {newsItems.map((item) => (
          <List.Item
            key={item.id}
            title={item.title}
            description={item.description}
            left={() => <Avatar.Icon icon="newspaper" />}
            onPress={() => {
              // Handle item press (navigate to details or perform action)
              console.log(`Pressed on news item: ${item.title}`);
            }}
          />
        ))}
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default NewsPage;
