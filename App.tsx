// App.tsx

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import BottomTabsNavigator from './src/navigation/BottomTabsNavigator';

export default function App() {
  return (
    <PaperProvider>
      <BottomTabsNavigator />
    </PaperProvider>
  );
}
