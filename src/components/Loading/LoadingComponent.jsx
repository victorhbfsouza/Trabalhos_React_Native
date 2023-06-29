import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";
import book from "../../assets/book.json";
import { useNavigation } from "@react-navigation/native";

const LoadingComponent = () => {
  const navigation = useNavigation();
  const [loadingTexts, setLoadingTexts] = useState([
    "Preparando a estante de livros...",
    "Buscando os últimos lançamentos...",
    "Por favor, aguarde...",
    "Estamos quase lá...",
  ]);
  
  useEffect(() => {
    const numeroAleatorio = Math.floor(Math.random() * 4);
    setLoadingTexts(loadingTexts[numeroAleatorio])
    navigation.setOptions({headerShown: false});
    navigation.setOptions({tabBarStyle: {display: 'none'}});
  }, [])

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animationLoop}
        source={book}
        loop
        autoPlay
        resizeMode="contain"
      />
      <Text style={styles.animationText}>
        {   
        loadingTexts
        }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  animationLoop: {
    width: 250,
  },
  animationText: {
    fontSize: 16,
  },
});

export default LoadingComponent;
