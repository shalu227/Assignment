import React, {useState} from 'react';
import { FlatList, View , StyleSheet, Text, TextInput, ScrollView} from 'react-native';
import SearchHeader from '../component/SearchHeader';
import LabelText from '../component/LabelText';
import HorizontalListView from '../component/HorizontalListView';
import CategoryGridTile from '../component/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function Home ({navigation, props}){
    const [text, setText] =useState('');

    function renderCategoryItem(itemData) {
        function pressHandler() {
        //   navigation.navigate('MealsOverview');
        }
    
        return (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
          />
        );
      }
    return(
        <View style={styles.container}>

        <SearchHeader 
        placeholder={'Search Talent, Role and more'}
        value={text}
        onChangeText={(value)=>setText(value)}
        />
        <ScrollView showsVerticalScrollIndicator={false}>

        <LabelText value={'Front End Developer'}/>
        <HorizontalListView
        data={CATEGORIES}/>
                <LabelText value={'Back End Developer'}/>
                <HorizontalListView
        data={CATEGORIES}/>
                <LabelText value={'Back End Developer'}/>
                <HorizontalListView
        data={CATEGORIES}/>
            <LabelText value={'Front End Developer'}/>
        <HorizontalListView
        data={CATEGORIES}/>
                 </ScrollView>

         </View>
    )
}


export default Home;


const styles = StyleSheet.create({
container:{
    flex:1, 
    backgroundColor: 'white',
    justifyContent: 'flex-start',
},
});



