import React, { useContext } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { EditorasContext } from "../../context/EditorasContext";
import EditoraElipseCard from "../Cards/EditorasCard/EditoraElipseCard";

export default function EditorasScrollList() {
  const { editoras } = useContext(EditorasContext);

  return (
    <SafeAreaView>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={editoras}
        renderItem={({ item }) => (
          <EditoraElipseCard
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
