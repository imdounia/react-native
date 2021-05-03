import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, TermsScreen } from '../screens';
import { AppRoute } from './AppRoute';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen {AppRoute.TERMS_SCREEN} component={TermsScreen} /> 
      <Stack.Screen name={AppRoute.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
}