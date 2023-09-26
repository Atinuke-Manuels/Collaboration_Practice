import { View, Text, TouchableOpacity, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Back from './Options/Back'

import useMathCounter from "use-math-counter"; // Import your custom hook

function Counter() {
  const customHook = useMathCounter(0);
  const navigation = useNavigation();


 return (
  <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Back onPress={() => navigation.navigate("Options")} />
    {/* You could also access the counter value */}
    <View style={{display: 'flex', flexDirection: 'column', gap: 3}}>
      <Text>Value: {customHook.value}</Text>
      <Button onPress={() => customHook.increment(1)} title = "Increment by 1" color={"green"}/>
      <Button onPress={() => customHook.decrement(1)} title = "Decrement by 1" color={"red"}/>
      <Button onPress={() => customHook.increment(5)} title = "Add 5" color={"green"}/>
      <Button onPress={() => customHook.decrement(5)} title = "Subtract 5" color={"red"}/>
      <Button onPress={() => customHook.multiply(2)} title = "Multiply by 2" color={"purple"}/>
      <Button onPress={() => customHook.divide(2)} title = "Divide by 2" color={"orange"}/>
      <Button onPress={() => customHook.reset(0)} title = "Reset" color={"black"}/>
    </View>
  </SafeAreaView>
);
 }


export default Counter