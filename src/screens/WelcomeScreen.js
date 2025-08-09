import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={colors.primaryGradient}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="wallet" size={60} color={colors.surface} />
          </View>
          <Text style={styles.appName}>VibeMoney</Text>
          <Text style={styles.tagline}>Seu dinheiro, sua vibe ✨</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.welcomeContent}>
            <Text style={styles.welcomeTitle}>Bem-vindo ao futuro das suas finanças!</Text>
            <Text style={styles.welcomeDescription}>
              Controle seus gastos, acompanhe suas receitas e alcance seus objetivos financeiros de forma simples e intuitiva.
            </Text>
          </View>

          {/* Features Preview */}
          <View style={styles.featuresPreview}>
            <View style={styles.featureItem}>
              <Ionicons name="trending-up" size={24} color={colors.surface} />
              <Text style={styles.featureText}>Controle Total</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="bar-chart" size={24} color={colors.surface} />
              <Text style={styles.featureText}>Relatórios Inteligentes</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="shield-checkmark" size={24} color={colors.surface} />
              <Text style={styles.featureText}>100% Seguro</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => navigation.navigate('Features')}
          >
            <Text style={styles.getStartedText}>Começar Agora</Text>
            <Ionicons name="arrow-forward" size={20} color={colors.primary} />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate('Auth')}
          >
            <Text style={styles.skipText}>Pular Introdução</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.surface,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 18,
    color: colors.surface,
    opacity: 0.9,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeContent: {
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.surface,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 36,
  },
  welcomeDescription: {
    fontSize: 16,
    color: colors.surface,
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.9,
    paddingHorizontal: 20,
  },
  featuresPreview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
  },
  featureText: {
    fontSize: 12,
    color: colors.surface,
    marginTop: 8,
    textAlign: 'center',
    opacity: 0.9,
  },
  footer: {
    paddingBottom: 40,
  },
  getStartedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 16,
    ...globalStyles.shadow,
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginRight: 8,
  },
  skipButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  skipText: {
    fontSize: 16,
    color: colors.surface,
    opacity: 0.8,
  },
});

export default WelcomeScreen;