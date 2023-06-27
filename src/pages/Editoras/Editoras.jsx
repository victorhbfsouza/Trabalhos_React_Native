import { View, FlatList, StyleSheet } from "react-native";
import EditoraCard from "../../components/Cards/EditorasCard/EditoraCard";
import { EditorasContext } from "../../context/EditorasContext";
import React from "react";
import { useContext } from "react";

export default function Editoras(){
    const { editoras } = useContext(EditorasContext);

    return(
        <View style={styles.containerEditora}>
           <FlatList
                data={editoras}
                numColumns={2}
                renderItem={({ item }) => (
                <EditoraCard
                    id={item.codigoEditora}
                    nome={item.nomeEditora}
                    imagem={{ uri: "data:image/webp;base64," + item.imagem }}
                />
                )}
                keyExtractor={(item) => item.codigoEditora}
            />
        </View>
    )
}
const styles = StyleSheet.create({ 
    containerEditora: {
      flex: 1,
      margin: 'auto',
    }
  });