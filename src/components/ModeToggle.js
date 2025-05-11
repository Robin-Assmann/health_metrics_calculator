import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/styles';

export const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <Icon 
      name={isDarkMode ? 'sunny' : 'moon'} 
      size={30} 
      color={isDarkMode ? '#FFC107' : '#000'} 
      onPress={toggleDarkMode}
      style={styles.icon}
    />
  );
};

export default DarkModeToggle;