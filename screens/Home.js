import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import GlobalStyles from '../constants/GlobalStyles';
import Header from '../components/Header';
import CountCards from '../components/CountCards';
import Button from '../components/Button';
import Assets from '../app/Assets';
import Incidents from '../app/Incidents';

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState('Assets');

  return (
    <ScrollView style={[GlobalStyles.droidSafeArea, styles.container]}>
      <Header />
      <View style={styles.spacing} />
      <CountCards style={styles.countCards} />
      <View style={[styles.buttonContainer,styles.spacing1]}>
        <Button
          onPress={() => setSelectedComponent('Assets')}
          title={"Assets"}
          isSelected={selectedComponent === 'Assets'}
        />
        <Button
          onPress={() => setSelectedComponent('Incidents')}
          title={"Incidents"}
          isSelected={selectedComponent === 'Incidents'}
        />
      </View>
      <View style={styles.componentContainer}>
        {selectedComponent === 'Assets' && <Assets />}
        {selectedComponent === 'Incidents' && <Incidents />}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacing: {
    marginVertical: 50, 
  },
  countCards: {
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20, 
  },
  componentContainer: {
    flex: 1,
  },
  spacing1:{
    marginVertical: 30, 
  }
});
