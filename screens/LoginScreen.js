import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TextInput } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const LoginScreen = () => {
  return (
    <SafeAreaView style={tw`bg-red-300 h-full`}>
       <Text style={[tw`text-blue-600 text-center p-10`, styles.text]}>Smart~Intern</Text>
        <View style={styles.container}>
            <Text style={[tw`text-blue-300 h-1/2 items-center justify-center`]}>Log in to SmartTechIntern</Text>

        </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
        container:{
            height:height*0.45, 
            width:width*0.95,
            backgroundColor: '#FFFFFF', 
            alignSelf: 'center', 
            borderRadius: 10, 
            marginTop: -20
        },
    text:{
        fontFamily: 'Roboto-Bold',
        fontSize:35
    }
})