import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Divider from './Divider'; 
import ActionButton from './ActionButton'; 
import Square from './Square';
import { data } from '../hooks/data';
import{Colors} from '../constants/Colors'

const Services = () => {
    const scrollViewRef = useRef(null);
    const [scrollIndex, setScrollIndex] = useState(0);
    const visibleDots = 3;
    const barWidth = 50;
    const dotSpacing = 12;

    const totalItems = data.length;

    const handleScroll = (direction) => {
        if (scrollViewRef.current) {
            const newIndex = direction === 'left'
                ? Math.max(scrollIndex - 1, 0)
                : Math.min(scrollIndex + 1, totalItems - visibleDots);
            setScrollIndex(newIndex);
            scrollViewRef.current.scrollTo({
                x: newIndex * barWidth,
                animated: true,
            });
        }
    };

    const handleScrollViewScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / barWidth);
        setScrollIndex(index);
    };

    const countItemsNeedingAttention = data.filter(item => item.value > 5).length;

    let rightText = '';
    if (countItemsNeedingAttention > 1) {
        rightText = `${countItemsNeedingAttention} departments need attention`;
    } else if (countItemsNeedingAttention === 1) {
        rightText = '01 department needs attention';
    } else {
        rightText = 'No department needs attention';
    }

    const dots = [];
    for (let i = 0; i < visibleDots; i++) {
        const dotIndex = scrollIndex + i;
        if (dotIndex < totalItems) {
            dots.push(dotIndex);
        }
    }

    const carouselDotsContainerStyle = {
        flexDirection: 'row',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -((visibleDots - 1) * dotSpacing / 2) }],
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Services</Text>

                <View style={styles.line}>
                    <Text style={styles.leftText}>Number of services</Text>
                    <Text style={styles.rightText}>
                        {countItemsNeedingAttention > 0 && (
                            <View style={styles.attentionIndicator}>
                                <Square color= {Colors.orange} size={10} />
                            </View>
                        )} {rightText}</Text>
                </View>

                <Divider />

                <View style={styles.chartContainer}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.chartScrollView}
                        ref={scrollViewRef}
                        onScroll={handleScrollViewScroll}
                        scrollEventThrottle={16}
                    >
                        <View style={styles.chartWrapper}>
                            {data.map((item, index) => (
                                <View key={index} style={styles.barContainer}>
                                    <View
                                        style={[
                                            styles.bar,
                                            {
                                                height: item.value * 20,
                                                backgroundColor: item.value > 5 ? Colors.orange : Colors.black,
                                            },
                                        ]}
                                    />
                                    <Text style={styles.barLabel}>{item.name}</Text>
                                </View>
                            ))}
                        </View>
                    </ScrollView>

                    <View style={styles.arrowsContainer}>
                        <TouchableOpacity style={styles.arrowButton} onPress={() => handleScroll('left')}>
                            <Icon name="arrow-left" size={20} color="black" />
                        </TouchableOpacity>

                        <View style={carouselDotsContainerStyle}>
                            {dots.map((index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.carouselDot,
                                        {
                                            backgroundColor: index === scrollIndex ? 'black' : 'gray',
                                        },
                                    ]}
                                />
                            ))}
                        </View>

                        <TouchableOpacity style={styles.arrowButton} onPress={() => handleScroll('right')}>
                            <Icon name="arrow-right" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <Divider />

                <View style={styles.buttonContainer}>
                    <ActionButton text={'Action'} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        padding: 16,
        width: '100%',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    leftText: {
        fontSize: 12,
        color: '#333',
    },
    rightText: {
        fontSize: 12,
        color: '#333',
    },
    chartContainer: {
        marginBottom: 16,
        position: 'relative',
    },
    chartScrollView: {
        flexDirection: 'row',
    },
    chartWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    barContainer: {
        alignItems: 'center',
        marginRight: 10,
    },
    bar: {
        width: 30,
        backgroundColor: 'gray',
    },
    barLabel: {
        fontSize: 12,
        marginTop: 4,
    },
    carouselDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    arrowsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 16,
    },
    arrowButton: {
        padding: 10,
    },
    buttonContainer: {
        alignItems: 'flex-end',
        marginTop: 16,
    },
});

export default Services;
