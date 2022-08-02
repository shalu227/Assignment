import React from "react";
import { View, Platform, Image, StyleSheet, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchHeader = ({ label,value, onChangeText, placeholder, secureTextInput , onPress}) => {
    const{inputStyle, labelStyle, containerStyle, }= styles;
  return (
    <View style={styles.container}>
        <View style={styles.searchBar}>
            <Image source={require('../assets/images/search.png')} style={{height: 20, width: 20,}} resizeMode={'cover'}></Image>
            <TextInput
            style={inputStyle}
            placeholder={placeholder}
            autoCorrect={false}
            onChangeText={onChangeText}
            value={value}
            placeholderTextColor={'#0C0E17'}
            />
            </View>
        <View style={styles.filterBox}>
            <TouchableOpacity onPress={onPress}>
            <Image source={require('../assets/images/filter.png')} style={{height: 20, width: 22,}} resizeMode={'cover'}></Image>
            </TouchableOpacity>
        </View>
 
    </View>
  );
};
export default SearchHeader;

const styles = StyleSheet.create({
    container:{
        height: 110,
        paddingHorizontal: 22,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },
    searchBar:{
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 14,
        flex: 1,
        borderRadius: 14, 
        borderWidth: 1.5,
        borderColor: '#D3D3D3'
    },
    filterBox:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRadius: 14, 
        borderWidth: 1.5,
        borderColor: '#D3D3D3',
        marginLeft: 10,
    },
   inputStyle:{
       color: '#0C0E17',
       paddingRight: 5,
       paddingLeft: 10,
       lineHeight:20,
       fontSize: 16,
       lineHeight:23,
       flex:2,
       fontFamily: 'Montserrat-Light',

   },

    });
    
    
    