import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Divider from './Divider';
import SemiCircleChart from './SemiCircleChart';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from './ActionButton';
import { reports } from '../hooks/data'; 
import { Colors } from '../constants/Colors'; 

const CardIncident = () => {
    const totalIncidents = reports.reduce((total, report) => total + report.count, 0);

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>Incidents</Text>
                <Text style={styles.arrow}>
                    <Icon name="arrow-right" size={18} color="black" />
                </Text>
            </View>

            <Text style={styles.subtitle}>No. of raised incidents</Text>
            <Divider />
            <View style={styles.row}>
                {reports.map((report, index) => (
                    <Text
                        key={index}
                        style={[
                            styles.number,
                            report.name === 'Open' && styles.numberOpen,
                        ]}
                    >
                        {report.count} {report.name}
                    </Text>
                ))}
            </View>

            <View style={styles.chartContainer}>
                <Text style={styles.totalNumber}>{totalIncidents} Reports</Text>
                <SemiCircleChart data={reports} size={200} strokeWidth={20} />
                <Divider />
                <View style={styles.buttonContainer}>
                    <ActionButton text={'Add'} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        padding: 16,
        margin: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    arrow: {
        fontSize: 18,
        color: '#007bff',
    },
    subtitle: {
        fontSize: 14,
        color: '#6c757d',
        marginVertical: 8,
    },
    chartContainer: {
        alignItems: 'center',
        marginVertical: 4,
        position: 'relative',
    },
    totalNumber: {
        position: 'absolute',
        top: '50%',
        left: '45%',
        transform: [{ translateX: -40 }, { translateY: -20 }],
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    dividerContainer: {
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
    },
    number: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    numberOpen: {
        color: Colors.orange, 
    },
});

export default CardIncident;
