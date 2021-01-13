import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Background from '../components/Background';

const Search = () => {
  return (
    <>
      <View>
        <Background style={styles.svg} />
      </View>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  svg: {
    top: -170,
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
});
