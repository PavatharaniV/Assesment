import { MaterialIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HEADER_HEIGHT = 159;
const CARD_HEIGHT = 158;
const CARD_WIDTH = '85%';

const HeaderWithCard = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}hr:${minutes}m:${secs}s`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Vajra</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <MaterialIcons name="dashboard-customize" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuIcon}>
            <Icon name="bars" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.hospitalName}>ABC Hospital</Text>
        <Text style={styles.branchName}>Branch Name</Text>

        <View style={styles.row}>
          <View>
            <Text style={[styles.branchName, { paddingTop: 15 }]}>All Assets are in order</Text>
            <Text style={styles.timerText}>{formatTime(seconds)}</Text>
          </View>
          <Icon name="check" size={30} color="white" style={styles.tick} />
        </View>
      </View>
    </View>
  );
};

export default HeaderWithCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: HEADER_HEIGHT,
    backgroundColor: '#201E43',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 16,
  },
  logo: {
    position: 'absolute',
    left: 16,
    top: 16,
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    fontStyle:'italic'
  },
  icons: {
    position: 'absolute',
    right: 16,
    top: 16,
    flexDirection: 'row',
    gap: 16,
  },
  menuIcon: {
    marginLeft: 16, 
  },
  card: {
    position: 'absolute',
    top: HEADER_HEIGHT - CARD_HEIGHT / 2,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#3FA2F6',
    borderRadius: 20,
  },
  hospitalName: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 20,
    fontWeight: '700',
    color: 'white',
  },
  branchName: {
    fontSize: 17,
    alignSelf: 'flex-start',
    marginTop: 5,
    fontWeight: '500',
    marginLeft: 20,
    color: 'white',
  },
  timerText: {
    fontSize: 17,
    alignSelf: 'flex-start',
    marginTop: 5,
    fontWeight: '500',
    marginLeft: 20,
    color: 'white',
  },
  tick: {
    fontSize: 30,
    marginTop: 10,
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
