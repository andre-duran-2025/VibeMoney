import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';

const AddTransactionScreen = ({ navigation, route }) => {
  const { type = 'expense' } = route.params || {};
  const [transactionType, setTransactionType] = useState(type);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState('1');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const categories = {
    expense: [
      { id: '1', name: 'Alimentação', icon: 'restaurant' },
      { id: '2', name: 'Transporte', icon: 'car' },
      { id: '3', name: 'Lazer', icon: 'game-controller' },
      { id: '4', name: 'Saúde', icon: 'medical' },
      { id: '5', name: 'Educação', icon: 'school' },
      { id: '6', name: 'Casa', icon: 'home' },
      { id: '7', name: 'Roupas', icon: 'shirt' },
      { id: '8', name: 'Outros', icon: 'ellipsis-horizontal' },
    ],
    income: [
      { id: '1', name: 'Salário', icon: 'briefcase' },
      { id: '2', name: 'Freelance', icon: 'laptop' },
      { id: '3', name: 'Investimentos', icon: 'trending-up' },
      { id: '4', name: 'Vendas', icon: 'storefront' },
      { id: '5', name: 'Presente', icon: 'gift' },
      { id: '6', name: 'Outros', icon: 'ellipsis-horizontal' },
    ],
  };

  const accounts = [
    { id: '1', name: 'Conta Corrente', bank: 'Banco do Brasil' },
    { id: '2', name: 'Poupança', bank: 'Caixa Econômica' },
    { id: '3', name: 'Cartão de Crédito', bank: 'Nubank' },
  ];

  const handleSave = () => {
    if (!amount || !description || !selectedCategory) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const transaction = {
      type: transactionType,
      amount: parseFloat(amount.replace(',', '.')),
      description,
      category: selectedCategory,
      account: selectedAccount,
      date,
    };

    console.log('Nova transação:', transaction);
    Alert.alert('Sucesso', 'Transação adicionada com sucesso!', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  const renderTypeButton = (type, label, icon) => (
    <TouchableOpacity
      style={[
        styles.typeButton,
        transactionType === type && styles.typeButtonActive,
        transactionType === type && type === 'income' && styles.typeButtonIncomeActive,
        transactionType === type && type === 'expense' && styles.typeButtonExpenseActive,
      ]}
      onPress={() => {
        setTransactionType(type);
        setSelectedCategory(null);
      }}
    >
      <Ionicons
        name={icon}
        size={24}
        color={
          transactionType === type
            ? colors.surface
            : colors.textSecondary
        }
      />
      <Text
        style={[
          styles.typeButtonText,
          transactionType === type && styles.typeButtonTextActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderCategory = (category) => (
    <TouchableOpacity
      key={category.id}
      style={[
        styles.categoryButton,
        selectedCategory === category.id && styles.categoryButtonActive,
      ]}
      onPress={() => setSelectedCategory(category.id)}
    >
      <View
        style={[
          styles.categoryIcon,
          selectedCategory === category.id && styles.categoryIconActive,
        ]}
      >
        <Ionicons
          name={category.icon}
          size={20}
          color={
            selectedCategory === category.id
              ? colors.surface
              : colors.primary
          }
        />
      </View>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === category.id && styles.categoryTextActive,
        ]}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={globalStyles.title}>Nova Transação</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Type Selector */}
        <View style={styles.typeSelector}>
          {renderTypeButton('income', 'Receita', 'arrow-down')}
          {renderTypeButton('expense', 'Despesa', 'arrow-up')}
        </View>

        {/* Amount Input */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Valor</Text>
          <View style={styles.amountContainer}>
            <Text style={styles.currencySymbol}>R$</Text>
            <TextInput
              style={styles.amountInput}
              value={amount}
              onChangeText={setAmount}
              placeholder="0,00"
              keyboardType="numeric"
              placeholderTextColor={colors.textSecondary}
            />
          </View>
        </View>

        {/* Description Input */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descrição</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            placeholder="Ex: Almoço no restaurante"
            placeholderTextColor={colors.textSecondary}
          />
        </View>

        {/* Category Selector */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categoria</Text>
          <View style={styles.categoriesGrid}>
            {categories[transactionType].map(renderCategory)}
          </View>
        </View>

        {/* Account Selector */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conta</Text>
          <View style={styles.accountSelector}>
            {accounts.map((account) => (
              <TouchableOpacity
                key={account.id}
                style={[
                  styles.accountOption,
                  selectedAccount === account.id && styles.accountOptionActive,
                ]}
                onPress={() => setSelectedAccount(account.id)}
              >
                <View style={styles.accountInfo}>
                  <Text
                    style={[
                      styles.accountName,
                      selectedAccount === account.id && styles.accountNameActive,
                    ]}
                  >
                    {account.name}
                  </Text>
                  <Text
                    style={[
                      styles.accountBank,
                      selectedAccount === account.id && styles.accountBankActive,
                    ]}
                  >
                    {account.bank}
                  </Text>
                </View>
                {selectedAccount === account.id && (
                  <Ionicons name="checkmark" size={20} color={colors.surface} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Date Input */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data</Text>
          <TouchableOpacity style={styles.dateButton}>
            <Ionicons name="calendar-outline" size={20} color={colors.textSecondary} />
            <Text style={styles.dateText}>{date}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Save Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar Transação</Text>
        </TouchableOpacity>
      </View>
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
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.shadow,
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  typeSelector: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
    ...globalStyles.shadow,
  },
  typeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 8,
  },
  typeButtonActive: {
    backgroundColor: colors.primary,
  },
  typeButtonIncomeActive: {
    backgroundColor: colors.success,
  },
  typeButtonExpenseActive: {
    backgroundColor: colors.error,
  },
  typeButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textSecondary,
    marginLeft: 8,
  },
  typeButtonTextActive: {
    color: colors.surface,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 12,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    ...globalStyles.shadow,
  },
  currencySymbol: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginRight: 8,
  },
  amountInput: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    paddingVertical: 16,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: colors.textPrimary,
    ...globalStyles.shadow,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryButton: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: colors.surface,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.shadow,
  },
  categoryButtonActive: {
    backgroundColor: colors.primary,
  },
  categoryIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: `${colors.primary}15`,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryIconActive: {
    backgroundColor: colors.surface,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  categoryTextActive: {
    color: colors.surface,
  },
  accountSelector: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    ...globalStyles.shadow,
  },
  accountOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  accountOptionActive: {
    backgroundColor: colors.primary,
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  accountNameActive: {
    color: colors.surface,
  },
  accountBank: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  accountBankActive: {
    color: colors.surface,
    opacity: 0.8,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    ...globalStyles.shadow,
  },
  dateText: {
    fontSize: 16,
    color: colors.textPrimary,
    marginLeft: 12,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.background,
  },
  saveButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    ...globalStyles.shadow,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.surface,
  },
});

export default AddTransactionScreen;