import React from "react";
import { View,Image, StyleSheet,Text,} from "react-native";

const LabelText = ({value, textStyle}) => {
  return (
    <View style={styles.container}>
       <Text style={[styles.text, {...textStyle}]}>{value}</Text>
    </View>
  );
};
export default LabelText;

const styles = StyleSheet.create({
    container:{
        // height: 110,
        paddingHorizontal: 22,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        paddingVertical:5,
    },
    text:{
       color: '#0C0E17',
       fontSize: 18,
       fontFamily: 'Montserrat-Medium',

   },

    });
    
    
    