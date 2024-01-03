import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='home'>
        <Stack.Screen name="home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;