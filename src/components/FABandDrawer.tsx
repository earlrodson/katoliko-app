import React, { useRef, useState } from 'react';
import { Button, DrawerLayoutAndroid, StyleSheet, View } from 'react-native';
import { FAB, Drawer, Text } from 'react-native-paper';


const styles2 = {
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 55,
    zIndex: 1000, // Set the z-index to 1000
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

const FABandDrawer = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>(
    'left',
  );
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  return (
    <>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
          <View style={styles.container}>
            <FAB
              style={styles2.fab}
              small
              icon="information"
              label=""
              onPress={() => drawer.current?.openDrawer()}
            />
          </View> 
        </DrawerLayoutAndroid>  
    </>
  );
};

export default FABandDrawer;
