import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import Explore from './screens/Explore';
import Chat from './screens/Chat';
import AddScreen from './screens/AddScreen';
// import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';
import CustomHeader from './component/CustomHeader';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';


// SplashScreen.preventAutoHideAsync();




// let customFonts = {
//   'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
//   'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
// };



  const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const CustomAddTabBar = ({children, onPress} ) => (
  <TouchableOpacity
    style={{
      top: -40,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: 'black',
      height: 70,
      width: 70,
      borderRadius: 35,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}
    >
      <View style={{height: 70, width: 70, borderRadius: 35,
      }}>
        {children}
      </View>
  </TouchableOpacity>
);

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4668D6' ,
        tabBarItemStyle:{ alignItems: 'center', justifyContent: 'center', paddingVertical: Platform.OS == 'android'?14:5,},
        tabBarStyle:{height: Platform.OS == 'android' ?80:100, },
        tabBarLabelStyle: {
          height: 18,
          fontSize: 12,
          // lineHeight: 10,
          fontFamily: 'Montserrat-Regular',
        },        
        // tabBarInactiveTintColor: '#909090',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Feather name="grid" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
        <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size, isActive }) => (
            <Feather name="plus" color={!isActive? '#FFFFFF':color} size={40} />
          ),
          tabBarButton: (props) => (
            <CustomAddTabBar {...props} />
          )
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <Feather name="message-circle" color={color} size={size} />
          ),
        }}
      />
          <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  // const [isLoaded] = useFonts(customFonts);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
          'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
          'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
          'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),

        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);


  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTitle: (props) => <CustomHeader {...props} />
                // headerStyle: {backgroundColor: '#FFFFFF'},
        // headerTintColor: '',
        // contentStyle: {backgroundColor: '#3f2f5'},
        // title: 'My home',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
      }}>
        <Stack.Screen 
        name= 'Tabs' 
        component={MyTabs}
        />
      </Stack.Navigator>
      </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow:{
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: '0.25',
    shadowRadius: '3.5',
    elevation: 5,
  },
  tabBarLabel: {
    paddingBottom: 6,
    fontSize: 10,
    textAlign: 'center'
  },
});
