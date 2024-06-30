import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Drawer, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      <View style={styles.content}>
        <Drawer.Item
          icon={({ color, size }) => <MaterialCommunityIcons name="book-open-page-variant-outline" size={size} color={color} />}
          label="Bible"
          style={styles.menuItem}
          onPress={() => {}}
        />
        <Drawer.Item
          icon={({ color, size }) => <MaterialCommunityIcons name="book-open-variant" size={size} color={color} />}
          label="Catechism of the Catholic Church"
          style={styles.menuItem}
          onPress={() => {}}
        />
        <Drawer.Item
          icon={({ color, size }) => <MaterialCommunityIcons name="bookmark" size={size} color={color} />}
          label="Bookmarks"
          style={styles.menuItem}
          onPress={() => {}}
        />
        <Drawer.Item
          icon={({ color, size }) => <MaterialCommunityIcons name="badge-account-outline" size={size} color={color} />}
          label="Badges"
          style={styles.menuItem}
          onPress={() => {}}
        />
        <Drawer.Item
          icon={({ color, size }) => <MaterialCommunityIcons name="note-text" size={size} color={color} />}
          label="Notes"
          style={styles.menuItem}
          onPress={() => {}}
        />
        <View style={styles.divider} />
        <Drawer.Item
          icon={({ color, size }) => <MaterialCommunityIcons name="information" size={size} color={color} />}
          label="About"
          style={styles.menuItem}
          onPress={() => {}}
        />
        <Drawer.Item
          icon={({ color, size }) => <MaterialCommunityIcons name="gift" size={size} color={color} />}
          label="Give"
          style={styles.menuItem}
          onPress={() => {}}
        />
        <Drawer.Item
          icon={({ color, size }) => <MaterialCommunityIcons name="translate" size={size} color={color} />}
          label="Language"
          style={styles.menuItem}
          onPress={() => {}}
        />
        <Drawer.Item
          icon={({ color, size }) => <MaterialCommunityIcons name="help-circle" size={size} color={color} />}
          label="Help"
          style={styles.menuItem}
          onPress={() => {}}
        />
        <Drawer.Item
          icon={({ color, size }) => <MaterialCommunityIcons name="cog" size={size} color={color} />}
          label="Settings"
          style={styles.menuItem}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  menuItem: {
    marginLeft: 20,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginVertical: 10,
  },
});

export default MoreScreen;
