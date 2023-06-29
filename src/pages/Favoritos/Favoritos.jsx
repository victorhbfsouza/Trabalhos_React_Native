import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState, useContext, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { LivrosContext } from "../../context/LivrosContext";
import { getValueFor } from "../../services/DateService";
import BookCard from "../../components/Cards/BookCard/BookCard";

export default function Favoritos() {
  const [idsLivrosFavoritos, setIDsLivrosFavoritos] = useState([]);
  const [filteredLivros, setFilteredLivros] = useState([]);
  const { livros } = useContext(LivrosContext);

  useFocusEffect(
    React.useCallback(() => {
      getLivrosFavoritos();
      return () => null;
    }, [])
  );

  useEffect(() => {
    setFilteredLivros(
      livros.filter((livro) => {
        if (idsLivrosFavoritos.includes(livro.codigoLivro)) {
          return livro;
        }
      })
    );
  }, [idsLivrosFavoritos]);

  const getLivrosFavoritos = async () => {
    let strIds = await getValueFor("favoritos");
    let arrIds = JSON.parse(strIds);
    setIDsLivrosFavoritos(arrIds);
  };

  return (
    <View style={styles.container}>
      {filteredLivros === null || filteredLivros.length == 0 ? (
        <Text style={styles.noFavorites}>
          Você ainda não possui livros favoritos :(
        </Text>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={filteredLivros}
          extraData={idsLivrosFavoritos}
          renderItem={({ item }) => (
            <BookCard
              id={item.codigoLivro}
              titulo={item.nomeLivro}
              autor={item.autorDTO.nomeAutor}
              imagem={{ uri: "data:image/webp;base64," + item.imagem }}
              showFavSymbol={true}
              favoritos={idsLivrosFavoritos}
              atualizaFavoritos={setIDsLivrosFavoritos}
            />
          )}
          keyExtractor={(item) => item.codigoLivro}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    color: "#e2e2e2",
  },
  noFavorites: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
});
