import { Text, View, Image, TouchableOpacity} from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function FeaturedBookCard(props) {
  const navigation = useNavigation();

  const stars = [
    <Ionicons key="1" name="star-outline" size={18} />,
    <Ionicons key="2" name="star-outline" size={18} />,
    <Ionicons key="3" name="star-outline" size={18} />,
    <Ionicons key="4" name="star-outline" size={18} />,
    <Ionicons key="5" name="star-outline" size={18} />,
  ];

  /* Adiciona um número de Iconicons no array stars com base no valor passado no
    pros avaliacao e então chama o array no código de retorno */
  for (let index = 0; index < props.avaliacao; index++) {
    stars[index] = <Ionicons key={index} name="star" size={18} />;
  }

  const handlePress = () => {
    navigation.navigate("livro", { id: props.id });
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={props.imagem}
          />
        </View>
        <View style={styles.bookInfo}>
          <View style={styles.cardDescription}>
            <Text style={styles.title}>{props.titulo}</Text>
            <Text style={styles.subtitle}>{props.subtitulo}</Text>
          </View>
          <View style={styles.bookRating}>{stars}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
