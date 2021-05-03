import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AppRoute } from './AppRoute';
import TermsScreen from '../screens/TermsScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen name={AppRoute.TERMS_SCREEN} component={TermsScreen} /> 
       <Stack.Screen name={AppRoute.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
}