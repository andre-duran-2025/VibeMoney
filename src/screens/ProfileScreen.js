import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useProfile } from '../contexts/ProfileContext';
import { colors } from '../styles/colors';
import { globalStyles } from '../styles/globalStyles';

const ProfileScreen = ({ navigation }) => {
  const { profileImage, updateProfileImage } = useProfile();

  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos de permissão para acessar suas fotos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      updateProfileImage(result.assets[0].uri);
    }
  };

  const profileOptions = [
    {
      id: '1',
      title: 'Informações Pessoais',
      icon: 'person-outline',
      screen: 'PersonalInfo',
      description: 'Nome, email, telefone'
    },
    {
      id: '2',
      title: 'Segurança',
      icon: 'shield-outline',
      screen: 'Security',
      description: 'Senha, biometria, PIN'
    },
    {
      id: '3',
      title: 'Contas Bancárias',
      icon: 'card-outline',
      screen: 'BankAccounts',
      description: 'Gerenciar contas vinculadas'
    },
    {
      id: '4',
      title: 'Categorias',
      icon: 'list-outline',
      screen: 'Categories',
      description: 'Personalizar categorias'
    },
    {
      id: '5',
      title: 'Notificações',
      icon: 'notifications-outline',
      screen: 'Notifications',
      description: 'Alertas e lembretes'
    },
    {
      id: '6',
      title: 'Backup e Sincronização',
      icon: 'cloud-outline',
      screen: 'Backup',
      description: 'Dados na nuvem'
    },
  ];

  const supportOptions = [
    {
      id: '1',
      title: 'Central de Ajuda',
      icon: 'help-circle-outline',
      action: 'help'
    },
    {
      id: '2',
      title: 'Fale Conosco',
      icon: 'mail-outline',
      action: 'contact'
    },
    {
      id: '3',
      title: 'Avaliar App',
      icon: 'star-outline',
      action: 'rate'
    },
    {
      id: '4',
      title: 'Sobre',
      icon: 'information-circle-outline',
      action: 'about'
    },
  ];

  const handleSupportAction = (action) => {
    switch (action) {
      case 'help':
        Alert.alert('Central de Ajuda', 'Em breve disponível!');
        break;
      case 'contact':
        Alert.alert('Fale Conosco', 'suporte@vibemoney.com');
        break;
      case 'rate':
        Alert.alert('Avaliar App', 'Obrigado pelo feedback!');
        break;
      case 'about':
        Alert.alert('Sobre', 'VibeMoney v1.0.0\nSeu dinheiro, sua vibe ✨');
        break;
      default:
        break;
    }
  };

  const renderProfileOption = (option) => (
    <TouchableOpacity
      key={option.id}
      style={styles.optionItem}
      onPress={() => navigation.navigate(option.screen)}
    >
      <View style={styles.optionLeft}>
        <View style={styles.optionIcon}>
          <Ionicons name={option.icon} size={24} color={colors.primary} />
        </View>
        <View style={styles.optionContent}>
          <Text style={styles.optionTitle}>{option.title}</Text>
          <Text style={styles.optionDescription}>{option.description}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
    </TouchableOpacity>
  );

  const renderSupportOption = (option) => (
    <TouchableOpacity
      key={option.id}
      style={styles.optionItem}
      onPress={() => handleSupportAction(option.action)}
    >
      <View style={styles.optionLeft}>
        <View style={styles.optionIcon}>
          <Ionicons name={option.icon} size={24} color={colors.textSecondary} />
        </View>
        <Text style={styles.optionTitle}>{option.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Perfil</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <TouchableOpacity style={styles.profileImageContainer} onPress={handleImagePicker}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <View style={styles.defaultProfileImage}>
                <Ionicons name="person" size={40} color={colors.textSecondary} />
              </View>
            )}
            <View style={styles.editImageButton}>
              <Ionicons name="camera" size={16} color={colors.surface} />
            </View>
          </TouchableOpacity>
          <Text style={styles.userName}>Usuário</Text>
          <Text style={styles.userEmail}>usuario@email.com</Text>
        </View>

        {/* Profile Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Configurações da Conta</Text>
          <View style={styles.optionsContainer}>
            {profileOptions.map(renderProfileOption)}
          </View>
        </View>

        {/* Support Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suporte</Text>
          <View style={styles.optionsContainer}>
            {supportOptions.map(renderSupportOption)}
          </View>
        </View>

        {/* Logout Button */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={24} color={colors.error} />
            <Text style={styles.logoutText}>Sair da Conta</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 24,
    marginBottom: 24,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  defaultProfileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.surface,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  optionsContainer: {
    backgroundColor: colors.surface,
    marginHorizontal: 20,
    borderRadius: 12,
    ...globalStyles.shadow,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  optionDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    ...globalStyles.shadow,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.error,
    marginLeft: 8,
  },
});

export default ProfileScreen;