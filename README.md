# 💰 VibeMoney

> **Seu dinheiro, sua vibe ✨**

Um aplicativo móvel moderno e intuitivo para controle financeiro pessoal, desenvolvido com React Native e Expo.

## 📱 Sobre o Projeto

O VibeMoney é um aplicativo de gestão financeira pessoal que oferece uma experiência moderna e intuitiva para controlar gastos, receitas, contas a pagar e planejamento financeiro. Desenvolvido com foco na experiência do usuário e seguindo um modelo freemium.

### 🎯 Objetivos

- Oferecer uma experiência de usuário fácil, intuitiva e funcional
- Ajudar os usuários a controlar gastos, receitas, contas a pagar e contas pagas
- Reduzir o estresse financeiro através de alertas e organização
- Construir uma base de usuários engajada e leal

## ✨ Funcionalidades

### 🆓 Funcionalidades Gratuitas

- **Registro de Transações**: Adição manual de receitas e despesas com categorias, subcategorias, data e descrição
- **Visão Geral do Saldo**: Dashboard simples com o saldo atual das contas
- **Contas a Pagar/Receber**: Registro de contas com data de vencimento e status (paga/pendente)
- **Categorização**: Criação e gerenciamento de categorias e subcategorias para despesas e receitas
- **Relatórios Básicos**: Visualização de gastos por categoria em um período selecionado
- **Perfil do Usuário**: Gerenciamento de informações pessoais e configurações

### 💎 Funcionalidades Premium (Planejadas)

- **Alertas de Pagamento**: Notificações push para contas a vencer e pagamentos atrasados
- **Orçamentos Personalizados**: Criação de orçamentos para categorias específicas com acompanhamento do progresso
- **Sincronização Bancária**: Conexão com contas bancárias para importação automática de transações
- **Relatórios Avançados**: Gráficos detalhados de fluxo de caixa, análise de tendências, projeções financeiras
- **Multi-Contas**: Gerenciamento de múltiplas contas bancárias e carteiras
- **Exportação de Dados**: Exportação de dados para formatos como CSV, PDF ou Excel
- **Recursos de Segurança**: Proteção por senha/biometria para acesso ao aplicativo
- **Suporte Prioritário**: Acesso a um canal de suporte exclusivo

## 🏗️ Arquitetura do Projeto

### 📁 Estrutura de Pastas

```
VibeMoney/
├── assets/                 # Recursos estáticos (imagens, ícones, animações)
├── src/
│   ├── components/         # Componentes reutilizáveis
│   ├── contexts/          # Contextos React (ProfileContext)
│   ├── hooks/             # Hooks customizados
│   ├── navigation/        # Configuração de navegação
│   ├── screens/           # Telas do aplicativo
│   ├── styles/            # Estilos globais e cores
│   └── utils/             # Utilitários e helpers
├── App.js                 # Componente raiz
├── app.json              # Configuração do Expo
└── package.json          # Dependências e scripts
```

### 🧭 Navegação

O aplicativo utiliza uma arquitetura de navegação em três níveis:

1. **Onboarding Stack**: Telas de boas-vindas e introdução
   - WelcomeScreen
   - FeaturesScreen
   - ControlScreen
   - GetStartedScreen
   - AuthScreen

2. **Main Tab Navigator**: Navegação principal do aplicativo
   - Home (Início)
   - Wallet (Carteira)
   - Add (Adicionar Transação)
   - Reports (Relatórios)
   - Profile (Perfil)

3. **App Stack Navigator**: Telas modais e secundárias
   - Telas de configuração de perfil
   - Telas de gerenciamento de contas
   - Telas de categorias e metas

### 🎨 Design System

#### Paleta de Cores

- **Primária**: `#4CAF50` (Verde vibrante - crescimento, dinheiro, segurança)
- **Secundária**: `#2196F3` (Azul claro - estabilidade, confiabilidade)
- **Neutro Escuro**: `#212121` (Texto principal)
- **Neutro Médio**: `#757575` (Texto secundário)
- **Neutro Claro**: `#F5F5F5` (Fundos e bordas)
- **Sucesso**: `#4CAF50`
- **Atenção**: `#FF9800`
- **Erro**: `#F44336`

#### Componentes de UI

- Design limpo, intuitivo e moderno
- Navegação fácil e direta
- Alertas claros e personalizáveis
- Gráficos e relatórios visuais
- Suporte a modo claro/escuro (em desenvolvimento)

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React Native**: Framework para desenvolvimento mobile
- **Expo**: Plataforma de desenvolvimento e build
- **React Navigation**: Navegação entre telas
- **Expo Linear Gradient**: Gradientes visuais
- **Expo Vector Icons**: Ícones do aplicativo
- **React Native Chart Kit**: Gráficos e visualizações
- **Lottie React Native**: Animações

### Gerenciamento de Estado
- **React Context API**: Gerenciamento de estado global
- **AsyncStorage**: Armazenamento local persistente

### Backend (Planejado)
- **Supabase**: Backend as a Service
- **Supabase Auth**: Autenticação de usuários
- **Supabase Database**: Banco de dados PostgreSQL
- **Stripe**: Processamento de pagamentos

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI
- Dispositivo móvel com Expo Go ou emulador

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/VibeMoney.git
   cd VibeMoney
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**
   ```bash
   npm start
   # ou
   yarn start
   # ou
   expo start
   ```

4. **Abra no dispositivo**
   - Escaneie o QR code com o Expo Go (Android/iOS)
   - Ou execute em um emulador

### Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm run android`: Executa no emulador Android
- `npm run ios`: Executa no simulador iOS
- `npm run web`: Executa na versão web

## 📱 Telas Implementadas

### Onboarding
- ✅ Tela de Boas-vindas
- ✅ Tela de Recursos
- ✅ Tela de Controle
- ✅ Tela "Vamos Começar"
- ✅ Tela de Autenticação

### Aplicativo Principal
- ✅ Home (Dashboard principal)
- ✅ Carteira (Visão geral financeira)
- ✅ Adicionar Transação
- ✅ Relatórios
- ✅ Perfil do Usuário
- ✅ Metas Financeiras
- ✅ Contas a Pagar
- ✅ Histórico de Transações
- ✅ Gerenciar Contas
- ✅ Informações Pessoais
- ✅ Segurança
- ✅ Contas Bancárias
- ✅ Categorias

## 🎯 Roadmap

### Versão 1.0 (Atual)
- [x] Interface de usuário completa
- [x] Navegação entre telas
- [x] Gerenciamento de perfil
- [x] Estrutura de dados local
- [ ] Funcionalidades básicas de transações
- [ ] Relatórios simples

### Versão 1.1 (Próxima)
- [ ] Integração com Supabase
- [ ] Autenticação real de usuários
- [ ] Persistência de dados na nuvem
- [ ] Notificações push

### Versão 2.0 (Futuro)
- [ ] Funcionalidades Premium
- [ ] Sincronização bancária
- [ ] Relatórios avançados
- [ ] Modo escuro completo
- [ ] Exportação de dados

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**André** - Desenvolvedor Principal

## 📞 Suporte

Para suporte, entre em contato através do email: suporte@vibemoney.com

---

<div align="center">
  <p>Feito com ❤️ e muito ☕</p>
  <p><strong>VibeMoney - Seu dinheiro, sua vibe ✨</strong></p>
</div>