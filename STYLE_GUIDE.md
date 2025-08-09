# VibeMoney - Guia de Estilos

## 🎨 Paleta de Cores

### Cores Principais
```javascript
primary: '#4CAF50'        // Verde vibrante - crescimento, dinheiro, segurança
secondary: '#2196F3'      // Azul claro - estabilidade, confiabilidade
```

### Cores Neutras
```javascript
textPrimary: '#212121'    // Texto principal
textSecondary: '#757575'  // Texto secundário
background: '#F5F5F5'     // Fundo principal
surface: '#FFFFFF'        // Superfícies (cards, modais)
border: '#E0E0E0'         // Bordas
```

### Cores de Status
```javascript
success: '#4CAF50'        // Sucesso
warning: '#FF9800'        // Atenção
error: '#F44336'          // Erro
info: '#2196F3'           // Informação
```

### Cores Funcionais
```javascript
income: '#4CAF50'         // Receitas
expense: '#F44336'        // Despesas
savings: '#FF9800'        // Poupança
investment: '#9C27B0'     // Investimentos
```

## 📝 Tipografia

### Hierarquia de Texto
```javascript
title: {
  fontSize: 24,
  fontWeight: 'bold',
  color: colors.textPrimary,
}

subtitle: {
  fontSize: 18,
  fontWeight: '600',
  color: colors.textPrimary,
}

body: {
  fontSize: 16,
  color: colors.textPrimary,
  lineHeight: 24,
}

caption: {
  fontSize: 14,
  color: colors.textSecondary,
  lineHeight: 20,
}
```

## 🔲 Componentes

### Cards
```javascript
card: {
  backgroundColor: colors.surface,
  borderRadius: 12,
  padding: 16,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3.84,
  elevation: 5,
}
```

### Botões

#### Botão Primário
```javascript
primaryButton: {
  backgroundColor: colors.primary,
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 24,
  alignItems: 'center',
  justifyContent: 'center',
}
```

#### Botão Secundário
```javascript
secondaryButton: {
  backgroundColor: 'transparent',
  borderWidth: 1,
  borderColor: colors.primary,
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 24,
  alignItems: 'center',
  justifyContent: 'center',
}
```

### Inputs
```javascript
input: {
  borderWidth: 1,
  borderColor: colors.border,
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 16,
  fontSize: 16,
  color: colors.textPrimary,
  backgroundColor: colors.surface,
}
```

## 📐 Espaçamento

### Sistema de Grid (8px)
```javascript
// Espaçamentos baseados em múltiplos de 8
xs: 4,   // 0.5 * 8
sm: 8,   // 1 * 8
md: 16,  // 2 * 8
lg: 24,  // 3 * 8
xl: 32,  // 4 * 8
xxl: 40, // 5 * 8
```

### Margens e Paddings
```javascript
padding: 16,
paddingHorizontal: 16,
paddingVertical: 16,
margin: 16,
marginHorizontal: 16,
marginVertical: 16,
```

## 🎯 Ícones

### Biblioteca: Expo Vector Icons (Ionicons)

### Ícones Principais
```javascript
// Navegação
home: 'home'
wallet: 'wallet'
add: 'add-circle'
reports: 'bar-chart'
profile: 'person'

// Ações
edit: 'pencil'
delete: 'trash'
save: 'checkmark'
cancel: 'close'

// Status
success: 'checkmark-circle'
warning: 'warning'
error: 'alert-circle'
info: 'information-circle'

// Transações
income: 'arrow-down'
expense: 'arrow-up'
transfer: 'swap-horizontal'
```

## 🌟 Animações

### Transições Padrão
```javascript
// Duração
fast: 200,
normal: 300,
slow: 500,

// Easing
easeInOut: 'ease-in-out',
easeIn: 'ease-in',
easeOut: 'ease-out',
```

### Animações Comuns
- **Fade In/Out**: Aparição suave de elementos
- **Slide**: Transições entre telas
- **Scale**: Feedback de toque em botões
- **Bounce**: Confirmações e sucessos

## 📱 Layout

### Breakpoints
```javascript
// Tamanhos de tela
small: 320,   // iPhone SE
medium: 375,  // iPhone padrão
large: 414,   // iPhone Plus
tablet: 768,  // iPad
```

### Safe Areas
- Sempre usar `SafeAreaView` nas telas principais
- Considerar notch e barras de status
- Padding adequado para diferentes dispositivos

## 🎨 Gradientes

### Gradientes Principais
```javascript
primaryGradient: ['#4CAF50', '#66BB6A'],
secondaryGradient: ['#2196F3', '#42A5F5'],
backgroundGradient: ['#F5F5F5', '#FAFAFA'],
```

### Uso de Gradientes
- Cards de destaque (saldo, resumos)
- Botões especiais
- Fundos de seções importantes

## 🌙 Modo Escuro (Futuro)

### Cores para Modo Escuro
```javascript
dark: {
  primary: '#66BB6A',
  secondary: '#42A5F5',
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0B0',
  background: '#121212',
  surface: '#1E1E1E',
  border: '#333333',
}
```

## ✅ Boas Práticas

### Acessibilidade
- Contraste mínimo de 4.5:1 para texto normal
- Contraste mínimo de 3:1 para texto grande
- Áreas de toque mínimas de 44x44 pontos
- Labels descritivos para leitores de tela

### Performance
- Usar `StyleSheet.create()` para estilos
- Evitar estilos inline quando possível
- Otimizar imagens e ícones
- Implementar lazy loading quando necessário

### Consistência
- Seguir o design system estabelecido
- Reutilizar componentes quando possível
- Manter padrões de nomenclatura
- Documentar variações de componentes

---

**Versão**: 1.0  
**Data**: Janeiro 2024  
**Equipe**: VibeMoney Design System