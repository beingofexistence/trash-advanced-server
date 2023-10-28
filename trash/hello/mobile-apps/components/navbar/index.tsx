// Imports
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Pressable, ScrollView } from 'react-native';
import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial

} from '@expo/vector-icons';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming
} from 'react-native-reanimated';
import {
    GestureHandlerRootView,
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    LongPressGestureHandler,
    State,
    TapGestureHandler,

} from 'react-native-gesture-handler';


// Variables and Typescript Types
const SIZE = 100.0;
const CIRCLE_RADIUS = SIZE * 2;
type ContextType = {
    translateX: number;
    translateY: number;
};


// Main
export default function TopBar(props) {
    // Sahred Values
    let doubleTapBabaAdamDetecttion=0;
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    let rippleContainerAnimatedHeight = useSharedValue("100%");
    let rippleContainerAnimatedWidth = useSharedValue("100%");
   // Variables 
    const SIZE = 100.0;
    const CIRCLE_RADIUS = SIZE * 2;
    // Reanimated Functionality Start
    let doubleTapRef = React.createRef();
    let onHandlerStateChange = event => {
        if (event.nativeEvent.state === State.ACTIVE) {
            if(doubleTapBabaAdamDetecttion==="0"){
                alert(`Nooo!!! ${doubleTapBabaAdamDetecttion}`);
                
            }else{
                alert(`Your Holding This for long ${doubleTapBabaAdamDetecttion}`);
                
            }
            
        }
    };
    let onSingleTap = event => {
        if (event.nativeEvent.state === State.ACTIVE) {
            if(doubleTapBabaAdamDetecttion==="1"){
                alert(`SingleTap[${doubleTapBabaAdamDetecttion}]`);
                
            }else{
                alert(`SingleTap[${doubleTapBabaAdamDetecttion}]`);
                
            }
        }
    };
    let onDoubleTap = event => {
        if (event.nativeEvent.state === State.ACTIVE) {
            doubleTapBabaAdamDetecttion=1;
            alert(`DoubleTap${doubleTapBabaAdamDetecttion}`);
        }
    };
    // Pangesture event
    const panGestureEvent = useAnimatedGestureHandler <
        PanGestureHandlerGestureEvent,
        ContextType >
        ({
            onStart: (event, context) => {
                context.translateX = translateX.value;
                context.translateY = translateY.value;
            },
            onActive: (event, context) => {
                translateX.value = event.translationX + context.translateX;
                translateY.value = event.translationY + context.translateY;
            },
            onEnd: () => {
                const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
                if (distance < CIRCLE_RADIUS + SIZE / 2) {
                    translateX.value = withSpring(0);
                    translateY.value = withSpring(0);
                }
                /*setTimeout(() => {
                    props.navigationProp.navigate("Profile")
                }, 1250) */
            },
        });
    // Animated Styles
    const rippleContainerAnimatedStyles = useAnimatedStyle(() => {
        return {

            height: rippleContainerAnimatedHeight.value,
            width: rippleContainerAnimatedWidth.value,

        };
    });
    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
        },
                {
                    translateY: translateY.value,
        },
      ],
        };
    });
    const multiverseClickEvent = useAnimatedGestureHandler({
        onStart: (e) => {
            rippleContainerAnimatedHeight.value = withTiming("95%", { duration: 50 });
            rippleContainerAnimatedWidth.value = withTiming("95%", { duration: 50 });
        },
        onFinish: (e) => {
            rippleContainerAnimatedHeight.value = withSpring("100%");
            rippleContainerAnimatedWidth.value = withSpring("100%");
            let MULTIVERSE_TIMEOUT = setTimeout(() => {
                props.navigationProp.navigate("Multiverse");
            }, 300)
        },
    });
    const tapGestureEvent = useAnimatedGestureHandler({
        onStart: (tapEvent) => {
            alert("Onstart")
            let centerX = tapEvent.x;
            let centerY = tapEvent.y;
        },
        onActive: () => {
            alert("Inactive")
        },
        onFinish: () => {
            alert("onend")

        },
    });
    // Return..
    return (
        <GestureHandlerRootView style={styles.TOPBAR_CONTAINER_BIG}>
            <View style={styles.TOPBAR_CONTAINER}>
                {/* HeaderLeft Start */}
                <Pressable onPress={()=>{ alert("Hello Drawer") }} style={[styles.TOPBAR_ITEM_CONTAINER,styles.DRAWERNAVIGATION_TOGGLER_CONTAINER]}>
                    <Pressable style={[styles.DRAWERNAVIGATION_ITEM_CONTAINER]}>
                        <Feather name="menu" size={24} color="black" />
                    </Pressable>
                </Pressable>
                <Pressable style={[styles.TOPBAR_ITEM_CONTAINER,styles.SCREEN_TITTLE_CONTAINER]}>
                    <LongPressGestureHandler
                        onHandlerStateChange={onHandlerStateChange}
                        minDurationMs={1200}>
                        <TapGestureHandler
                          
                          onHandlerStateChange={onSingleTap}
                          waitFor={doubleTapRef}>
                          <TapGestureHandler
                            ref={doubleTapRef}
                            onHandlerStateChange={onDoubleTap}
                            numberOfTaps={2}>
                            
                            <Pressable style={styles.SCREEN_TITTLE_NAME}>
                             
                              <Text style={styles.SCREEN_TITTLE_NAME_TEXT}>{ props.headerTittle }</Text>
                             
                            </Pressable>
                            
                          </TapGestureHandler>
                        </TapGestureHandler>
                    </LongPressGestureHandler>
                </Pressable>
                {/* HeaderLeft END */}
                {/* HeaderRight Start */}
                <Pressable style={[styles.TOPBAR_ITEM_CONTAINER,styles.HEADERRIGHT_CONTAINER]}>
                    {/* Multiverse */}
                    <View style={[styles.HEADERRIGHT_ITEM_CONTAINER,styles.MULTIVERSE_TOGGLER,styles.HEADERRIGHT_ICON_CONTAINER]} >
                        <TapGestureHandler
                          onGestureEvent={multiverseClickEvent}
                          onPress={()=>{
                              props.navigationProp.navigate("Multiverse");
                          }}
                        >      
                            <Animated.View style={[styles.rippleContainer]}>
                                <Pressable style={[styles.TOPBAR_ICONS]}>
                                    <FontAwesome name="magic" size={15} color="black" />
                                </Pressable>
                                
                            </Animated.View>
                        </TapGestureHandler>
                    </View>
                    {/* Sidebar */}
                    <View style={[styles.HEADERRIGHT_ITEM_CONTAINER,styles.MULTIVERSE_TOGGLER,styles.HEADERRIGHT_ICON_CONTAINER]} >
                        <TapGestureHandler
                          onGestureEvent={multiverseClickEvent}
                          onPress={()=>{
                              props.navigationProp.navigate("Sidebar");
                          }}
                        >      
                            <Animated.View style={[styles.rippleContainer]}>
                                <Pressable style={[styles.TOPBAR_ICONS]}>
                                    <Feather name="sidebar" size={15} color="black" />
                                </Pressable>
                                
                            </Animated.View>
                        </TapGestureHandler>
                    </View>
                    {/* Infinity  */}
                    <View style={[styles.HEADERRIGHT_ITEM_CONTAINER,styles.HEADERRIGHT_ICON_CONTAINER]} >
                        <TapGestureHandler
                          onGestureEvent={multiverseClickEvent}
                          onPress={()=>{
                              props.navigationProp.navigate("Search");
                          }}
                        >      
                            <Animated.View style={[styles.rippleContainer]}>
                                <Pressable style={[styles.TOPBAR_ICONS]}>
                                    <MaterialCommunityIcons name="infinity" size={18} color="black" />
                                </Pressable>
                                
                            </Animated.View>
                        </TapGestureHandler>
                        
                    </View>
                    {/* Logo */}
                    <TouchableOpacity onPress={ ()=>{ props.navigationProp.navigate("Profile") }} style={[styles.HEADERRIGHT_ITEM_CONTAINER,styles.USER_TOGGLER]}>
                      <PanGestureHandler onGestureEvent={panGestureEvent}>
                        <Animated.View style={[styles.USERLOGO_CONTAINER,styles.USERLOGO_CONTAINER_REAL,rStyle ]}>
                          <Image 
                              
                              style={[styles.USERLOGO]}
                              source={require("../../assets/multiverse.png")}
                              
                          />    
                        </Animated.View>
                      </PanGestureHandler>
                    </TouchableOpacity>
                </Pressable>
                {/* HeaderRight END */}
            </View>
            {/* Hello Topbar Start */}
            <Pressable style={[ styles.HELLO_TOPBAR_TOOL_CONTAINER ]}>
              <ScrollView 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                  flexGrow: 1,
                  justifyContent: 'center',
                  alignItems:"center",
                  rowGap:10,
                  padding:10,
                }}
                style={[ styles.HELLO_TOPBAR_TOOL_MAIN ]} horizontal={true}
                >
                <TouchableOpacity style={[ styles.HELLO_TOPBAR_TOOL_MAIN_CONTAINER ]}>
                    <Text>Hi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[ styles.HELLO_TOPBAR_TOOL_MAIN_CONTAINER ]}>
                    <Text>Hi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[ styles.HELLO_TOPBAR_TOOL_MAIN_CONTAINER ]}>
                    <Text>Hi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[ styles.HELLO_TOPBAR_TOOL_MAIN_CONTAINER ]}>
                    <Text>Hi</Text>
                </TouchableOpacity>
              </ScrollView>
              
                <Pressable style={[ styles.HELLO_TOPBAR_TOOL_TOGGLER ]}/>
                </Pressable>
                
            {/* Hello Topbar End */}
        </GestureHandlerRootView>
    );
}
// Styles Ohh...
const styles = StyleSheet.create({

    HELLO_TOPBAR_TOOL_CONTAINER: {
        
        backgroundColor:"#fff",
        borderTopWidth: 1,
        borderColor: "#F4F4F4",
        position: "relative",
        height: 0,
        width: "100%",
    },
    HELLO_TOPBAR_TOOL_MAIN: {



        height: "100%",
        width: "100%",

    },
    HELLO_TOPBAR_TOOL_TOGGLER: {
        
        backgroundColor: "#EAEAEA",
        borderRadius: 5,

        position: "absolute",
        bottom: -10,
        left: "50%",
        transform: ([
            { translateX: "-50%" },
            { translateY: "-50%" },
          ]),

        height: 3.5,
        width: 30,


    },
    HELLO_TOPBAR_TOOL_MAIN_CONTAINER: {

        borderWidth: 1,
        borderColor: "#F2F2F2",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",

        marginRight: 10,

        height: 35,
        width: 35,
    },
    rippleContainer: {


        height: 35,
        width: 35,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
        borderRadius: "50%",

    },
    rippleStyle: {

        backgroundColor: "#0000001c",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",

        position: "absolute",
        top: 10,
        left: 10,

    },

    SCREEN_TITTLE_NAME_TEXT: {

        fontSize: 17,
        fontStyle: "bold",
        fontWeight: "900",

    },
    box: {

        borderRadius: "50%",
        alignItems: "100%",
        justifyContent: "100%",

        height: "100%",
        width: "100%",
    },
    SCREEN_TITTLE_NAME: {



        justifyContent: "center",


        width: "100%",
        height: "100%",
    },
    TOPBAR_CONTAINER_BIG: {
        
        position: "absolute",
        top: 0,
        left: 0,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 0.47,
          },
          shadowOpacity:  0.23,
          shadowRadius: 11.27,
          elevation: 11,
        
        
        height: 50,
        width: "100%",

        zIndex:5,
        
    },
    TOPBAR_CONTAINER: {
        
        backgroundColor:"#fff",
        flexDirection: "row",
        
      paddingLeft: 5,
        paddingRight: 5,

        height: 50,
        width: "100%",

    },
    TOPBAR_ITEM_CONTAINER: {


        height: "100%",

    },
    DRAWERNAVIGATION_TOGGLER_CONTAINER: {


        alignItems: "start",
        justifyContent: "center",

    },
    DRAWERNAVIGATION_ITEM_CONTAINER: {

        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",

        height: 40,
        width: 40,
    },

    SCREEN_TITTLE_CONTAINER: {

        flex: 1,
        alignItems: "start",
        justifyContent: "center",

        paddingLeft: 3.5,


    },
    USERLOGO: {

        borderRadius: "50%",

        height: 31.5,
        width: 31.5,
    },
    HEADERRIGHT_CONTAINER: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "end",
        columnGap: 2,

        width: "50%",


    },








    HEADERRIGHT_ITEM_CONTAINER: {


        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",

        height: 32.5,
        width: 32.5,
    },
    USER_TOGGLER: {

        backgroundColor: "#F2F2F2",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",

        height: 36,
        width: 36,
    },
    USERLOGO_CONTAINER: {
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",

        height: "100%",
        width: "100%",

    },
    topbarItem: {


        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",

        height: 33,
        width: 33,

    },
    icon: {


        alignItems: "center",
        justifyContent: "center",

        height: "100%",
        width: "100%",

    },
    USERLOGO_CONTAINER_REAL: {


        backgroundColor: "#F2F2F2",
    },
    HEADERRIGHT_ICON_CONTAINER: {
        overflow: "hidden",
    },
});


// Trash 🗑️🚮
/*
    const sidebarClickEvent = useAnimatedGestureHandler({
        onStart: (e) => {
            sidebarX.value = e.x;
            sidebarY.value = e.y;
            sidebarHeightAnimation.value = "250%";
            sidebarWidthAnimation.value = "250%";
            sidebarScaleAnimation.value = withTiming(1, { duration: 250 });
            sidebarOpacityAnimation.value = 1;
        },
        onFinish: (e) => {
            sidebarOpacityAnimation.value = withTiming(0, { duration: 250 });
            let SIDEBAR_TIMEOUT = setTimeout(() => {
                props.navigationProp.navigate("Sidebar");
            }, 300)
        },
    });
    const searchClickEvent = useAnimatedGestureHandler({
        onStart: (e) => {
            searchX.value = e.x;
            searchY.value = e.y;
            searchHeightAnimation.value = "250%";
            searchWidthAnimation.value = "250%";
            searchScaleAnimation.value = withTiming(1, { duration: 250 });
            searchOpacityAnimation.value = 1;
        },
        onFinish: (e) => {
            searchOpacityAnimation.value = withTiming(0, { duration: 250 });
            let SEARCH_TIMEOUT = setTimeout(() => {
                props.navigationProp.navigate("Search");
            }, 300)
        },
    });
    const multiverseAnimatedStyles = useAnimatedStyle(() => {
        return {

            overflow: "hidden",
            opacity: multiverseOpacityAnimation.value,
            left: multiverseX.value,
            top: multiverseY.value,
            //    height: multiverseHeightAnimation.value,
            //   width: multiverseWidthAnimation.value,

            transform: ([
                { translateX: "-50%" },
                { translateY: "-50%" },
                { scale: multiverseScaleAnimation.value },
          ]),

        };
    });
    const sidebarAnimatedStyles = useAnimatedStyle(() => {
        return {
            overflow: "hidden",
            opacity: sidebarOpacityAnimation.value,
            left: sidebarX.value,
            top: sidebarY.value,
            //   height: sidebarHeightAnimation.value,
            //  width: sidebarWidthAnimation.value,

            transform: ([
                { translateX: "-50%" },
                { translateY: "-50%" },
                { scale: sidebarScaleAnimation.value },
          ]),

        };
    });
    const searchAnimatedStyles = useAnimatedStyle(() => {
        return {
            overflow: "hidden",
            opacity: searchOpacityAnimation.value,
            left: searchX.value,
            top: searchY.value,
            height: searchHeightAnimation.value,
            width: searchWidthAnimation.value,

            transform: ([
                { translateX: "-50%" },
                { translateY: "-50%" },
                { scale: searchScaleAnimation.value },
          ]),

        };
    });
    
    let sidebarBackground = useSharedValue("#F2F2F2");
    let sidebarOpacity = useSharedValue(1);
    let multiverseBackground = useSharedValue("#F2F2F2");
    let multiverseOpacity = useSharedValue(1);
    let searchBackground = useSharedValue("#F2F2F2");
    let searchOpacity = useSharedValue(1);
    let hoverBackground = useSharedValue("yellow");
    let hoverOpacity = useSharedValue(1);
    let X = useSharedValue(50);
    let Y = useSharedValue(50);
    let widthAnimation = useSharedValue("0%");
    let heightAnimation = useSharedValue("0%");
    let scaleAnimation = useSharedValue(1);
    let opacityAnimation = useSharedValue(1);
  
    
*/    