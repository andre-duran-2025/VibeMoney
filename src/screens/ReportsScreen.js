import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';

const { width } = Dimensions.get('window');

const ReportsScreen = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const periods = [
    { key: 'week', label: 'Semana' },
    { key: 'month', label: 'Mês' },
    { key: 'year', label: 'Ano' },
  ];

  const categories = [
    { name: 'Alimentação', amount: 450.30, percentage: 35, color: '#FF6B6B' },
    { name: 'Transporte', amount: 280.50, percentage: 22, color: '#4ECDC4' },
    { name: 'Lazer', amount: 180.00, percentage: 14, color: '#45B7D1' },
    { name: 'Saúde', amount: 120.75, percentage: 9, color: '#96CEB4' },
    { name: 'Outros', amount: 250.45, percentage: 20, color: '#FFEAA7' },
  ];

  const renderPeriodButton = (period) => (
    <TouchableOpacity
      key={period.key}
      style={[
        styles.periodButton,
        selectedPeriod === period.key && styles.periodButtonActive,
      ]}
      onPress={() => setSelectedPeriod(period.key)}
    >
      <Text
        style={[
          styles.periodButtonText,
          selectedPeriod === period.key && styles.periodButtonTextActive,
        ]}
      >
        {period.label}
      </Text>
    </TouchableOpacity>
  );

  const renderCategoryItem = (category, index) => (
    <View key={index} style={styles.categoryItem}>
      <View style={styles.categoryLeft}>
        <View style={[styles.categoryColor, { backgroundColor: category.color }]} />
        <Text style={styles.categoryName}>{category.name}</Text>
      </View>
      <View style={styles.categoryRight}>
        <Text style={styles.categoryAmount}>R$ {category.amount.toFixed(2).replace('.', ',')}</Text>
        <Text style={styles.categoryPercentage}>{category.percentage}%</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={globalStyles.title}>Relatórios</Text>
        <TouchableOpacity style={styles.exportButton}>
          <Ionicons name="download-outline" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Period Selector */}
        <View style={styles.periodSelector}>
          {periods.map(renderPeriodButton)}
        </View>

        {/* Summary Cards */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Receitas</Text>
            <Text style={[styles.summaryAmount, { color: colors.success }]}>
              +R$ 3.500,00
            </Text>
            <View style={styles.summaryChange}>
              <Ionicons name="trending-up" size={16} color={colors.success} />
              <Text style={[styles.changeText, { color: colors.success }]}>+12%</Text>
            </View>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Despesas</Text>
            <Text style={[styles.summaryAmount, { color: colors.error }]}>
              -R$ 1.281,00
            </Text>
            <View style={styles.summaryChange}>
              <Ionicons name="trending-down" size={16} color={colors.error} />
              <Text style={[styles.changeText, { color: colors.error }]}>-5%</Text>
            </View>
          </View>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Saldo do Período</Text>
          <Text style={styles.balanceAmount}>R$ 2.219,00</Text>
          <Text style={styles.balanceSubtext}>Economia de 63% da receita</Text>
        </View>

        {/* Chart Placeholder */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Gastos por Categoria</Text>
          <View style={styles.chartPlaceholder}>
            <Ionicons name="pie-chart" size={80} color={colors.textSecondary} />
            <Text style={styles.chartText}>Gráfico em desenvolvimento</Text>
          </View>
        </View>

        {/* Categories List */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Detalhes por Categoria</Text>
          {categories.map(renderCategoryItem)}
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Goals')}
          >
            <Ionicons name="target-outline" size={24} color={colors.primary} />
            <Text style={styles.actionText}>Definir Metas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Bills')}
          >
            <Ionicons name="calendar-outline" size={24} color={colors.primary} />
            <Text style={styles.actionText}>Contas Fixas</Text>
          </TouchableOpacity>
        </View>
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
  exportButton: {
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
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
    ...globalStyles.shadow,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  periodButtonActive: {
    backgroundColor: colors.primary,
  },
  periodButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  periodButtonTextActive: {
    color: colors.surface,
  },
  summaryContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    ...globalStyles.shadow,
  },
  summaryLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  summaryAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  summaryChange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeText: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 4,
  },
  balanceCard: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
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
    marginBottom: 8,
  },
  balanceSubtext: {
    fontSize: 14,
    color: colors.surface,
    opacity: 0.8,
  },
  chartContainer: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    ...globalStyles.shadow,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 16,
  },
  chartPlaceholder: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 12,
  },
  categoriesContainer: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    ...globalStyles.shadow,
  },
  categoriesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  categoryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  categoryName: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  categoryRight: {
    alignItems: 'flex-end',
  },
  categoryAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  categoryPercentage: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    ...globalStyles.shadow,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default ReportsScreen;