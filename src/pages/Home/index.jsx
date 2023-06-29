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

export default function Home() {
  const { dadosUsuario } = useContext(DataContext);
  const { saveEditoras } = useContext(EditorasContext);
  const { saveLivros } = useContext(LivrosContext);
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getLivros();
    getEditoras();
    getValues();
    //setTimeout(() => setIsLoading(false), 1000)
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
              titulo={"Titulo 1"}
              subtitulo={"O primeiro"}
              avaliacao={1}
            />
            <FeaturedBookCard
              titulo={"Titulo 2"}
              subtitulo={"O segundo"}
              avaliacao={5}
            />
            <FeaturedBookCard
              titulo={"Titulo 3"}
              subtitulo={"O terceiro"}
              avaliacao={4}
            />
          </View>
        </ScrollView>
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
