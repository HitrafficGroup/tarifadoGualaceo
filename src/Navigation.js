import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from "./views/HomeView";
import ReportView from "./views/ReportView";
import CamView from "./views/MenuView";
import FormReportView from "./views/FormReportView";
const Stack = createNativeStackNavigator();



function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:true}}>
          <Stack.Screen name="Home"  component={HomeView} />
          <Stack.Screen name="Report" component={ReportView} />
          <Stack.Screen name="Cam" component={CamView} />
          <Stack.Screen name="Form" component={FormReportView} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;