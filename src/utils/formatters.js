/**
 * Utility functions for formatting data in the VibeMoney app
 */

/**
 * Format currency values to Brazilian Real format
 * @param {number} value - The numeric value to format
 * @param {boolean} showSymbol - Whether to show the R$ symbol
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value, showSymbol = true) => {
  if (typeof value !== 'number' || isNaN(value)) {
    return showSymbol ? 'R$ 0,00' : '0,00';
  }

  const formatted = Math.abs(value)
    .toFixed(2)
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const symbol = showSymbol ? 'R$ ' : '';
  const sign = value < 0 ? '-' : '';

  return `${sign}${symbol}${formatted}`;
};

/**
 * Format date to Brazilian format (DD/MM/YYYY)
 * @param {Date|string} date - Date object or ISO string
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  if (!date) return '';

  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    return '';
  }

  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();

  return `${day}/${month}/${year}`;
};

/**
 * Format date to relative time (hoje, ontem, etc.)
 * @param {Date|string} date - Date object or ISO string
 * @returns {string} Relative time string
 */
export const formatRelativeDate = (date) => {
  if (!date) return '';

  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffTime = now.getTime() - dateObj.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'Hoje';
  } else if (diffDays === 1) {
    return 'Ontem';
  } else if (diffDays < 7) {
    return `${diffDays} dias atrás`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? '1 semana atrás' : `${weeks} semanas atrás`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return months === 1 ? '1 mês atrás' : `${months} meses atrás`;
  } else {
    const years = Math.floor(diffDays / 365);
    return years === 1 ? '1 ano atrás' : `${years} anos atrás`;
  }
};

/**
 * Format percentage values
 * @param {number} value - The percentage value (0-100)
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted percentage string
 */
export const formatPercentage = (value, decimals = 1) => {
  if (typeof value !== 'number' || isNaN(value)) {
    return '0%';
  }

  return `${value.toFixed(decimals).replace('.', ',')}%`;
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 50) => {
  if (!text || typeof text !== 'string') {
    return '';
  }

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.substring(0, maxLength - 3)}...`;
};

/**
 * Capitalize first letter of each word
 * @param {string} text - Text to capitalize
 * @returns {string} Capitalized text
 */
export const capitalizeWords = (text) => {
  if (!text || typeof text !== 'string') {
    return '';
  }

  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Format phone number to Brazilian format
 * @param {string} phone - Phone number string
 * @returns {string} Formatted phone number
 */
export const formatPhone = (phone) => {
  if (!phone || typeof phone !== 'string') {
    return '';
  }

  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');

  // Format based on length
  if (cleaned.length === 11) {
    // Mobile: (11) 99999-9999
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (cleaned.length === 10) {
    // Landline: (11) 9999-9999
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  return phone;
};

/**
 * Format CPF to Brazilian format
 * @param {string} cpf - CPF string
 * @returns {string} Formatted CPF
 */
export const formatCPF = (cpf) => {
  if (!cpf || typeof cpf !== 'string') {
    return '';
  }

  // Remove all non-numeric characters
  const cleaned = cpf.replace(/\D/g, '');

  // Format: 999.999.999-99
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  return cpf;
};

/**
 * Generate initials from name
 * @param {string} name - Full name
 * @returns {string} Initials (max 2 characters)
 */
export const getInitials = (name) => {
  if (!name || typeof name !== 'string') {
    return 'U';
  }

  const words = name.trim().split(' ').filter(word => word.length > 0);
  
  if (words.length === 0) {
    return 'U';
  }
  
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }
  
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
};

/**
 * Validate email format
 * @param {string} email - Email string
 * @returns {boolean} Whether email is valid
 */
export const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate CPF format and check digit
 * @param {string} cpf - CPF string
 * @returns {boolean} Whether CPF is valid
 */
export const isValidCPF = (cpf) => {
  if (!cpf || typeof cpf !== 'string') {
    return false;
  }

  // Remove all non-numeric characters
  const cleaned = cpf.replace(/\D/g, '');

  // Check length
  if (cleaned.length !== 11) {
    return false;
  }

  // Check for repeated digits
  if (/^(\d)\1{10}$/.test(cleaned)) {
    return false;
  }

  // Validate check digits
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleaned.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleaned.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleaned.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleaned.charAt(10))) return false;

  return true;
};