import { StyleSheet, Text, FlatList, View, Image, SafeAreaView, Dimensions, TextInput } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const {width, height} = Dimensions.get('screen');
const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'
]

const SignUpScreen = () => {
  const [text, onChangeText] = useState('');
  const [sName, setSname] = useState('');
  const [number, onChangeNumber] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordAgain, setShowPasswordAgain] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null)
  const [isFemaleChecked, setIsFemaleChecked] = useState(false);
  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [isMonthVisible, setIsMonthVisible] = useState(false)
  const [isDayVisible, setIsDayVisible] = useState(false)
  const [isYearVisible, setIsYearVisible] = useState(false)

  const navigation = useNavigation('');

  function handleFocus(inputName){
    setFocusedInput(inputName);
  }

  const toggleFemaleCheckbox = () => {
    setIsFemaleChecked(!isFemaleChecked);
    setIsMaleChecked(false); // Uncheck male when female is checked
  };

  const toggleMaleCheckbox = () => {
    setIsMaleChecked(!isMaleChecked);
    setIsFemaleChecked(false); // Uncheck female when male is checked
  };

  const toggleMonthVisibility = () => {
    setIsMonthVisible(!isMonthVisible);
    setIsDayVisible(false);
    setIsYearVisible(false);
  }
  // function handleBlur(){
  //   setFocusedInput(null);
  // }

    // const navigation = useNavigation;
    
  return (
    <SafeAreaView style={tw`bg-red-300 h-full`}>
     
      <Text style={[tw`text-blue-600 text-center p-10`, styles.text]}>Smart~Tech~Intern</Text>

      <View style={styles.container}>
            <View style={{alignItems: 'center', marginTop:10}}>
                <Text style={{fontFamily:"Roboto-Bold", fontSize:25}}>Create a new account </Text>
                <Text style={{fontFamily:"Roboto-Medium", fontSize:14,color:'#747572' }}>It's quick and easy. </Text>
            </View>
            <View style={{borderWidth:width*0.001, borderColor:'#747572', marginTop:15}}/>

            <View style={{flexDirection: 'row' , alignSelf:"center"}}>
            <TextInput
                style={[styles.input,
                 {
                   backgroundColor: focusedInput === 'First Name' ? '#1B4079' : 'transparent',
                 }
                ]}
                placeholder="First Name"
                placeholderTextColor={'#747572'}
                onChangeText={onChangeText}
                onFocus={() => handleFocus('First Name')}
                // onBlur={handleBlur}
                value={text}          
            />

            <TextInput
                style={[styles.input,
                {
                  backgroundColor: focusedInput === 'Surname' ? '#1B4079' : 'transparent',
                }
                ]}
                placeholder="Surname"
                placeholderTextColor={'#747572'}
                onChangeText={setSname}
                onFocus={() => handleFocus('Surname')}
                value={sName}           
            
            />
           </View>
           <TextInput
                style={[styles.input2,
                  {
                  backgroundColor: focusedInput === "Mobile Number" ? '#1B4079' : 'transparent',
                  }
                ]}
                placeholder="Mobile Number"
                onChangeText={onChangeNumber}
                onFocus={() => handleFocus('Mobile Number')}
                // onBlur={handleBlur}
                value={number}
                keyboardType="numeric"
            
            
            />
            <TextInput
                style={[styles.input2,
                {
                  backgroundColor: focusedInput === "Email Address" ? '#1B4079' : 'transparent',
                }
              ]}
                placeholder="Email Address"
                onChangeText={setEmail}
                onFocus={() => handleFocus('Email Address')}
                keyboardType="email-address"
                value={email}
            
            
                /> 
            {/* <View style={{flexDirection: 'row' , alignSelf:"center", marginBottom: 10}}> */}
                <TextInput
                style={[styles.input2,
                {
                  backgroundColor: focusedInput === "New Password" ? '#1B4079' : 'transparent',
                }
              ]}
                placeholder="New Password"
                onChangeText={setNewPassword}
                onFocus={() => handleFocus('New Password')}
                secureTextEntry={!showPassword}
                value={newPassword}            
            />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}> 
                        <Image
                          source={
                            showPassword
                              ? require('../assets/images/signup/visible.png')
                              : require('../assets/images/signup/hide.png')
                            }
                            style={{ width: 20, height: 20, position: 'absolute', left: 300, top: -30 }}
                              />
                  </TouchableOpacity>
              <TextInput
                      style={[styles.input2,
                        {
                          backgroundColor: focusedInput === "Re-enter Password" ? '#1B4079' : 'transparent',
                        }
                      ]}
                      placeholder="Re-enter Password"
                      onChangeText={setReenterPassword}
                      onFocus={() => handleFocus('Re-enter Password')}
                      secureTextEntry={!showPasswordAgain}
                      value={reenterPassword}
                />


                          <TouchableOpacity onPress={() => setShowPasswordAgain(!showPasswordAgain)}> 
                            <Image
                              source={
                                showPasswordAgain
                                  ? require('../assets/images/signup/visible.png')
                                  : require('../assets/images/signup/hide.png')
                                }
                                  style={{ width: 20, height: 20, position: 'absolute', left: 300, top: -30 }}
                                  />
                      </TouchableOpacity>
                {/* </View> */}

            <Text style={{fontFamily:"Roboto-Medium", fontSize:14,color:'#747572' , marginLeft:15}}>Date of Birth</Text>

            <View style={{flexDirection: 'row' , alignSelf:"center", marginTop:5}}>
                <TouchableOpacity style={styles.dob}>
                    <Text style={{fontFamily:"Roboto-Regular", marginLeft:10}}>Day </Text>
                    <Image source={require('../assets/images/down-arrow.png')}
                            style={{width:width*0.04, height:height*0.04, marginLeft:40}}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.dob} onPress = {toggleMonthVisibility}>
                    <Text style={{fontFamily:"Roboto-Regular", marginLeft:10}}>Month </Text>
                    <Image source={require('../assets/images/down-arrow.png')}
                            style={{width:width*0.04, height:height*0.04, marginLeft:20}}
                    />
                </TouchableOpacity>
                
                {/* // display month options */}
                {isMonthVisible && (
                  <View style={styles.optionsContainer}>
                    <FlatList
                      data={months}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({ item }) => (
                        <TouchableOpacity style={styles.optionItem}>
                          <Text>{item}</Text>
                        </TouchableOpacity>
                      )}
                    />
                </View>
                )}

                <TouchableOpacity style={styles.dob}>
                    <Text style={{fontFamily:"Roboto-Regular", marginLeft:10}}>Year </Text>
                    <Image source={require('../assets/images/down-arrow.png')}
                            style={{width:width*0.04, height:height*0.04, marginLeft:30}}
                    />
                </TouchableOpacity>
          
                </View>

                <Text style={{fontFamily:"Roboto-Medium", fontSize:14,color:'#747572' , marginLeft:15, marginTop:5}}>Gender </Text>

                  <View style={{flexDirection: 'row' , alignSelf:"center", marginTop:-7}}>
                        <View style={styles.input3}>
                                <Text style={{fontFamily:"Roboto-Regular", }}>Female </Text>
                                <TouchableOpacity style={[
                                  styles.checkbox1, 
                                  isFemaleChecked && { backgroundColor: '#1B4079' },
                                ]}
                                onPress={toggleFemaleCheckbox}></TouchableOpacity>
                              
                            </View>
                            <View style={styles.input3}>
                                <Text style={{fontFamily:"Roboto-Regular", }}>Male </Text>
                                <TouchableOpacity style={[
                                  styles.checkbox, 
                                  isMaleChecked && { backgroundColor: '#1B4079' },
                                ]}
                                onPress={toggleMaleCheckbox}></TouchableOpacity>
                              
                            </View>
                  </View>

                  <View style={{marginTop:8, }}>
                        <Text style={{fontFamily:"Roboto-Regular",lineHeight:12, marginLeft:10,fontSize:10}} >By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
                             You may receive SMS notifications from us and can opt out at any time.
                      </Text>

                      <TouchableOpacity style={[tw`bg-blue-400`,styles.sign]}
                                         onPress={() => navigation.navigate("HomeScreen")}>
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
        marginTop: -30
    },
    checkbox:{
      width:width*0.065,
      height:height*0.03, 
      borderWidth:1,
      borderRadius:50, 
      marginLeft:70, 
      marginTop:-3
    },
    checkbox1:{
      width:width*0.065,
      height:height*0.03, 
      borderWidth:1,
      borderRadius:50, 
      marginLeft:55, 
      marginTop:-3
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
        fontSize:28
    },
    optionsContainer: {
      marginTop: 5,
      borderWidth: 1,
      borderColor: '#747572',
      borderRadius: 4,
      // position:"relative",
      // top:-500,
      // left:-100

    },
    optionItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#747572',
    },
})