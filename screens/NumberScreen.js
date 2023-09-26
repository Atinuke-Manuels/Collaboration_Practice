import { SafeAreaView, StyleSheet, Text, Image,View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import useMathCounter from "use-math-counter";

const NumberScreen = () => {
    const customHook = useMathCounter (0);
    // const [count, setCount] = useState(1)

    // const incrementCount = () => {
    //     setCount(count + 1)
    // }

    // const decrementCount = () => {
    //    if (count > 0) {
    //     setCount(count - 1)
    //    }
    // }

          if (customHook.value > 0) {
        customHook.decrement(customHook.value - 1)
       }
  return (
    <SafeAreaView style ={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <View style ={{flexDirection:"row"}}>
            <TouchableOpacity onPress={() => customHook.decrement (1)}> 
                 <Image source={require("../assets/images/minus.png")} style={{width:20, height:20}}/>
            </TouchableOpacity>
            <Text style={{marginRight:15, marginLeft:15}}> {customHook.value} </Text>

            <TouchableOpacity onPress={() => customHook.increment(1)}>
                 <Image source={require("../assets/images/plus.png")} style={{width:20, height:20}}/>
            </TouchableOpacity>
        </View>
        {/* <div>
        <p>Value: {customHook.value}</p>
      <button onClick={() => customHook.increment()}>Increment by 1</button>        
      </div> */}
    </SafeAreaView>
  )
}

export default NumberScreen

const styles = StyleSheet.create({})