import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <ImageBackground
      source={{
        uri: "https://img.freepik.com/free-vector/white-abstract-background_23-2148806276.jpg",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/autozone_brand_name.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>AUTOZONE</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un véhicule"
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Localisation")}
          style={styles.locationButton}
        >
          <Text style={styles.locationButtonText}>
            Sélectionner la localisation
          </Text>
        </TouchableOpacity>
        <Text style={styles.categoryTitle}>Catégories de véhicules</Text>
        <View style={styles.categories}>
          <View style={styles.categoryRow}>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => navigation.navigate("Economique")}
            >
              <Text style={styles.categoryButtonText}>Économique</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => navigation.navigate("Compacte")}
            >
              <Text style={styles.categoryButtonText}>Compacte</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryRow}>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => navigation.navigate("Berline")}
            >
              <Text style={styles.categoryButtonText}>Berline</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => navigation.navigate("SUV")}
            >
              <Text style={styles.categoryButtonText}>SUV</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryRow}>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => navigation.navigate("Luxe")}
            >
              <Text style={styles.categoryButtonText}>Luxe</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => navigation.navigate("Sport")}
            >
              <Text style={styles.categoryButtonText}>Sport</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryRow}>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => navigation.navigate("Electrique")}
            >
              <Text style={styles.categoryButtonText}>Électrique</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={() => navigation.navigate("Hybride")}
            >
              <Text style={styles.categoryButtonText}>Hybride</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 15,
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 20,
  },
  searchInput: {
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  locationButton: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  locationButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 10,
  },
  categories: {
    width: "100%",
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
  },
});

export default HomeScreen;
