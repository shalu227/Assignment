import React from "react";
import { View, Platform, Image, StyleSheet, Text , } from "react-native";

const CustomHeader = props => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 30,}}>
      <View style={{width: '84%',}}>
        <Image source={require('../assets/images/user_24.png')} style={{height:26, width: 26,}}></Image>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',flex:1,}}>
        <Image source={require('../assets/images/notification.png')} style={{height:21, width: 23}}></Image>
        <Image source={require('../assets/images/fav.png')} style={{height:19, width: 14}}></Image>
        </View>
    </View>
  );
};
export default CustomHeader;