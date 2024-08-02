import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNav from './HomeNav';
import Users from '../screens/Users';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const BottomNav = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomNav.Navigator
      screenOptions={{ headerShown: false }}
    >
      <BottomNav.Screen
        name='HomeNav'
        component={HomeNav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={'black'} size={size} />
          ),
        }}
      />
      <BottomNav.Screen
        name='Notifications'
        component={HomeNav} 
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={'black'} size={size} />
          ),
        }}
      />
      <BottomNav.Screen
        name='Users'
        component={Users}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({ color, size }) => (
            <Icon name="users" color={'black'} size={size} />
          ),
        }}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;
