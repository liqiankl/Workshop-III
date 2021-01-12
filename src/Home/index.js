import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Dimensions,
    TouchableOpacity,

  } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Background from '../components/Background';



const Home=()=>{return(
   <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Background style={styles.svg} />
        <ScrollView style={styles.scrollView}>
          <View style ={styles.headerContainer}>
        <View style ={styles.headerIndicator}>
          <View style ={styles.headerIndicatorLeft}>
            <Entypo name ='location-pin' color='#fff' size={25}/>
            <Text>Boston (BOS)</Text>
            <Entypo name ='chevron-down' color='#fff' size={25}/>
          </View>
          <View style ={styles.headerIndicatorRight}>
          <Feather name ='settings' color='#000' size={25}/>
          </View>
        </View>
        
        <Text style ={styles.header}>{`Where would you want to go ?`}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputSearchContainer}>
            <TextInput 
            style={styles.inputSearch}
            value= "New York City(JFK)"/>
            <TouchableOpacity   style={styles.buttonSearch}>
            
            </TouchableOpacity>
          </View>
        </View>
        </View>
        </ScrollView>
      
      </View>
   </>);

};

const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
    },
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: 'white',
    },
    svg: {
      position: 'absolute',
      width: Dimensions.get('window').width,
    },
    headerContainer:{marginTop:10, padding:10},
    headerIndicator:{
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
    },

    headerIndicatorLeft:{
      flexDirection: 'row'
    },
    header:{
      fontSize:30,
      fontWeight:'bold',
      textAlign: 'center',
      marginTop: 35,
    },
    inputContainer:{
      marginTop:20,
      padding:10,
    },
    inputSearchContainer:{
      backgroundColor: 'pink',
      flexDirection:'row',
      alignItems:'center',
      borderRadius:25,
    },
    inputSearch:{
      padding:10,
      fontSize:16,
      fontWeight: '500',
      color: 'grey',
      flex:1,
    },
    buttonSearch:{},
   
    
  });

export default Home;

