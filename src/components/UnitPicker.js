import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles/styles';

export const UnitPicker = ({ unit, setUnit, isDarkMode }) => {
  return (
    <Picker
      selectedValue={unit}
      style={[styles.picker, isDarkMode ? styles.darkPicker : styles.lightPicker]}
      onValueChange={(itemValue) => setUnit(itemValue)}
      itemStyle={{ color: isDarkMode ? '#FFF' : '#000' }}
    >
      <Picker.Item label="BMI (kg/m²)" value="BMI" />
      <Picker.Item label="Body Fat Percentage (BFP)" value="BFP" />
      <Picker.Item label="Waist-to-Height Ratio (WHtR)" value="WHtR" />
      <Picker.Item label="Body Adiposity Index (BAI)" value="BAI" />
      <Picker.Item label="Lean Body Mass (LBM)" value="LBM" />
    </Picker>
  );
};

export default UnitPicker;