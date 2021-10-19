import React from "react";
import { View,Text ,StyleSheet} from "react-native";
import Signin from '../screens/SignIn';

const Login=()=>{
return(
<View style={styles.container}>
<Signin /> 

</View>

);

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
        },

});
export default Login;