import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../assets/Color'

const Next = ({onPress, label}) => {
  return (
        <TouchableOpacity style={styles.nextButton} onPress={onPress}>
        <Text style={styles.backText}>{label}</Text>
      </TouchableOpacity>
  )
}

export default Next


const styles = StyleSheet.create({
    nextButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: Color.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
    backText: {
    fontSize: 18
  }
})