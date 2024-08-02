// Square.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Square = ({ color = 'black', size = 10 }) => {
  return (
    <View style={[styles.square, { backgroundColor: color, width: size, height: size }]} />
  );
};

const styles = StyleSheet.create({
  square: {
    borderRadius: 2,
  },
});

export default Square;
