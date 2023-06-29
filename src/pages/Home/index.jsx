import { View, Text, StyleSheet, ScrollView } from "react-native";
import EditorasScrollList from "../../components/editorasScroll/EditorasScrollList";
import LivrosRecentes from "../../components/livrosRecentesScroll/LivrosRecentesScroll";
import FeaturedBookCard from "../../components/Cards/FeaturedBooks/FeaturedBookCard";
import { DataContext } from "../../context/DataContext";
import React,{ useContext, useEffect, useState } from "react";
import AxiosInstance from "../../api/AxiosInstance";
import { EditorasContext } from "../../context/EditorasContext";
import { LivrosContext } from "../../context/LivrosContext";
import { getValueFor } from "../../services/DateService";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const { dadosUsuario } = useContext(DataContext);
  const { saveEditoras } = useContext(EditorasContext);
  const { saveLivros, livros } = useContext(LivrosContext);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getLivros();
    getEditoras();
    getValues();
    setTimeout(() => setIsLoading(false), 2000)
  }, []);

  const getLivros = async () => {
    AxiosInstance.get("/livros", {
      headers: {
        Authorization: `Bearer ${dadosUsuario.token}`,
      },
    })
      .then((response) => {
        saveLivros(response.data);
      })
      .catch((error) => console.error(error));
  };

  const getEditoras = async () => {
    await AxiosInstance.get("/editoras", {
      headers: {
        Authorization: `Bearer ${dadosUsuario.token}`,
      },
    })
      .then((response) => {
        saveEditoras(response.data);
      })
      .catch((error) => console.error(error));
  };

  const getValues = async () => {
    let response = await getValueFor("favoritos");
    setValues(response);
    
  };

  return (
    <>
      {isLoading ? (
        <>
          <LoadingComponent /> 
        </>
      ) : (
        <>
          {
            navigation.setOptions({tabBarStyle: {display: 'flex'}, headerShown: true})
          }
          <ScrollView>
            <View>
              <Text style={styles.title}>Editoras</Text>
              {/* Lista de Editoras */}
              <EditorasScrollList />
            </View>

            <View>
              <Text style={styles.title}>Livros Recentes</Text>
              {/* Lista de Livros Recentes */}
              <LivrosRecentes />
            </View>

            <View>
              <Text style={styles.title}> Destaques</Text>
              {/* Card livro em Destque */}
              <FeaturedBookCard
                id = {livros[1]?.codigoLivro}
                imagem={{ uri: "data:image/webp;base64," + livros[1]?.imagem}}
                titulo={livros[1]?.nomeLivro}
                subtitulo={livros[1]?.autorDTO?.nomeAutor}
                avaliacao={3}
              />
              <FeaturedBookCard
                id = {livros[2]?.codigoLivro}
                imagem={{ uri: "data:image/webp;base64," + livros[2]?.imagem}}
                titulo={livros[2]?.nomeLivro}
                subtitulo={livros[2]?.autorDTO?.nomeAutor}
                avaliacao={4}
              />
              <FeaturedBookCard
                id = {livros[3]?.codigoLivro}
                imagem={{ uri: "data:image/webp;base64," + livros[3]?.imagem}}
                titulo={livros[3]?.nomeLivro}
                subtitulo={livros[3]?.autorDTO?.nomeAutor}
                avaliacao={5}
              />
              
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 700,
    margin: 10,
  },
});
