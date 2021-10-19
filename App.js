import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {Text,StyleSheet,useEffect,useState,View} from "react-native";
import Tabs from "./navigation/Tabs";
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  import SplashScreen from 'react-native-splash-screen';
  import { GoogleSignin, statusCodes,GoogleSigninButton } from '@react-native-google-signin/google-signin';
  
import SignIn from "./screens/SignIn";
  const App= () => {
    
  React.useEffect(()=>{
  SplashScreen.hide();
  }
  ,[])
    return (
     
        
          
          <View
            style={styles.container}>
            <SignIn />
          </View>
        
    
    );
  };
  

 
const Appliation=()=>{
    
return(
    
<NavigationContainer>
 <Tabs/>

</NavigationContainer>
  

);
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:10,
          },
});

export default App;
