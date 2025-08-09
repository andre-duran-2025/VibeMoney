import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { ProfileProvider } from './src/contexts/ProfileContext';
import { colors } from './src/styles/colors';

export default function App() {
  return (
    <SafeAreaProvider>
      <ProfileProvider>
        <AppNavigator />
        <StatusBar 
          style="dark" 
          backgroundColor={Platform.OS === 'android' ? colors.background : 'transparent'}
          translucent={Platform.OS === 'android'}
        />
      </ProfileProvider>
    </SafeAreaProvider>
  );
}