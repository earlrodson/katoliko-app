import React from 'react';
import { ScrollView, View, StyleSheet, Button } from 'react-native';
import { Card, Title, Paragraph, IconButton, Appbar, Avatar, Menu, Drawer } from 'react-native-paper';

const HomePage = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const [menuVisible, setMenuVisible] = React.useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuPress = (item) => {
    // Handle menu item press
    console.log(`Pressed on menu item: ${item}`);
    setMenuVisible(false);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const renderCard = () => {
    return (
      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://example.com/image.jpg' }} />
        <Card.Content>
          <Title>Card Title</Title>
          <Paragraph>Card content goes here.</Paragraph>
          <View style={styles.buttonContainer}>
            <IconButton icon="heart-outline" onPress={() => console.log('Favorite pressed')} />
            <IconButton icon="share" onPress={() => console.log('Share pressed')} />
          </View>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={handleToggleDrawer} />
        <Appbar.Content title="Home" />
        <View style={styles.avatarContainer}>
          <Avatar.Icon icon="account-circle" size={40} onPress={handleToggleMenu} />
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={<Avatar.Icon icon="account-circle" />}
          >
            <Menu.Item onPress={() => handleMenuPress('Profile')} title="Profile" />
            <Menu.Item onPress={() => handleMenuPress('Logout')} title="Logout" />
          </Menu>
        </View>
      </Appbar.Header>


      <Drawer.Section title="Some title">
        <Drawer.Item
          label="First Item"
          active={active === 'first'}
          onPress={() => setActive('first')}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
          onPress={() => setActive('second')}
        />
      </Drawer.Section>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {[...Array(4)].map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {[...Array(3)].map((_, colIndex) => (
              <View key={colIndex} style={styles.column}>
                {renderCard()}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  column: {
    flex: 1,
    marginRight: 8,
  },
  card: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerContent: {
    flex: 1,
  },
});

export default HomePage;
