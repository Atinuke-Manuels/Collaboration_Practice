import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import Color from '../../assets/Color'

const Back = ({onPress}) => {
  return (
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
  )
}

export default Back;


const styles = StyleSheet.create({
    backButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    backgroundColor: Color.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5, 
  },
    backText: {
    fontSize: 18
  }
})