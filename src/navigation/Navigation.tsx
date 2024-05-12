import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBar} from './BottomTabBar';
import {Screens} from './Screens';
 import HomeScreen from '../screens/HomeScreen';
import {navigationRef} from './rootNavigation';


const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const MainTab = () => {
    return (
      <Tab.Navigator
        screenOptions={{header: () => null, unmountOnBlur: true}}
        tabBar={props => <BottomTabBar {...props} />}>
        <Tab.Screen name={'Ana Ekran'} component={HomeScreen} />
      </Tab.Navigator>
    );
  };

  const MainStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainTab" component={MainTab} />
        {/* <Tab.Screen name={Screens.ProductDetail} options={{}} component={ProductDetailScreen} /> */}

      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;
