import { StyleSheet, Text, View,TouchableOpacity, SafeAreaView, Dimensions, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import OptionsComponent from './OptionsComponent'
import Color from '../../assets/Color'
import Back from './Back';

const {width, height} = Dimensions.get('screen');

const Options = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, display: 'flex', flexDirection: 'row', gap: 5, flexWrap: 'wrap', marginHorizontal: 8, marginVertical: 12, width: width, height: height}}>
      <OptionsComponent
        label={"Need a \n volunteer?" }
        color={Color.white}
        fontSize={28}
        textAlign={"center"}
        backgroundColor={Color.blue}
        onPress={()=> navigation.navigate("")}
      />
      <OptionsComponent
        label={"Hire an \nIntern"}
        color={Color.white}
        fontSize={28}
        textAlign={"center"}
        backgroundColor={Color.red}
        onPress={()=> navigation.navigate("NumberScreen")}
      />
    <OptionsComponent
        label={"SignUp \n as an \n Intern."}
        color={Color.white}
        fontSize={28}
        textAlign={"center"}
        backgroundColor={Color.red}
        onPress={()=> navigation.navigate("")}
      />
    <OptionsComponent
        label={"SignUp \n as a \n volunteer."}
        color={Color.white}
        fontSize={28}
        textAlign={"center"}
        backgroundColor={Color.blue}
        onPress={()=> navigation.navigate("")}
      />
      <Back
        onPress={() => navigation.navigate("Home Screen")}
      />
    </SafeAreaView>
  )
}

export default Options

const styles = StyleSheet.create({
})