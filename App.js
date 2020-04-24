// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

import  HomeScreen  from './screens/HomeScreen';
import  CalculateScreen  from './screens/CalculateScreen';
import  MemoryScreen  from './screens/MemoryScreen';

const store = createStore(reducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Memory" component={MemoryScreen} />
        <Stack.Screen name="Calculate" component={CalculateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => (
  <Provider store={store} >
    <Nav />
  </Provider>
)

export default App;