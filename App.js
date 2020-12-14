import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Splash
import * as SplashScreen from "expo-splash-screen";
import useDatabase from "./src/hooks/useDatabase";

//Context
//para compartit datos en toda la app a travez del contexto.
import {AccountsContextProvider} from "./src/context/AccountContext";

//Pantallas
import countsBookHomeScreen from "./src/screens/countsBookHomeScreen";
import newAccountScreen from "./src/screens/newAccountScreen";
import allAccountScreen from "./src/screens/allAcountsScreen";
import aboutScreen from "./src/screens/aboutScreen";
//Navegación en pilas
const Stack = createStackNavigator();

export default function App(){

  //prevenir que se oculte el splash hasta que cargue la bd
  SplashScreen.preventAutoHideAsync();
  //Ocultar la pantalla de Splash 
  const isLoadingComplete = useDatabase();


  // Ocultar la pantalla del splash
  if (isLoadingComplete) SplashScreen.hideAsync();

  return(
    <NavigationContainer>
      <AccountsContextProvider>
      <Stack.Navigator initialRouteName={countsBookHomeScreen}>
        <Stack.Screen name="countsBookHomeScreen" component={countsBookHomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="newAccountScreen" component={newAccountScreen} options={{headerShown:false}}/>
        <Stack.Screen name="allAccountScreen" component={allAccountScreen} options={{headerShown:false}}/>
        <Stack.Screen name="aboutScreen" component={aboutScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
      </AccountsContextProvider>
    </NavigationContainer>
  )
}

