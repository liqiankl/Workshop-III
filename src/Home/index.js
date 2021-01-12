import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
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
      <Background style={styles.svg} />
          <View style={styles.headerContainer}>
            <View style={styles.headerIndicator}>
              <View style={styles.headerIndicatorLeft}>
              <Entypo name ='location-pin' color='#fff' size={20}/>
                <Text style={styles.headerIndicatorText}>
                  Boston (BOS)
                </Text>
                <Entypo name ='chevron-down' color='#fff' size={20}/>
              </View>
              <View style={styles.headerIndicatorRight}>
                <Feather name="settings" color="#fff" size={20} />
              </View>
            </View>
            <Text style={styles.header}>{`Where would you want to go?`}</Text>
            <View style={styles.inputContainer}>
              <View style={styles.inputSearchContainer}>
                <TextInput
                  style={styles.inputSearch}
                  value="New York Citi (JFK) "
                />
                <TouchableOpacity
                  style={styles.buttonSearch}
                 >
                  <Feather name="search" color="grey" size={20} />
                </TouchableOpacity>
              </View>
              <View style={styles.listButton}>
                <TouchableOpacity style={styles.button}>
                  <Ionicons name="airplane" color="#fff" size={20} />
                  <Text style={styles.bText}>Flights</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <FontAwesome name="hotel" color="#fff" size={16} />
                  <Text style={styles.bText}>Hotels</Text>
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
  headerContainer: {
    marginTop: 10,
    padding: 10,
  },
  headerIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIndicatorLeft: {
    flexDirection: 'row',
  },
  headerIndicatorText: {
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 5,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
    
  },
  inputContainer: {
    marginTop: 20,
    padding: 10,
  },
  inputSearchContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
  },
  inputSearch:{
    padding:10,
    fontSize:16,
    fontWeight: '500',
    color: 'grey',
    flex:1,
  },
  buttonSearch: {
    shadowColor: '#222',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 12,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 30,
    aspectRatio: 1,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#b54dfa',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  bText: {
    fontWeight: '500',
    color: '#fff',
    marginLeft: 10,
  },
  listButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default Home;
