import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const ActionButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <Icon name="plus" size={20} color="#fff" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3FA2F6',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', 
    marginRight: 8, 
  },
  icon: {
    marginLeft: 8, 
  },
});

export default ActionButton;
