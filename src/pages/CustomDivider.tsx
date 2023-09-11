import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomDivider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1, // Adjust the height of the divider as needed
    backgroundColor: '#ccc', // Adjust the color of the divider as needed
  },
});

export default CustomDivider;
