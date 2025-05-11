import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/styles';

const ClearButton = ({ clearInputs, isDarkMode }) => {
  return (
    <TouchableOpacity onPress={clearInputs} style={styles.clearButton}>
      <Text style={styles.clearButtonText}>Clear</Text>
    </TouchableOpacity>
  );
};

export default ClearButton;
