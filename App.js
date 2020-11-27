import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


//Pantallas
import countsBookHomeScreen from "./src/screens/countsBookHomeScreen";

//Navegación en pilas
const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={countsBookHomeScreen}>
        <Stack.Screen name="countsBookHomeScreen" component={countsBookHomeScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

