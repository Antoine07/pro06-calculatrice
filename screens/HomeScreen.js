import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import styles from '../styles';

const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Memory')}>
        <Text style={styles.buttonText}>Memory</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Calculate')}>
        <Text style={styles.buttonText}>Calculatrice</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;