import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Divider = () => {
  return (
    <View style={styles.divider} />
  )
}

export default Divider

const styles = StyleSheet.create({
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 8,
      },
})