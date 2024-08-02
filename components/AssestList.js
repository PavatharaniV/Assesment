import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AssestList = () => {
    return (
        <View style={styles.container}>
          <View style={styles.sortButtonContainer}>
            <Text style={styles.header}>Recent Non-exited Entries</Text>
            <TouchableOpacity onPress={()=>{}}>
              <FontAwesome
                name={sortOrder === 'asc' ? 'arrow-up' : 'arrow-down'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          {entities.length === 0 ? (
            <View style={styles.noEntriesContainer}>
              <Text style={styles.noEntriesText}>No entries found.</Text>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Text style={styles.newEntryText}>Create Entry</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <FlatList
              data={entities}
              keyExtractor={(item) => item._id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ExitEntry', { selectedEntry: item })}>
                  <View style={styles.itemContainer}>
                    <Text style={styles.title}>{item.vehicleNumber}</Text>
                    <Text style={styles.subtitle}>{new Date(item.createdAt).toLocaleString()}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      );
    };
    
    export default AssestList;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal:20
      },
      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      errorText: {
        color: 'red',
        fontSize: 18,
      },
      sortButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      itemContainer: {
        padding: 15,
        backgroundColor: '#1679AB',
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      title: {
        fontSize: 16,
        fontWeight: '600',
      },
      subtitle: {
        fontSize: 14,
        color: 'white',
      },
      header:{
        fontWeight:'bold',
        fontSize:18
      },
      noEntriesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      noEntriesText: {
        fontSize: 16,
        marginBottom: 10,
      },
      newEntryText: {
        fontSize: 16,
        color: '#1679AB',
        fontWeight: 'bold',
      },
    });
    