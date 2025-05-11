import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../styles/styles';

export const BMIInput = ({ unit, height, setHeight, weight, setWeight, waist, setWaist, hip, setHip, isDarkMode, age, setAge, gender, setGender }) => {
  const getPlaceholder = (field) => {
    switch (field) {
      case 'height':
        return unit === 'BAI' ? 'Hip Circumference (cm)' : 'Height (cm)';
      case 'weight':
        return 'Weight (kg)';
      case 'waist':
        return 'Waist Circumference (cm)';
      case 'hip':
        return 'Hip Circumference (cm)';
      case 'age':
        return 'Age (years)';
      default:
        return '';
    }
  };

  return (
    <View style={[styles.inputContainer, isDarkMode ? styles.darkInputContainer : styles.lightInputContainer]}>
      {unit !== 'BAI' && (
        <TextInput
          style={[styles.input, isDarkMode ? styles.darkInput : styles.lightInput]}
          placeholder={getPlaceholder('height')}
          placeholderTextColor={isDarkMode ? '#AAA' : '#555'}
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
      )}
      <TextInput
        style={[styles.input, isDarkMode ? styles.darkInput : styles.lightInput]}
        placeholder={getPlaceholder('weight')}
        placeholderTextColor={isDarkMode ? '#AAA' : '#555'}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      {(unit === 'BFP' || unit === 'WHtR') && (
        <TextInput
          style={[styles.input, isDarkMode ? styles.darkInput : styles.lightInput]}
          placeholder={getPlaceholder('waist')}
          placeholderTextColor={isDarkMode ? '#AAA' : '#555'}
          keyboardType="numeric"
          value={waist}
          onChangeText={setWaist}
        />
      )}
      {unit === 'BAI' && (
        <TextInput
          style={[styles.input, isDarkMode ? styles.darkInput : styles.lightInput]}
          placeholder={getPlaceholder('hip')}
          placeholderTextColor={isDarkMode ? '#AAA' : '#555'}
          keyboardType="numeric"
          value={hip}
          onChangeText={setHip}
        />
      )}
      {unit === 'BFP' && (
        <TextInput
          style={[styles.input, isDarkMode ? styles.darkInput : styles.lightInput]}
          placeholder={getPlaceholder('age')}
          placeholderTextColor={isDarkMode ? '#AAA' : '#555'}
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
      )}
    </View>
  );
};

export default BMIInput;
