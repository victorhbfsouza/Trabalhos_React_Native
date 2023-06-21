import { FlatList, SafeAreaView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import EditoraCard from "../Cards/EditorasCard/EditoraCard";
import AxiosInstance from "../../api/AxiosInstance";
import { DataContext } from "../../context/DataContext";

export default function EditorasScrollList() {
  const { dadosUsuario } = useContext(DataContext);
  const [editoras, setEditoras] = useState("");

  useEffect(() => {
    getEditoras();
  }, []);

  const getEditoras = async () => {
    await AxiosInstance.get("/editoras", {
      headers: {
        Authorization: `Bearer ${dadosUsuario.token}`,
      },
    })
      .then((response) => {
        setEditoras(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={editoras}
        renderItem={({ item }) => (
          <EditoraCard
            id={item.codigoEditora}
            nome={item.nomeEditora}
            imagem={{ uri: "data:image/webp;base64," + item.imagem }}
          />
        )}
        keyExtractor={(item) => item.codigoEditora}
      />
    </SafeAreaView>
  );
}
