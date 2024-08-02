import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Services from '../components/Services';
import { services } from '../hooks/data'; 
import IncidentCard from '../components/IncidentCards';

const Assets = () => {
  const renderIncidentCard = ({ item }) => (
    <IncidentCard
      title={item.name}
      leftText1={item.care}
      leftText2={item.id}
      rightText={item.service} 
    />
  );

  return (
    <View style={styles.container}>
      <Services />

      <FlatList
        data={services}
        renderItem={renderIncidentCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default Assets;
