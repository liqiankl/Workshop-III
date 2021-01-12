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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Background from '../components/Background';



const Home=()=>{return(
   <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <Background style={styles.svg} /> */}
       
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
            <TouchableOpacity style={styles.buttonSearch}>
            <Feather name ='search' color='grey' size={20}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listButton}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name ='airplane' color='#000' size={20}/>
            <Text>Flights</Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.button}>
            <FontAwesome name ='hotel' color='#000' size={20}/>
            <Text>Hotels</Text>
            </TouchableOpacity>       

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
      backgroundColor: 'pink',
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
      backgroundColor: 'white',
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
    buttonSearch:{
      shadowColor:'#222',
      shadowOffset:{width: 0 , height: 2},
      shadowOpacity: 0.5,
      padding: 10,
      borderRadius:30,
      aspectRatio:1,
      backgroundColor: '#fff'
    },
    listButton:{
      flexDirection:'row',
      justifyContent: 'space-evenly',
      marginTop: 20,
    
    },
    button:{
      flexDirection:'row',
      backgroundColor:'#fff',
      padding: 10,
      paddingHorizontal:15,
      borderRadius: 20,
   
    },
   
    
  });

export default Home;

