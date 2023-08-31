import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';

const StackScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
    </Stack.Navigator>
  )
}

export default StackScreen

const styles = StyleSheet.create({})