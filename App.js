import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Bienvenida from './screen/Bienvenida';
import Principal from './screen/Principal';
import Principal2 from './screen/Principal2'

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}/>
        <Stack.Screen
          name='Registro'
          component={Registro}/>

        <Stack.Screen
          name='Bienvenida'
          component={Bienvenida}/>
        
        <Stack.Screen
          name='Principal'
          component={Principal}/>

        <Stack.Screen
          name='Principal2'
          component={Principal2}/>
          
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;