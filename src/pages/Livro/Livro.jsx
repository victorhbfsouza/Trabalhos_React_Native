import { Text, View, Image } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import AxiosInstance from "../../api/AxiosInstance";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Livro({ route }) {
  const { dadosUsuario } = useContext(DataContext);
  const [livro, setLivro] = useState({});
  useEffect(() => {
    getLivro();
  }, []);

  const getLivro = async () => {
    await AxiosInstance.get(`/livros/${route.params?.id}`, {
      headers: {
        Authorization: `Bearer ${dadosUsuario.token}`,
      },
    })
      .then((response) => {
        setLivro(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "data:image/webp;base64," + livro.imagem }}
      />
      <View style={styles.rightMenu}>
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{livro.nomeLivro}</Text>
          <Text style={styles.bookAuthor}>{livro.autorDTO?.nomeAutor}</Text>
          <Text style={styles.bookPublisher}>
            {livro.editoraDTO?.nomeEditora}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.addCartBtn}>
            <Ionicons name="cart-outline" size={22} />
            <Text>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
