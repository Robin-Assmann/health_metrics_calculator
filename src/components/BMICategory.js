import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/styles';

const BMICategory = ({ bmiResult, isDarkMode }) => {
  return bmiResult ? (
    <Text style={[styles.result, isDarkMode ? styles.darkText : styles.lightText]}>{bmiResult}</Text>
  ) : null;
};

export default BMICategory;
