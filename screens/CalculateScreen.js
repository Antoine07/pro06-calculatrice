import React from 'react';

import { addNumber, reset } from '../actions/action-type';

import { connect } from 'react-redux';

import {
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import styles from '../styles';

import TouchCalculator from '../components/TouchCalculator';

const btns = [
  ["AC", "Neg", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [0, "", ".", "="]
];

const CalculateScreen = ({ navigation, calculator, addNumber, reset }) => {

  const { number } = calculator;

  const onPressCalcul = number => {

    if (number === 'AC')
      reset();
    else
      addNumber(number);
  }

  return (
    <SafeAreaView style={styles.containerCalculate}>
      <View style={styles.header}>
        <Text style={styles.result} >{number}</Text>
      </View>
      {btns.map((line, i) => (
        <View style={styles.btnRow}>
          {line.map((num, k) => (
            <TouchCalculator
              key={k}
              onPressCalcul={onPressCalcul}
              value={num} color={ i == 0 ? ( k != 3 ? "#a6a6a6" : "#f09a36" ) : ( k != 3 ? "#333333" : "#f09a36") }
            />
          ))}
        </View>
      ))}

    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNumber: number => dispatch( addNumber(number) ),
    reset: () => dispatch(reset())

  }
}

export default connect (mapStateToProps ,mapDispatchToProps)(CalculateScreen);