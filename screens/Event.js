import React from "react";
import { View,Text ,StyleSheet} from "react-native";
const Event=()=>{
return(
<View style={styles.container}>
<Text>Event</Text>

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
export default Event;