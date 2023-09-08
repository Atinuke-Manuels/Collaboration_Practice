import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TextInput } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const LoginScreen = () => {
    const navigation = useNavigation("");
  return (
    <SafeAreaView style={tw`bg-red-300 h-full`}>
       <Text style={[tw`text-blue-600 text-center p-10`, styles.text]}>Smart~Intern</Text>
        <View style={styles.container}>
            <Text style={[tw`text-blue-300 mt-8 ` , {alignSelf:"center", fontFamily:"Roboto-Regular", fontSize:18}]}>Log in to SmartTechIntern</Text>
            <TextInput
                style={styles.input2}
                placeholder="Email address or phone number"
                keyboardType="email-address"
            
            
                /> 
            <TextInput
                style={styles.input2}
                placeholder="Password"
                secureTextEntry={true}
            />

                      <TouchableOpacity style={[tw`bg-blue-400`,styles.loginText]}
                                         onPress={() => navigation.navigate("HomeScreen")}>
                            <Text style={{fontFamily:"Roboto-Bold", fontSize:20, color:"white"}}>Log in </Text>
                      </TouchableOpacity>
                      <Text style={[tw`text-blue-300 mt-8 ` , {alignSelf:"center", fontFamily:"Roboto-Regular", fontSize:14}]}> Forgot Password? </Text>

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
          input2: {
            height: height*0.07,
            width:width*0.88,
            padding:10,
            borderWidth:1,
            borderColor:'#747572',
            marginTop:20, 
            borderRadius:5,
            alignSelf:"center"  
          },
          loginText:{
                height: height*0.07,
                width:width*0.88,
                padding:10,
                marginTop:20, 
                borderRadius:5,
                alignSelf:"center" ,
                alignItems:"center",
                justifyContent:"center"
              },
    text:{
        fontFamily: 'Roboto-Bold',
        fontSize:35
    }
})