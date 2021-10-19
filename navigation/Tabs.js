import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import Event from '../screens/Event';
import Calender from '../screens/Calender';
import Login from '../screens/Login';


const Tab = createBottomTabNavigator();

const Tabs=()=> {
  return (
    
    <Tab.Navigator>
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="Event" component={Event} />
          <Tab.Screen name="Calender" component={Calender} />
          <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}

export default Tabs;
