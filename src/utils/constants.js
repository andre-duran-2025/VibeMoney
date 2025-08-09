/**
 * Application constants for VibeMoney
 */

// App Information
export const APP_INFO = {
  NAME: 'VibeMoney',
  VERSION: '1.0.0',
  DESCRIPTION: 'Seu dinheiro, sua vibe ✨',
  AUTHOR: 'VibeMoney Team',
  SUPPORT_EMAIL: 'suporte@vibemoney.com',
  WEBSITE: 'https://vibemoney.com',
};

// Storage Keys
export const STORAGE_KEYS = {
  USER_PROFILE: '@VibeMoney:userProfile',
  PROFILE_IMAGE: '@VibeMoney:profileImage',
  ONBOARDING_COMPLETED: '@VibeMoney:onboardingCompleted',
  USER_PREFERENCES: '@VibeMoney:userPreferences',
  TRANSACTIONS: '@VibeMoney:transactions',
  ACCOUNTS: '@VibeMoney:accounts',
  CATEGORIES: '@VibeMoney:categories',
  GOALS: '@VibeMoney:goals',
  THEME: '@VibeMoney:theme',
};

// Transaction Types
export const TRANSACTION_TYPES = {
  INCOME: 'income',
  EXPENSE: 'expense',
  TRANSFER: 'transfer',
};

// Account Types
export const ACCOUNT_TYPES = {
  CHECKING: 'checking',
  SAVINGS: 'savings',
  CREDIT: 'credit',
  INVESTMENT: 'investment',
  CASH: 'cash',
};

// Default Categories
export const DEFAULT_CATEGORIES = {
  [TRANSACTION_TYPES.INCOME]: [
    {
      id: 'income_salary',
      name: 'Salário',
      icon: 'briefcase',
      color: '#4CAF50',
    },
    {
      id: 'income_freelance',
      name: 'Freelance',
      icon: 'laptop',
      color: '#2196F3',
    },
    {
      id: 'income_investment',
      name: 'Investimentos',
      icon: 'trending-up',
      color: '#9C27B0',
    },
    {
      id: 'income_business',
      name: 'Negócio',
      icon: 'storefront',
      color: '#FF9800',
    },
    {
      id: 'income_gift',
      name: 'Presente',
      icon: 'gift',
      color: '#E91E63',
    },
    {
      id: 'income_other',
      name: 'Outros',
      icon: 'ellipsis-horizontal',
      color: '#607D8B',
    },
  ],
  [TRANSACTION_TYPES.EXPENSE]: [
    {
      id: 'expense_food',
      name: 'Alimentação',
      icon: 'restaurant',
      color: '#FF6B6B',
    },
    {
      id: 'expense_transport',
      name: 'Transporte',
      icon: 'car',
      color: '#4ECDC4',
    },
    {
      id: 'expense_entertainment',
      name: 'Lazer',
      icon: 'game-controller',
      color: '#45B7D1',
    },
    {
      id: 'expense_health',
      name: 'Saúde',
      icon: 'medical',
      color: '#96CEB4',
    },
    {
      id: 'expense_education',
      name: 'Educação',
      icon: 'school',
      color: '#FFEAA7',
    },
    {
      id: 'expense_home',
      name: 'Casa',
      icon: 'home',
      color: '#DDA0DD',
    },
    {
      id: 'expense_shopping',
      name: 'Compras',
      icon: 'bag',
      color: '#98D8C8',
    },
    {
      id: 'expense_bills',
      name: 'Contas',
      icon: 'receipt',
      color: '#F7DC6F',
    },
    {
      id: 'expense_other',
      name: 'Outros',
      icon: 'ellipsis-horizontal',
      color: '#BDC3C7',
    },
  ],
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'DD/MM/YYYY',
  API: 'YYYY-MM-DD',
  MONTH_YEAR: 'MM/YYYY',
  FULL: 'DD/MM/YYYY HH:mm',
};

// Currency Settings
export const CURRENCY = {
  SYMBOL: 'R$',
  CODE: 'BRL',
  LOCALE: 'pt-BR',
  DECIMAL_PLACES: 2,
};

// Validation Rules
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 6,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  DESCRIPTION_MAX_LENGTH: 100,
  AMOUNT_MAX_VALUE: 999999.99,
  AMOUNT_MIN_VALUE: 0.01,
};

// API Endpoints (for future backend integration)
export const API_ENDPOINTS = {
  BASE_URL: 'https://api.vibemoney.com/v1',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE: '/user/update',
    DELETE: '/user/delete',
  },
  TRANSACTIONS: {
    LIST: '/transactions',
    CREATE: '/transactions',
    UPDATE: '/transactions/:id',
    DELETE: '/transactions/:id',
  },
  ACCOUNTS: {
    LIST: '/accounts',
    CREATE: '/accounts',
    UPDATE: '/accounts/:id',
    DELETE: '/accounts/:id',
  },
  CATEGORIES: {
    LIST: '/categories',
    CREATE: '/categories',
    UPDATE: '/categories/:id',
    DELETE: '/categories/:id',
  },
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK: 'Erro de conexão. Verifique sua internet.',
  GENERIC: 'Algo deu errado. Tente novamente.',
  VALIDATION: 'Por favor, verifique os dados informados.',
  UNAUTHORIZED: 'Sessão expirada. Faça login novamente.',
  NOT_FOUND: 'Recurso não encontrado.',
  SERVER_ERROR: 'Erro interno do servidor.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  TRANSACTION_CREATED: 'Transação criada com sucesso!',
  TRANSACTION_UPDATED: 'Transação atualizada com sucesso!',
  TRANSACTION_DELETED: 'Transação excluída com sucesso!',
  PROFILE_UPDATED: 'Perfil atualizado com sucesso!',
  ACCOUNT_CREATED: 'Conta criada com sucesso!',
  CATEGORY_CREATED: 'Categoria criada com sucesso!',
};

// Theme Settings
export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
};

// Animation Durations (in milliseconds)
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
};

// Screen Names (for navigation)
export const SCREEN_NAMES = {
  // Auth Flow
  WELCOME: 'Welcome',
  LOGIN: 'Login',
  REGISTER: 'Register',
  
  // Main Tabs
  HOME: 'Home',
  WALLET: 'Wallet',
  ADD_TRANSACTION: 'AddTransaction',
  REPORTS: 'Reports',
  PROFILE: 'Profile',
  
  // Stack Screens
  TRANSACTION_HISTORY: 'TransactionHistory',
  TRANSACTION_DETAILS: 'TransactionDetails',
  ADD_ACCOUNT: 'AddAccount',
  MANAGE_ACCOUNTS: 'ManageAccounts',
  CATEGORIES: 'Categories',
  GOALS: 'Goals',
  BILLS: 'Bills',
  PERSONAL_INFO: 'PersonalInfo',
  SECURITY: 'Security',
  BANK_ACCOUNTS: 'BankAccounts',
};

// Feature Flags (for gradual rollout)
export const FEATURE_FLAGS = {
  DARK_MODE: true,
  BIOMETRIC_AUTH: true,
  BANK_SYNC: false,
  PREMIUM_FEATURES: false,
  ANALYTICS: true,
  PUSH_NOTIFICATIONS: true,
};

// App Limits
export const LIMITS = {
  MAX_ACCOUNTS: 10,
  MAX_CATEGORIES: 50,
  MAX_TRANSACTIONS_PER_PAGE: 20,
  MAX_GOALS: 5,
  MAX_PROFILE_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
};

// Social Media Links
export const SOCIAL_LINKS = {
  INSTAGRAM: 'https://instagram.com/vibemoney',
  TWITTER: 'https://twitter.com/vibemoney',
  FACEBOOK: 'https://facebook.com/vibemoney',
  LINKEDIN: 'https://linkedin.com/company/vibemoney',
};

// Help & Support
export const SUPPORT = {
  FAQ_URL: 'https://vibemoney.com/faq',
  CONTACT_EMAIL: 'suporte@vibemoney.com',
  WHATSAPP: '+5511999999999',
  HELP_CENTER: 'https://help.vibemoney.com',
};