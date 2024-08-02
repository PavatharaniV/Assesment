import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Divider from './Divider';
import SemiCircleChart from './SemiCircleChart';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from './ActionButton';

const IncidentCharts = ({ title, subtitle, data, buttonText, dues }) => {
    const totalCount = data.reduce((total, item) => total + item.count, 0);
    const duesColor = dues === '0' ? '#000000' : '#ff6347'; 

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.arrow}><Icon name="arrow-right" size={18} color="black" /></Text>
            </View>

            <Text style={styles.subtitle}>{subtitle}</Text>
            <Divider />
            
            <View style={styles.contentContainer}>
                <View style={styles.chartContainer}>
                    <View style={styles.chartWrapper}>
                        <SemiCircleChart data={data} size={200} strokeWidth={20} />
                        <Text style={styles.totalNumber}>{totalCount}</Text>
                    </View>
                </View>
                
                <View style={styles.legendContainer}>
                    {data.map((item, index) => (
                        <View key={index} style={styles.legendItem}>
                            <View style={[styles.colorSquare, { backgroundColor: item.color }]} />
                            <Text style={styles.legendText}>{item.name}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.buttonContainer}>
                    <ActionButton text={buttonText}/>
                </View>
                <View style={styles.duesContainer}>
                    <Text style={[styles.duesText, { color: duesColor }]}>{dues} Dues</Text>
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
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 16,
    },
    chartContainer: {
        flex: 1,
        alignItems: 'center',
        paddingLeft:20
    },
    chartWrapper: {
        position: 'relative',
        alignItems: 'center',
    },
    totalNumber: {
        position: 'absolute',
        top: '50%',
        left: '70%',
        transform: [{ translateX: -30 }, { translateY: -12 }], 
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    legendContainer: {
        flex: 1,
        paddingLeft: 30,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    colorSquare: {
        width: 20, 
        height: 20,
        marginRight: 8,
        borderRadius: 4, 
    },
    legendText: {
        fontSize: 14,
        color: '#333',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 10, 
        right: 10,
        alignItems: 'center',
    },
    duesContainer: {
        position: 'absolute',
        bottom: 10, 
        left: 10, 
        alignItems: 'flex-start',
    },
    duesText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default IncidentCharts;
