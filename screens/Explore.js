import React, {useState} from 'react';
import { FlatList, View , StyleSheet, Text, TextInput, Image} from 'react-native';
import SearchHeader from '../component/SearchHeader';
import LabelText from '../component/LabelText';

function Explore ({navigation}){
    const [text, setText] =useState('');
    const [recentData, setRecemtData] =useState(['javaScript', 'HTML', 'Angular', 'CSS', 'Java', 'React Native' ]);
    const [popularData, setPopularData] =useState(['Full Stack developer', 'Data Science', 'Backend Developer', ]);


    function flexTile(itemData){
        console.log('===========ITEMDATA=====',itemData.item);
        return(
            <View style={styles.tileContainer}>
                <Image source={require('../assets/images/recent.png')} style={{height: 14, width: 14, marginRight: 8}} resizeMode={'contain'}/>
                <Text>{itemData.item}</Text>
            </View>
        )
    }


    function popularFlexTile(itemData){
        console.log('===========ITEMDATA=====',itemData.item);
        return(
            <View style={styles.tileContainer}>
                <Image source={require('../assets/images/trend.png')} style={{height: 16, width: 16, marginRight: 8}} resizeMode={'contain'}/>
                <Text>{itemData.item}</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            
        <SearchHeader 
        placeholder={'Search Talent, Role and more'}
        value={text}
        onChangeText={(value)=>setText(value)}
        />
        <View style={{height:140}}>
        <LabelText value={'Recent Searches'} textStyle={{fontSize: 14}}/>
        <FlatList
        flexDirection={'coloumn'}
        contentContainerStyle={{paddingHorizontal: 15, }} 
        numColumns={3}
        data ={recentData}
        scrollEnabled={false}
        style={{backgroundColor: 'white', }}
        keyExtractor={(item)=> item.id}
        renderItem={flexTile}
        />
                 </View>

        <LabelText value={'Popular Searches'} textStyle={{fontSize: 14}}/>
        <FlatList
        flexDirection={'coloumn'}
        contentContainerStyle={{paddingHorizontal: 15,}} 
        numColumns={2}
        scrollEnabled={false}
        data ={popularData}
        style={{backgroundColor: 'white', flex:1}}
        keyExtractor={(item)=> item.id}
        renderItem={popularFlexTile}
        />
         </View>
    )
}

export default Explore;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFF',
    },
    tileContainer:{
        backgroundColor: '#FFFFF',
        alignItems: 'center',
        paddingVertical: 8, 
        paddingHorizontal: 16,
        marginHorizontal: 8,
        marginTop: 12,
        borderWidth: 1.5,
        borderRadius: 26,
        borderColor: '#D3D3D3',
        flexDirection: 'row',
        justifyContent: 'center',
        
    }

});