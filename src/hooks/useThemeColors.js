import { useTheme } from '../contexts/ThemeContext';
import { colors } from '../styles/colors';
import { darkColors } from '../styles/darkColors';

export const useThemeColors = () => {
  const { isDarkMode } = useTheme();
  
  return isDarkMode ? darkColors : colors;
};