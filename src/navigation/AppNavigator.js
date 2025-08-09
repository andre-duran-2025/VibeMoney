import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Onboarding Screens
import WelcomeScreen from '../screens/WelcomeScreen';
import FeaturesScreen from '../screens/FeaturesScreen';
import ControlScreen from '../screens/ControlScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import AuthScreen from '../screens/AuthScreen';

// Main App Screens
import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import ReportsScreen from '../screens/ReportsScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Additional Screens
import GoalsScreen from '../screens/GoalsScreen';
import BillsScreen from '../screens/BillsScreen';
import AddAccountScreen from '../screens/AddAccountScreen';
import TransactionHistoryScreen from '../screens/TransactionHistoryScreen';
import ManageAccountsScreen from '../screens/ManageAccountsScreen';
import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import SecurityScreen from '../screens/SecurityScreen';
import BankAccountsScreen from '../screens/BankAccountsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

import { colors } from '../styles/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Onboarding Navigator
function OnboardingNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Features" component={FeaturesScreen} />
      <Stack.Screen name="Control" component={ControlScreen} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
}

// Main Tab Navigator
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Add') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Reports') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarLabel: 'Início' }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={WalletScreen} 
        options={{ tabBarLabel: 'Carteira' }}
      />
      <Tab.Screen 
        name="Add" 
        component={AddTransactionScreen} 
        options={{ tabBarLabel: 'Adicionar' }}
      />
      <Tab.Screen 
        name="Reports" 
        component={ReportsScreen} 
        options={{ tabBarLabel: 'Relatórios' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ tabBarLabel: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}

// App Stack Navigator
function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
    >
      <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
      <Stack.Screen name="Goals" component={GoalsScreen} />
      <Stack.Screen name="Bills" component={BillsScreen} />
      <Stack.Screen name="AddAccount" component={AddAccountScreen} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
      <Stack.Screen name="ManageAccounts" component={ManageAccountsScreen} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Stack.Screen name="Security" component={SecurityScreen} />
      <Stack.Screen name="BankAccounts" component={BankAccountsScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
}

// Main App Navigator
export default function AppNavigator() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    // Check authentication status
    AsyncStorage.getItem('userToken').then((token) => {
      setIsAuthenticated(!!token);
    });
  }, []);

  if (isFirstLaunch === null) {
    return null; // or a loading screen
  }

  return (
    <NavigationContainer>
      {isFirstLaunch ? (
        <OnboardingNavigator />
      ) : !isAuthenticated ? (
        <AuthScreen />
      ) : (
        <AppStackNavigator />
      )}
    </NavigationContainer>
  );
}