import React from 'react';

import Login from './Login';
import ProfileScreen from './Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
 


function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
   
        <Stack.Screen
          name="Contact us "
          component={Login}
          options={{ title: 'Contact us' }}
        />
         <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;