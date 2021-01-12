import React from 'react';
import {
  
    StyleSheet,

    View,
    Text,
    StatusBar,
    Dimensions,

  } from 'react-native';

import Background from '../components/Background';



const Home=()=>{return(
   <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Background style={styles.svg} />
        <Text>Hello</Text>
      
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
 
   
    
  });

export default Home;

