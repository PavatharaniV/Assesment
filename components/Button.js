import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ title, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isSelected ? styles.selected : styles.unselected,
      ]}
    >
      <Text style={[styles.text, isSelected ? styles.selectedText : styles.unselectedText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    borderWidth: 1,
  },
  selected: {
    backgroundColor: '#3FA2F6',
    borderColor: '#3FA2F6',
  },
  unselected: {
    backgroundColor: 'white',
    borderColor: 'black',
  },
  text: {
    fontSize: 18,
  },
  selectedText: {
    color: 'white',
  },
  unselectedText: {
    color: 'black',
  },
});
