import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';

const WalletScreen = ({ navigation }) => {
  const accounts = [
    {
      id: '1',
      name: 'Conta Corrente',
      bank: 'Banco do Brasil',
      balance: 2450.75,
      type: 'checking',
    },
    {
      id: '2',
      name: 'Poupança',
      bank: 'Caixa Econômica',
      balance: 5200.00,
      type: 'savings',
    },
    {
      id: '3',
      name: 'Cartão de Crédito',
      bank: 'Nubank',
      balance: -850.30,
      type: 'credit',
    },
  ];

  const getAccountIcon = (type) => {
    switch (type) {
      case 'checking':
        return 'card-outline';
      case 'savings':
        return 'wallet-outline';
      case 'credit':
        return 'card';
      default:
        return 'wallet-outline';
    }
  };

  const getBalanceColor = (balance, type) => {
    if (type === 'credit') {
      return balance < 0 ? colors.error : colors.success;
    }
    return balance >= 0 ? colors.success : colors.error;
  };

  const renderAccount = ({ item }) => (
    <TouchableOpacity
      style={styles.accountCard}
      onPress={() => navigation.navigate('TransactionHistory', { accountId: item.id })}
    >
      <View style={styles.accountHeader}>
        <View style={styles.accountIcon}>
          <Ionicons
            name={getAccountIcon(item.type)}
            size={24}
            color={colors.primary}
          />
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.accountName}>{item.name}</Text>
          <Text style={styles.bankName}>{item.bank}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
      </View>
      <View style={styles.balanceContainer}>
        <Text
          style={[
            styles.balance,
            { color: getBalanceColor(item.balance, item.type) },
          ]}
        >
          {item.type === 'credit' && item.balance < 0 ? '-' : ''}R$ {Math.abs(item.balance).toFixed(2).replace('.', ',')}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={globalStyles.title}>Carteira</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddAccount')}
        >
          <Ionicons name="add" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>Patrimônio Total</Text>
          <Text style={styles.totalAmount}>R$ 6.800,45</Text>
          <Text style={styles.totalSubtext}>Atualizado agora</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suas Contas</Text>
          <FlatList
            data={accounts}
            renderItem={renderAccount}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <TouchableOpacity
          style={styles.manageButton}
          onPress={() => navigation.navigate('ManageAccounts')}
        >
          <Ionicons name="settings-outline" size={20} color={colors.primary} />
          <Text style={styles.manageButtonText}>Gerenciar Contas</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.shadow,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  totalSection: {
    alignItems: 'center',
    paddingVertical: 32,
    marginBottom: 24,
  },
  totalLabel: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  totalAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  totalSubtext: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 16,
  },
  accountCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    ...globalStyles.shadow,
  },
  accountHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  accountIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${colors.primary}15`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  bankName: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  balanceContainer: {
    alignItems: 'flex-end',
  },
  balance: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  manageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    ...globalStyles.shadow,
  },
  manageButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
    marginLeft: 8,
  },
});

export default WalletScreen;