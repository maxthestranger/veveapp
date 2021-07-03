import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Consent from "./views/consent";
import Auth from "./views/auth";
import Otp from "./views/otp";
import MoreInfo from "./views/moreInfo";
import Home from "./views/home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Consent"
      >
        <Stack.Screen name="consent" component={Consent} />
        <Stack.Screen name="auth" component={Auth} />
        <Stack.Screen name="otp" component={Otp} />
        <Stack.Screen name="moreInfo" component={MoreInfo} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
