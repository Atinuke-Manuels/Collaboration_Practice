import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TextInput } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const SignUpScreen = () => {
    const navigation = useNavigation('');
  return (
    <SafeAreaView style={tw`bg-red-300 h-full`}>
     
      <Text style={[tw`text-blue-600 text-center p-10`, styles.text]}>Smart~Intern</Text>

      <View style={styles.container}>
            <View style={{alignItems: 'center', marginTop:10}}>
                <Text style={{fontFamily:"Roboto-Bold", fontSize:25}}>Create a new account </Text>
                <Text style={{fontFamily:"Roboto-Medium", fontSize:14,color:'#747572' }}>It's quick and easy. </Text>
            </View>
            <View style={{borderWidth:width*0.001, borderColor:'#747572', marginTop:15}}/>

            <View style={{flexDirection: 'row' , alignSelf:"center"}}>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor={'#747572'}
            
            
            />

            <TextInput
                style={styles.input}
                placeholder="Surname"
            
            
            />
           </View>
           <TextInput
                style={styles.input2}
                placeholder="Mobile Number"
                keyboardType="numeric"
            
            
            />
            <TextInput
                style={styles.input2}
                placeholder="Email Address"
                keyboardType="email-address"
            
            
                /> 
            <View style={{flexDirection: 'row' , alignSelf:"center", marginBottom: 10}}>
                <TextInput
                style={styles.input}
                placeholder="New Password"
                secureTextEntry={true}
            
            
            />
            <TextInput
                    style={styles.input}
                    placeholder="Re-enter Password"
                    secureTextEntry={true}
                
                
                />
                </View>

            <Text style={{fontFamily:"Roboto-Medium", fontSize:14,color:'#747572' , marginLeft:10}}>Date of Birth</Text>

            <View style={{flexDirection: 'row' , alignSelf:"center", marginTop:5}}>
                <View style={styles.dob}>
                    <Text style={{fontFamily:"Roboto-Regular", marginLeft:10}}>Day </Text>
                    <Image source={require('../assets/images/down-arrow.png')}
                            style={{width:width*0.04, height:height*0.04, marginLeft:40}}
                    />
                </View>
                <View style={styles.dob}>
                    <Text style={{fontFamily:"Roboto-Regular", marginLeft:10}}>Month </Text>
                    <Image source={require('../assets/images/down-arrow.png')}
                            style={{width:width*0.04, height:height*0.04, marginLeft:20}}
                    />
                </View>
                <View style={styles.dob}>
                    <Text style={{fontFamily:"Roboto-Regular", marginLeft:10}}>Year </Text>
                    <Image source={require('../assets/images/down-arrow.png')}
                            style={{width:width*0.04, height:height*0.04, marginLeft:30}}
                    />
                </View>
          
                </View>

                <Text style={{fontFamily:"Roboto-Medium", fontSize:14,color:'#747572' , marginLeft:10, marginTop:10}}>Gender </Text>

                  <View style={{flexDirection: 'row' , alignSelf:"center", marginTop:-7}}>
                        <View style={styles.input3}>
                                <Text style={{fontFamily:"Roboto-Regular", }}>Female </Text>
                                <View style={{width:width*0.065, height:height*0.03, borderWidth:1, borderRadius:50, marginLeft:50, marginTop:-3}}/>
                              
                            </View>
                            <View style={styles.input3}>
                                <Text style={{fontFamily:"Roboto-Regular", }}>Male </Text>
                                <View style={{width:width*0.065, height:height*0.03, borderWidth:1, borderRadius:50, marginLeft:70, marginTop:-3}}/>
                              
                            </View>
                  </View>

                  <View style={{marginTop:8, }}>
                        <Text style={{fontFamily:"Roboto-Regular",lineHeight:12, marginLeft:10,fontSize:10}} >By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
                             You may receive SMS notifications from us and can opt out at any time.
                      </Text>

                      <TouchableOpacity style={[tw`bg-blue-400`,styles.sign]}>
                            <Text style={{fontFamily:"Roboto-Bold", fontSize:20, color:"white"}}>Sign Up </Text>
                      </TouchableOpacity>

                  </View>

                  <View style={{flexDirection:"row", alignSelf:"center", marginTop:15}}>
                    <Text style={[tw`text-blue-600`,{fontSize:15, fontFamily:"Roboto-Bold"} ]}>Already have an account? </Text>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("LoginScreen")}
                        style={[tw `bg-green-100`, styles.log]}>
                            <Text style={[tw`text-green-800`,{fontSize:15, fontFamily:"Roboto-Bold",} ]}>Log in </Text>
                   </TouchableOpacity>
                  </View>



       </View>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container:{
        height:height*0.81, 
        width:width*0.95,
        backgroundColor: '#FFFFFF', 
        alignSelf: 'center', 
        borderRadius: 10, 
        marginTop: -35
    },
    dob:{
        height: height*0.05,
        width:width*0.28,
        borderWidth:1,
        borderColor:'#747572',
        marginLeft: 6,
        marginRight:5,
        borderRadius:4,
        flexDirection:"row",
        // justifyContent:"space-between",
        alignItems:"center",
        
    },
    input: {
        height: height*0.05,
        width:width*0.43,
        padding:10,
        borderWidth:1,
        borderColor:'#747572',
        marginTop:15, 
        borderRadius:5,
        marginLeft: 5,
        marginRight:5
        
      },
      input2: {
        height: height*0.05,
        width:width*0.88,
        padding:10,
        borderWidth:1,
        borderColor:'#747572',
        marginTop:10, 
        borderRadius:5,
        alignSelf:"center"
        
        
      },
      input3: {
        height: height*0.05,
        width:width*0.43,
        padding:10,
        borderWidth:1,
        borderColor:'#747572',
        marginTop:15, 
        borderRadius:5,
        marginLeft: 5,
        marginRight:5,
        flexDirection:"row"
        
      },
      log:{
        height: height*0.04,
        width:width*0.2,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        marginTop:-5
      },
      sign: {
        height: height*0.06,
        width:width*0.6,
        // borderWidth:1,
        borderColor:'#747572',
        marginTop:18, 
        borderRadius:10,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center"
        
           
        
      },
    text:{
        fontFamily: 'Roboto-Bold',
        fontSize:35
    }
})