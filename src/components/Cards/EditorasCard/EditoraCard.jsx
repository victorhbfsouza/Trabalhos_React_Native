import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableWithoutFeedback,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
  
  export default function EditoraCard(props) {
    const navigation = useNavigation();
  
    const handlePress = () => {
      
      navigation.navigate("editora-livros", { id: props.id,
                                              nome: props.nome});
    };
  
    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Image style={styles.image} source={props.imagem} />
          </View>
          <Text style={styles.editoraName}>{props.nome}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      backgroundColor: "#ffffff",
      padding: 10,
      margin: 20,
      borderRadius: 20
    },
    card: {
      width: 80,
      height: 80,
      backgroundColor: "#cad5e2",
      marginHorizontal: 10,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    editoraName: {
      fontSize: 14,
    },
  });
  