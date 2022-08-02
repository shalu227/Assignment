import React from "react";
import { View,Image, StyleSheet,Text, FlatList, Dimensions} from "react-native";
import CategoryGridTile from "./CategoryGridTile";

const SCREEN_WIDTH = Dimensions.get('window');

function renderCategoryTile(itemData){

    console.log('======itemData', itemData);

    return(
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} image={itemData.item.image} candidateCount={itemData.item.candidateCount}/>
    );

}


const HorizontalListView = ({data }) => {

    return (
      <View style={{backgroundColor: 'white',flex:1}}>
        <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={renderCategoryTile}
        keyExtractor={item => item.id}
        
        style={{flex:1,marginLeft: 15,}}
      />
      </View>
    );
  };
  export default HorizontalListView;


  const styles = StyleSheet.create({
 

  })