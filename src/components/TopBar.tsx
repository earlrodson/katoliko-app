import * as React from 'react';
import { Appbar } from 'react-native-paper';

const TopBar = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="Title" />
  </Appbar.Header>
);

export default TopBar;