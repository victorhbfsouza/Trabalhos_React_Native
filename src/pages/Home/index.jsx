import { View, Text, StyleSheet, ScrollView } from "react-native";
import EditorasScrollList from "../../components/editorasScroll/EditorasScrollList";
import LivrosRecentes from "../../components/livrosRecentesScroll/LivrosRecentesScroll";
import FeaturedBookCard from "../../components/Cards/FeaturedBooks/FeaturedBookCard";

export default function Home() {
  return (
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
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 700,
    margin: 10,
  },
});
