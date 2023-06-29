import { Text, View, Image } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import AxiosInstance from "../../api/AxiosInstance";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { saveItem, getValueFor } from "../../services/DateService";
import { useNavigation } from "@react-navigation/native";
import LoadingIndicator from "../../components/Loading/LoadingIndicator";
import { CartContext } from "../../context/CartContext";

export default function Livro({ route }) {
  const navigation = useNavigation();
  const {saveCartContext} = useContext(CartContext);
  const { dadosUsuario } = useContext(DataContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedCart, setaddedCart] = useState(false);
  const [livro, setLivro] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    verifyFavorite();
    verifyCart();
    getLivro();
    setTimeout(() => setIsLoading(false), 1000)
  }, []);

  useEffect(() => {
    navigation.setOptions({ title: livro.nomeLivro });
  }, [livro]);

  const verifyFavorite = async () => {
    let favoritos = await getValueFor("favoritos");
    let itensFavoritosArr = JSON.parse(favoritos);

    if (itensFavoritosArr?.includes(route.params?.id)) {
      setIsFavorite(true);
    }
  };
  const verifyCart = async () => {
    let itensCarrinho = await getValueFor("carrinho");
    let itensCarrinhoArr = JSON.parse(itensCarrinho);

    if (itensCarrinhoArr?.includes(route.params?.id)) {
      setaddedCart(true);
    }
  };

  const getLivro = async () => {
    await AxiosInstance.get(`/livros/${route.params?.id}`, {
      headers: {
        Authorization: `Bearer ${dadosUsuario.token}`,
      },
    })
      .then((response) => {
        setLivro(response.data);
      })
      .catch((error) => console.error(error));
  };

  const handleAddCart = () => {
    saveCartContext(route.params?.id)
    setaddedCart(!addedCart);
    navigation.navigate("menu-principal");
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    saveItem("favoritos", route.params?.id);
  };

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <LoadingIndicator/>
      ) : (
        <>
          <View style={styles.container}>
            <View style={styles.leftMenu}>
              <Image
                style={styles.image}
                source={{ uri: "data:image/webp;base64," + livro.imagem }}
              />

              <TouchableOpacity
                style={styles.favoriteBtn}
                onPress={handleFavorite}
              >
                {isFavorite ? (
                  <>
                    <Ionicons name="heart" size={22} color={"red"} />
                    <Text style={styles.btnTextFavoritado}>Favorito</Text>
                  </>
                ) : (
                  <>
                    <Ionicons name="heart-outline" size={22} color={"black"} />
                    <Text style={styles.btnTextFavorito}>Favorito</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.rightMenu}>
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle}>{livro.nomeLivro}</Text>
                <Text style={styles.bookAuthor}>
                  {livro.autorDTO?.nomeAutor}
                </Text>
                <Text style={styles.bookPublisher}>
                  {livro.editoraDTO?.nomeEditora}
                </Text>
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.bookCurrency}>R$</Text>
                <Text style={styles.bookPrice}>99,99</Text>
              </View>

              <TouchableOpacity
                style={styles.addCartBtn}
                onPress={handleAddCart}
              >
                {addedCart ? (
                  <>
                    <Ionicons
                      name="checkmark-circle"
                      size={22}
                      color={"white"}
                    />
                    <Text style={styles.btnText}>Adicionado ao carrinho</Text>
                  </>
                ) : (
                  <>
                    <Ionicons name="cart-outline" size={22} color={"white"} />
                    <Text style={styles.btnText}>Adicionar ao Carrinho</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionTitle}>Descrição</Text>
            <Text style={styles.descriptionText}>
              Copo furadis é disculpa de bebadis, arcu quam euismod magna.Todo
              mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu
              levo!Praesent malesuada urna nisi, quis volutpat erat hendrerit
              non. Nam vulputate dapibus.Quem num gosta di mé, boa gentis num é.
            </Text>
          </View>
        </>
      )}
    </View>
  );
}
