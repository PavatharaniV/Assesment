import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CountCards = () => {
  const renderCard = (text, count) => (
      <View style={styles.card}>
        <Text style={styles.countText}>{count}</Text>
        <Text style={styles.cardText}>{text}</Text>
      </View>
  );

  return (
    <View style={styles.countContainer}>
      <View style={styles.count}>
        {renderCard('Dept.', '22')}
        {renderCard('Assets', '240')}
        {renderCard('Check In', '04')}
      </View>
    </View>
  );
};

export default CountCards;

const styles = StyleSheet.create({
  countContainer: {
    flex: 1,
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    justifyContent: 'space-between',
  },
  countText: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  cardText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
