import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
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
        <Text style={styles.title}>Location de voitures</Text>
        <Image
          source={{
            uri: 'https://i.ytimg.com/vi/xdct9lGOl_U/maxresdefault.jpg',
          }}
          style={styles.image}
        />
        <Text style={styles.description}>
          Trouvez la voiture parfaite pour votre prochain voyage. Découvrez notre
          sélection de voitures de luxe, de sport et d'économie.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SearchScreen')}
        >
          <Text style={styles.buttonText}>Rechercher une voiture</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#4287f5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default HomeScreen;
