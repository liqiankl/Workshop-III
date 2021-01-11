import *  as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import {View} from 'react-native';
import 'react-native-gesture-handler';

import Home from './src/Home';
import Search from './src/Search'

const Tab = createBottomTabNavigator();

const Blank=()=>{
  return<View />;
};

export default function App() {
  const screenOptions=({route})=> ({
tabBarIcon:({focused, color, size})=>{
  let iconName;
  if(route.name ==='Home'){iconName ='home';}
  else if (route.name === 'Search'){iconName ='magnifying-glass';}
  else if (route.name  === 'Details'){iconName= 'price-tag';}
  else if (route.name === 'Notification'){iconName = 'bell';}
  return<Entypo name={iconName} size={size} color={color} />
},

  });
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor:'#9a009a',
        inactiveTintColor:'#979797'
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Details" component={Blank} />
      <Tab.Screen name="Notification" component={Blank} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
