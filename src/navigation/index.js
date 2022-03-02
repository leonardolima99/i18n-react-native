import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

import Home from '../screens/Home';
import Language from '../screens/Language';

const AppNavigation = () => {
  const {t} = useTranslation('navigation');

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: {display: 'none'},
        tabBarStyle: {paddingBottom: 15},
      }}>
      <Tab.Screen name={t('home')} component={Home} />
      <Tab.Screen name={t('language')} component={Language} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
