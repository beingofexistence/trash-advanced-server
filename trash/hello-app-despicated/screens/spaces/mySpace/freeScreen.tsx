// Imports
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TopBar, BottomBar,Telepot,MySpace_BottomBar } from "../../../components";
import { Feather,Foundation, AntDesign, FontAwesome, FontAwesome5, Ionicons,MaterialIcons } from '@expo/vector-icons';








// Main Functionality 
export default function FreeScreen({ navigation, route }) {
    return (
        <View style={styles.container}>
            
            <TopBar navigationProp={navigation} headerTittle={route.name}/>
            
            <Text>FreeScreen</Text>
            <Telepot navigationProp={navigation} />
            
                
            <View style={[styles.MULTIVERSE_BOTTOM_GLOW]}></View>
            <MySpace_BottomBar
                navigationProp={navigation} 
                routeProp={route}
            />
            
        </View>
    );
}



// Styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
        position: "relative",
        
        height: "100%",
        width: "100%",
    },



});
