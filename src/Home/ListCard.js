/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import mocks from './mocks.json';

const items =({item})=>{
 return(
   <View style={styles.elementsContainer}>
     <View style={styles.image}>
       <Image />
       <View style={styles.innerElements}>
        <View>
        <Text style={styles.elementsName}>{item.name}</Text>
        <Text style={styles.elementsTime}>{item.time}</Text>
        </View>
        <View>
          <Text style={styles.elementsName}>{item.saleoff}</Text>
       </View>

       </View>
     </View>

   </View>
 );

};



const ListCard = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Currently Watched Items</Text>
          <Text>View All(12)</Text>
        </View>
        <ScrollView>

        </ScrollView>
      </View>
    </>
  );
};

export default ListCard;


const styles= StyleSheet.create({

  container: {
    marginTop: 0,
    paddingHorizontal: 10,
  }, 
  header:{
    flexDirection: 'row',
    justifyContent:'space-between',
    padding: 10,
    paddingBottom: 10,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },
  image:{},
  elementsContainer:{},
  innerElements:{},
  elementsName:{},
  elementsTime:{},

});