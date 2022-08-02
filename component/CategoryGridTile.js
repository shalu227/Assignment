import {  Text, Image, StyleSheet, View } from "react-native";


function CategoryGridTile ({ title, color, image, candidateCount }){
    console.log(image);
    return(
        <View style={[styles.tileContainer, {backgroundColor: color}]}>
            <View style={styles.imageContainer}>
            {/* <Text style={styles.title}>R</Text> */}

                <Image source={{uri:image}} style={{height: 20, width: 20}} resizeMode={'cover'}/>
            </View>
            <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{candidateCount} Candidated available</Text>
            </View>
        </View>

    );

}

export default CategoryGridTile;


const styles= StyleSheet.create({
    tileContainer:{
        // flex: 1,
        height: 130, 
        width: 160,
        margin: 10,
        padding:20,
        borderRadius: 12,
        // borderWidth: 1.5,
        justifyContent: 'space-between',
        // borderColor: 'red',

    },
    imageContainer:{
        height:40, 
        width: 40, 
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',

    },
    title:{
        fontSize: 14, 
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
        marginBottom: 5,

    },
    subTitle:{
        fontSize: 10, 
        fontFamily: 'Montserrat-Regular',
        color: '#FFFFFF'
    }

})