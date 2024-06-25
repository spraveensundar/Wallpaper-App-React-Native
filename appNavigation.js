import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';




const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
      <Stack.Navigator initialRouteName='Welcome'  screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home"  options={{headerShown:false}} component={HomeScreen}/>
        <Stack.Screen name='Welcome' options={{headerShown:false}} component={WelcomeScreen}/>
       
      </Stack.Navigator>
  );
}

export default AppNavigation;