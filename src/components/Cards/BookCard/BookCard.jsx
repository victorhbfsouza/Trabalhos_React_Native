import { Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { overwriteItem } from "../../../services/DateService";

export default function BookCard(props) {
  const navigation = useNavigation();

  const handleBookInfo = () => {
    navigation.navigate("livro", { id: props.id });
  };

  const handleRemoveFav = () => {
    let arrIdsFavs = props.favoritos;
    let newIds = arrIdsFavs.filter(ids => {
        return ids !== props.id
    })
    overwriteItem('favoritos', newIds)
    props.atualizaFavoritos(newIds)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={props.imagem} />
      </View>
      
      <View style={styles.description}>
        <Text style={styles.title}>{props.titulo}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnSaibaMais} onPress={handleBookInfo}>
            <Text style={styles.btnText}>Saiba mais</Text>
            <Ionicons name="arrow-forward-outline" size={18} />
          </TouchableOpacity>
        </View>
      </View>

      {
        props.showFavSymbol ? (
          <TouchableOpacity style={styles.favBtn} onPress={handleRemoveFav}>
              <Ionicons name="heart" size={32} color={"red"} />
          </TouchableOpacity>
        ) : (
          <>
          </>
        )
      }
     
     
    </View>
  );
}
