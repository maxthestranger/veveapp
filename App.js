import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Consent from "./views/consent";
import Auth from "./views/auth";
import Otp from "./views/otp";
import MoreInfo from "./views/moreInfo";
import Home from "./views/home";
import Supplier from "./views/supplier";
import SupplierDetails from './views/supplierDetails';
import ProdDetail from "./views/prodDetail";
import Cart from "./views/cart";
import Success from "./views/success";
import Tracking from "./components/tracking";
import Bucket from './views/bucket';
import Favs from './views/favs';

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
        <Stack.Screen name="supplier" component={Supplier} />
        <Stack.Screen name="supplierDetails" component={SupplierDetails} />
        <Stack.Screen name="prodDetail" component={ProdDetail} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="bucket" component={Bucket} />
        <Stack.Screen name="favs" component={Favs} />
        <Stack.Screen name="success" component={Success} />
        <Stack.Screen name="tracking" component={Tracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
