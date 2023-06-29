import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";
import book from "../../assets/book.json";

const LoadingComponent = () => {
  const [loadingTexts, setLoadingTexts] = useState([
    "Preparando a estante de livros...",
    "Buscando os últimos lançamentos...",
    "Por favor, aguarde...",
    "Estamos quase lá...",
  ]);
  const timer = ms => new Promise(res => setTimeout(res, ms))
  async function load () { 
    for (var i = 0; i < loadingTexts.length; i++) {
      console.log(loadingTexts[i]);
      await timer(6000); 
    }
  }
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
            load()
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
