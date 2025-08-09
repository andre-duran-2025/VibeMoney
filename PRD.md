# VibeMoney - Product Requirements Document (PRD)

## 1. Visão Geral do Produto

### 1.1 Propósito
O VibeMoney é um aplicativo móvel moderno e intuitivo para controle financeiro pessoal, desenvolvido com React Native e Expo. O objetivo é ajudar usuários a gerenciar suas finanças de forma simples, visual e eficiente.

### 1.2 Escopo
Aplicativo móvel multiplataforma (iOS e Android) com funcionalidades de:
- Controle de receitas e despesas
- Categorização de transações
- Relatórios e análises financeiras
- Metas e objetivos financeiros
- Sincronização com contas bancárias (futuro)

### 1.3 Público-Alvo
- **Primário**: Jovens adultos (25-35 anos) que buscam organizar suas finanças
- **Secundário**: Pessoas de todas as idades interessadas em controle financeiro
- **Características**: Usuários de smartphone, familiarizados com apps, buscam simplicidade

## 2. Objetivos e Metas

### 2.1 Objetivos de Negócio
- Criar uma solução intuitiva para controle financeiro pessoal
- Estabelecer base de usuários engajados
- Preparar fundação para monetização futura

### 2.2 Metas de Produto
- Interface moderna e amigável
- Performance otimizada
- Funcionalidades essenciais bem implementadas
- Base sólida para expansão futura

## 3. Funcionalidades

### 3.1 Funcionalidades Gratuitas (MVP)

#### 3.1.1 Autenticação e Perfil
- Cadastro e login de usuário
- Perfil personalizado com foto
- Configurações básicas

#### 3.1.2 Transações
- Adicionar receitas e despesas
- Categorização de transações
- Histórico de transações
- Edição e exclusão de transações

#### 3.1.3 Dashboard
- Visão geral do saldo
- Resumo mensal de receitas/despesas
- Transações recentes
- Ações rápidas

#### 3.1.4 Categorias
- Categorias pré-definidas
- Personalização de categorias
- Ícones e cores para categorias

#### 3.1.5 Relatórios Básicos
- Gráficos de receitas vs despesas
- Análise por categoria
- Relatórios mensais

### 3.2 Funcionalidades Premium (Futuro)

#### 3.2.1 Metas e Objetivos
- Definição de metas financeiras
- Acompanhamento de progresso
- Notificações de metas

#### 3.2.2 Relatórios Avançados
- Análises detalhadas
- Projeções financeiras
- Comparativos históricos
- Exportação de relatórios

#### 3.2.3 Sincronização Bancária
- Conexão com contas bancárias
- Importação automática de transações
- Reconciliação de dados

#### 3.2.4 Recursos Premium
- Backup na nuvem
- Múltiplas contas
- Orçamentos avançados
- Suporte prioritário

## 4. Requisitos Técnicos

### 4.1 Frontend
- **Framework**: React Native com Expo
- **Linguagem**: JavaScript/TypeScript
- **Navegação**: React Navigation
- **Estado**: Context API + AsyncStorage
- **UI**: Componentes customizados + Expo Vector Icons

### 4.2 Backend (Planejado)
- **Plataforma**: Supabase
- **Banco de Dados**: PostgreSQL
- **Autenticação**: Supabase Auth
- **Storage**: Supabase Storage

### 4.3 Pagamentos (Futuro)
- **Processador**: Stripe
- **Modelo**: Assinatura mensal/anual

### 4.4 Compatibilidade
- iOS 12.0+
- Android 6.0+ (API 23+)
- Suporte a tablets

## 5. Design e UX

### 5.1 Princípios de Design
- **Simplicidade**: Interface limpa e intuitiva
- **Consistência**: Padrões visuais uniformes
- **Acessibilidade**: Suporte a diferentes necessidades
- **Performance**: Carregamento rápido e responsivo

### 5.2 Paleta de Cores
- **Primária**: Verde (#4CAF50) - crescimento, dinheiro
- **Secundária**: Azul (#2196F3) - confiabilidade
- **Neutras**: Cinzas para texto e fundos
- **Status**: Verde (receita), Vermelho (despesa)

### 5.3 Tipografia
- Fonte do sistema (San Francisco/Roboto)
- Hierarquia clara de tamanhos
- Boa legibilidade em todos os tamanhos

## 6. Arquitetura da Informação

### 6.1 Estrutura de Navegação
```
App
├── Onboarding
│   ├── Welcome
│   ├── Features
│   └── Auth
├── Main Tabs
│   ├── Home (Dashboard)
│   ├── Wallet (Transações)
│   ├── Add (Nova Transação)
│   ├── Reports (Relatórios)
│   └── Profile (Perfil)
└── Stack Screens
    ├── Transaction Details
    ├── Add Transaction
    ├── Categories
    ├── Settings
    └── Goals
```

### 6.2 Fluxos Principais
1. **Onboarding**: Welcome → Features → Auth → Home
2. **Adicionar Transação**: Home → Add → Confirmation → Home
3. **Ver Relatórios**: Home → Reports → Details
4. **Gerenciar Perfil**: Profile → Settings → Update

## 7. Modelo de Negócio

### 7.1 Estratégia Freemium
- **Gratuito**: Funcionalidades básicas completas
- **Premium**: Recursos avançados e sincronização
- **Preço**: R$ 9,90/mês ou R$ 99,90/ano

### 7.2 Fontes de Receita
1. Assinaturas Premium
2. Parcerias com instituições financeiras (futuro)
3. Recursos educacionais premium (futuro)

## 8. Métricas de Sucesso

### 8.1 Métricas de Produto
- Taxa de retenção (D1, D7, D30)
- Frequência de uso
- Número de transações adicionadas
- Tempo médio na aplicação

### 8.2 Métricas de Negócio
- Número de usuários ativos
- Taxa de conversão para Premium
- Receita recorrente mensal (MRR)
- Net Promoter Score (NPS)

## 9. Roadmap

### 9.1 Fase 1 - MVP (Atual)
- ✅ Estrutura básica do app
- ✅ Telas principais implementadas
- ✅ Navegação funcional
- ✅ Design system estabelecido

### 9.2 Fase 2 - Funcionalidades Core
- 🔄 Sistema de autenticação
- 🔄 Persistência de dados local
- 🔄 CRUD de transações
- 🔄 Relatórios básicos

### 9.3 Fase 3 - Backend e Sync
- ⏳ Integração com Supabase
- ⏳ Sincronização de dados
- ⏳ Sistema de backup

### 9.4 Fase 4 - Premium Features
- ⏳ Metas e objetivos
- ⏳ Relatórios avançados
- ⏳ Integração bancária
- ⏳ Sistema de pagamentos

## 10. Considerações Técnicas

### 10.1 Performance
- Otimização de imagens
- Lazy loading de componentes
- Caching inteligente
- Minimização de re-renders

### 10.2 Segurança
- Criptografia de dados sensíveis
- Autenticação segura
- Validação de inputs
- Proteção contra ataques comuns

### 10.3 Acessibilidade
- Suporte a leitores de tela
- Contraste adequado
- Navegação por teclado
- Textos alternativos

## 11. Riscos e Mitigações

### 11.1 Riscos Técnicos
- **Risco**: Performance em dispositivos antigos
- **Mitigação**: Testes extensivos e otimizações

### 11.2 Riscos de Produto
- **Risco**: Baixa adoção inicial
- **Mitigação**: Foco na experiência do usuário e marketing direcionado

### 11.3 Riscos de Negócio
- **Risco**: Concorrência estabelecida
- **Mitigação**: Diferenciação pela simplicidade e design

---

**Versão**: 1.0  
**Data**: Janeiro 2024  
**Autor**: Equipe VibeMoney