import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import Color from '../assets/Color';
import Back from './Options/Back';
import Next from './Options/Next';

const HomeScreen = () => {
  const [randomImage, setRandomImage] = useState('');
  const [randomText, setRandomText] = useState('');
  const navigation = useNavigation();

  //To fetch random images
  const fetchRandomImage = () => {
    fetch('https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings&format=json')
      .then(response => response.json())
      .then(data => setRandomImage(data.url))
      .catch(error => console.error('Error fetching random image:', error));
  };

  //To fetch random text
  const fetchRandomText = () => {
    fetch('https://zenquotes.io/api/random')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          if (data.length > 0) {
            setRandomText(data[0].q);
          } else {
            setRandomText("No quotes available");
          }
        } else {
          setRandomText("Failed to fetch quote");
        }
      })
      .catch(error => console.error('Error fetching random text:', error));
  };

  // This is to allow for auto refresh after 1200000 milliseconds
  useEffect(() => {
    fetchRandomImage();
    fetchRandomText();

    // Set up interval for auto-refresh every 5 minutes (300,000 milliseconds)
    const intervalId = setInterval(() => {
      fetchRandomImage();
      fetchRandomText();
    }, 1200000);

    // Clear the interval when the component unmounts
   
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={[tw`h-1/2 items-center justify-center`, styles.randomPic]}>
        {randomImage ? (
          <Image 
            source={{ uri: randomImage }} 
            style={tw`w-full h-full`}
            resizeMode='cover'
          />
        ) : (
          <Image 
            source={{ uri: 'https://pixabay.com/get/g08781c6c17fb17dadcc76dd5936c6b458289b8db3a49821880aa5ac3a0b019b6c5e65c0fcf07f38021c2f06ce72c9fab_1280.jpg' }} 
            style={tw`w-full h-full`}
          />
        )}
      </View>
      <View style={[tw`h-1/2 items-center justify-center`, styles.randomView]}>
        <Text style={styles.randomTxt}>{randomText}</Text>
      </View>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("SignUpScreen")}>
        <Text style={styles.backText}>Back </Text>
      </TouchableOpacity>
          <Back
            onPress={() => navigation.navigate("SignUpScreen")}
          />
    <Next
      onPress={() => navigation.navigate("Options")}
      label={"Next"}    
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    randomPic: {
    position: 'relative'
    },
    randomView: {
    backgroundColor: Color.yellow,
    paddingHorizontal: 12,
    position: 'relative'
  },
  randomTxt: {
    fontSize: 24,
    color: Color.red,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    backgroundColor: Color.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  backText: {
    fontSize: 18
  }
})

export default HomeScreen;