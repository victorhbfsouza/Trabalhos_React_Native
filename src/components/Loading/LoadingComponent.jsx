

import React,{useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import LottieView from 'lottie-react-native'
import book from '../../assets/book.json'

const LoadingComponent = () => {

    const [loadingText, setLoadingText] = useState(['Preparando a estante de livros...', 
                                                    'Buscando os últimos lançamentos...', 
                                                    'Por favor, aguarde...',
                                                    'Estamos quase lá...' ])
  return (
    <View style={styles.container}>
        <LottieView style={styles.animationLoop} source={book} loop autoPlay resizeMode='contain'/>
        <Text style={styles.animationText}> {loadingText.map(text => {return setTimeout(() => console.log(text), 2000)})} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ffffff'
  },
  animationLoop:{
    width: 250,
  },
  animationText: {
    fontSize: 16
  }
});

export default LoadingComponent;