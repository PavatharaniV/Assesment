import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../constants/Colors';

const IncidentCard = ({ title, leftText1, leftText2, rightText }) => {
  const rightValue = parseInt(rightText, 10);
  const isAlertVisible = rightValue > 5;

  return (
    <View style={[styles.card, isAlertVisible && styles.cardAlert]}>
      {isAlertVisible && (
        <Icon
          name="exclamation-circle"
          size={24}
          color="white"
          style={styles.alertIcon}
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.leftText}>{leftText1}</Text>
        <Text style={styles.leftText}>{leftText2}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={[styles.rightText, isAlertVisible && styles.rightTextAlert]}>
          {rightText} Services
        </Text>
      </View>
      {isAlertVisible && <View style={styles.overlay} />}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    padding: 16,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative',
  },
  cardAlert: {
    paddingRight: 80, 
  },
  alertIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  content: {
    flex: 1,
    marginRight: 80, 
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  leftText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  rightSection: {
    position: 'absolute',
    top: 16,
    right: 16,
    bottom: 16,
    width: 80,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  rightText: {
    fontSize: 14,
    color: Colors.orange,
    fontWeight:'600'
  },
  rightTextAlert: {
    color: 'white',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '50%',
    backgroundColor:Colors.orange,
    zIndex: -1, 
    borderTopRightRadius:8,
    borderBottomRightRadius:8
  },
});

export default IncidentCard;
