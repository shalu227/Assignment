
import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BottomSheet, { BottomSheetTextInput, BottomSheetView, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import LabelText from './LabelText';

function BottomSheetViewContainer(props){
  const sheetRef = useRef(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ["5%","25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);



    return(
        <View style={styles.container}>
       <BottomSheet
        ref={sheetRef}
        index={1}
        initialSnapIndex={1}
        enablePanDownToClose={true}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        
      >
          <BottomSheetScrollView>
        <View style={styles.bottomSheetContainer}>
        <LabelText value={'Role Types'} textStyle={{fontSize: 14}}/>
        </View>
        </BottomSheetScrollView>
      </BottomSheet>
      </View>
    )


}


export default BottomSheetViewContainer;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: 'grey',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
    input: {
      marginTop: 8,
      marginBottom: 10,
      borderRadius: 10,
      fontSize: 16,
      lineHeight: 20,
      padding: 8,
      backgroundColor: 'rgba(151, 151, 151, 0.25)',
    },
  });
  