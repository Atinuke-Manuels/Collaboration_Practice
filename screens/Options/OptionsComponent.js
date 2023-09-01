import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity , Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const OptionsComponent = ({ label, color, onPress, backgroundColor, fontSize, textAlign }) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.optionButton, { backgroundColor }]}
        onPress={onPress}
      >
        <Text style={{ color, fontSize, textAlign }}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionsComponent;

const styles = StyleSheet.create({
  optionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    width: width * 0.47,
    height: height * 0.47,
  },
});
