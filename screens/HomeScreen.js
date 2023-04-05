import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{
        uri: 'https://img.freepik.com/free-vector/white-abstract-background_23-2148806276.jpg',
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Agences de location de voitures</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher une agence"
          placeholderTextColor="#999"
        />
        <Image
          source={{
            uri: 'https://i.ytimg.com/vi/xdct9lGOl_U/maxresdefault.jpg',
          }}
          style={styles.image}
        />
        <Text style={styles.description}>
          Trouvez l'agence de location de voitures idéale pour votre prochain voyage. Découvrez les meilleures offres et les agences les plus réputées.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 20,
  },
  searchInput: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
    color: '#ffffff',
  },
});

export default HomeScreen;
