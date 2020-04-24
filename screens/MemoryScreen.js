import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import styles from '../styles';

const MemoryScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Calculate')}>
        <Text style={styles.buttonText}>Caculate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default MemoryScreen;