import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import {saveItem, incrementItem, delItem} from '../../../services/DateService'


export default function EditoraCard(props) {
  const [dados, setDados] = useState({nome : 'Gabriel', idade: 10})
  const navigation = useNavigation();

  const handlePress = () => {
    incrementItem('banana', dados)
    navigation.navigate("editora-livros", { id: props.id,
                                            nome: props.nome});
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={props.imagem} />
        </View>
        <Text style={styles.editoraName}>{props.nome}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  card: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: "#cad5e2",
    marginHorizontal: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  editoraName: {
    fontSize: 12,
  },
});