import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function BookCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={props.imagem} />
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>{props.titulo}</Text>
        <Text style={styles.autor}>{props.autor}</Text>
      </View>
    </View>
  );
}
