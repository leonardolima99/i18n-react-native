import React, {Suspense} from 'react';
import {ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './navigation';
import './locales';

const App = () => {
  return (
    <NavigationContainer>
      <Suspense fallback={<ActivityIndicator />}>
        <AppNavigation />
      </Suspense>
    </NavigationContainer>
  );
};

export default App;
