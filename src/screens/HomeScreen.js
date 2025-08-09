import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useProfile } from '../contexts/ProfileContext';
import { colors } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';

const HomeScreen = ({ navigation }) => {
  const { profileImage } = useProfile();

  // Mock data
  const balance = 2450.75;
  const monthlyIncome = 3500.00;
  const monthlyExpenses = 1049.25;
  
  const quickActions = [
    { id: '1', title: 'Receita', icon: 'add-circle', color: colors.success, screen: 'AddTransaction' },
    { id: '2', title: 'Despesa', icon: 'remove-circle', color: colors.error, screen: 'AddTransaction' },
    { id: '3', title: 'Meta', icon: 'flag', color: colors.warning, screen: 'Goals' },
    { id: '4', title: 'Relatório', icon: 'bar-chart', color: colors.info, screen: 'Reports' },
  ];
  
  const recentTransactions = [
    { id: '1', title: 'Salário', amount: 3500.00, type: 'income', date: '2024-01-15', category: 'Trabalho' },
    { id: '2', title: 'Supermercado', amount: -120.50, type: 'expense', date: '2024-01-14', category: 'Alimentação' },
    { id: '3', title: 'Combustível', amount: -85.00, type: 'expense', date: '2024-01-13', category: 'Transporte' },
    { id: '4', title: 'Freelance', amount: 450.00, type: 'income', date: '2024-01-12', category: 'Trabalho' },
  ];

  const renderQuickAction = ({ item }) => (
    <TouchableOpacity
      style={[styles.quickActionItem, { backgroundColor: `${item.color}20` }]}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Ionicons name={item.icon} size={24} color={item.color} />
      <Text style={[styles.quickActionText, { color: item.color }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <View style={[styles.transactionIcon, { backgroundColor: item.type === 'income' ? colors.successLight : colors.errorLight }]}>
          <Ionicons 
            name={item.type === 'income' ? 'arrow-down' : 'arrow-up'} 
            size={16} 
            color={item.type === 'income' ? colors.success : colors.error} 
          />
        </View>
        <View>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionCategory}>{item.category}</Text>
        </View>
      </View>
      <View style={styles.transactionRight}>
        <Text style={[styles.transactionAmount, { color: item.type === 'income' ? colors.success : colors.error }]}>
          {item.type === 'income' ? '+' : '-'}R$ {Math.abs(item.amount).toFixed(2)}
        </Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Olá! 👋</Text>
            <Text style={styles.welcomeText}>Bem-vindo de volta</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={styles.profileButton}>
              <Ionicons name="person" size={24} color={colors.primary} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
        <LinearGradient
          colors={colors.primaryGradient}
          style={styles.balanceCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.balanceLabel}>Saldo Total</Text>
          <Text style={styles.balanceAmount}>R$ {balance.toFixed(2)}</Text>
          <View style={styles.balanceDetails}>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceItemLabel}>Receitas</Text>
              <Text style={styles.balanceItemValue}>+R$ {monthlyIncome.toFixed(2)}</Text>
            </View>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceItemLabel}>Despesas</Text>
              <Text style={styles.balanceItemValue}>-R$ {monthlyExpenses.toFixed(2)}</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ações Rápidas</Text>
          <FlatList
            data={quickActions}
            renderItem={renderQuickAction}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.quickActionsContainer}
          />
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Transações Recentes</Text>
            <TouchableOpacity onPress={() => navigation.navigate('TransactionHistory')}>
              <Text style={styles.seeAllText}>Ver todas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.transactionsContainer}>
            <FlatList
              data={recentTransactions}
              renderItem={renderTransaction}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  welcomeText: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 4,
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    ...globalStyles.shadow,
  },
  balanceCard: {
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  balanceLabel: {
    fontSize: 16,
    color: colors.surface,
    opacity: 0.9,
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.surface,
    marginBottom: 20,
  },
  balanceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceItem: {
    flex: 1,
  },
  balanceItemLabel: {
    fontSize: 14,
    color: colors.surface,
    opacity: 0.8,
    marginBottom: 4,
  },
  balanceItemValue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.surface,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  quickActionsContainer: {
    paddingHorizontal: 16,
  },
  quickActionItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 16,
    marginHorizontal: 4,
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 8,
    textAlign: 'center',
  },
  transactionsContainer: {
    backgroundColor: colors.surface,
    marginHorizontal: 20,
    borderRadius: 12,
    ...globalStyles.shadow,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  transactionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  transactionCategory: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  transactionDate: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
});

export default HomeScreen;