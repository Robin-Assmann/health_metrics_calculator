import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './src/styles/styles';
import { UnitPicker } from './src/components/UnitPicker';
import { BMIInput } from './src/components/BMIInput';
import { calculateBMI } from './src/utils/bmiCalculator';
import { DarkModeToggle } from './src/components/ModeToggle';

const App = () => {
  const [unit, setUnit] = useState('BMI');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('female');
  const [bmiResult, setBmiResult] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const calculateAndSetBMI = () => {
    const bmi = calculateBMI(unit, height, weight, waist, hip, age, gender);
    if (bmi !== null) {
      setBmiResult(`Result: ${bmi.toFixed(2)} (${unit})`);
    } else {
      Alert.alert('Invalid Input', 'Please provide all required inputs.');
    }
  };

  const clearInputs = () => {
    setHeight('');
    setWeight('');
    setWaist('');
    setHip('');
    setAge('');
    setBmiResult('');
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>Health Metrics Calculator</Text>
      <UnitPicker unit={unit} setUnit={setUnit} isDarkMode={isDarkMode} />
      <BMIInput
        unit={unit}
        height={height}
        setHeight={setHeight}
        weight={weight}
        setWeight={setWeight}
        waist={waist}
        setWaist={setWaist}
        hip={hip}
        setHip={setHip}
        isDarkMode={isDarkMode}
        age={age}
        setAge={setAge}
        gender={gender}
        setGender={setGender}
      />
      <Button title="Calculate" onPress={calculateAndSetBMI} color={isDarkMode ? '#FFC107' : '#000'} />
      <TouchableOpacity onPress={clearInputs} style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
      {bmiResult ? <Text style={[styles.result, isDarkMode ? styles.darkText : styles.lightText]}>{bmiResult}</Text> : null}
    </View>
  );
};

export default App;
