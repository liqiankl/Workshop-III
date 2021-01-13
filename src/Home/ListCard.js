/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import mocks from './mocks.json';

const W = Dimensions.get('window').width;
const Items =({item})=>{
 return(
   <View style={styles.elementsContainer}>
     <View style={styles.imageBox}>
       <Image style={styles.image}/>
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
          <Text style={[styles.text, {color:'purple'}]}>VIEW ALL(12)</Text>
        </View>
        <ScrollView horizontal>
          {mocks.map(item => {
            return <Items key={item.id} item={item}/>
          })}
         
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
  imageBox:{
    flex:1,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'pink',

  },
  image:{
    width: (W - 20)/2,
    height: (W - 40)/2 + 30,
    backgroundColor: 'pink',
  },
  elementsContainer:{},
  innerElements:{},
  elementsName:{},
  elementsTime:{},

});