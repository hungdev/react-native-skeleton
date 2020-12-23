/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={{ fontFamily: 'Pacifico-Regular' }}>hh</Text>
        <Icon name="rocket" size={30} color="#900" />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
