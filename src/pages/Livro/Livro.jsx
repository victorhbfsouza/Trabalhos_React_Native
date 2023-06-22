import { SafeAreaView, Text, View,Image } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import AxiosInstance from "../../api/AxiosInstance";

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
        console.log(response.data)
      })
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView>
      <View>
      <View >
        <Image style={{width: 100, height: 100}}source={{uri: "data:image/webp;base64," + livro.imagem}} />
      </View>
        <View>
          <Text>{livro.nomeLivro}</Text>
          <Text>{livro.autorDTO?.nomeAutor}</Text>
          <Text>{livro.editoraDTO?.nomeEditora}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
