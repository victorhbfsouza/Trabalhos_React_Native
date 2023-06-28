import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState, useContext, useEffect, useCallback} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { getValueFor } from "../../services/DateService";
import { LivrosContext } from "../../context/LivrosContext";
import { CartCard } from "../../components/Cards/CartCard/CartCard";

export default function Carrinho(){
    const [idsItensCarrinho, setIDsItensCarrinho] = useState([]);
    const [itensCarrinho, setItensCarrinho] = useState([]);
    const { livros } = useContext(LivrosContext);
  
    useFocusEffect(
      React.useCallback(() => {
            getIDsItensCarrinho();
            console.log('aa' + idsItensCarrinho)
        return () => null;
      }, [])
    );


    useEffect(() => {
        if(idsItensCarrinho !== null){
            setItensCarrinho(
              livros.filter((livro) => {
                if (idsItensCarrinho.includes(livro.codigoLivro)) {
                  return livro;
                }
              })
            );
        }
      }, [idsItensCarrinho]);
    
  
    const getIDsItensCarrinho = async () => {
        setIDsItensCarrinho(await getValueFor("carrinho"));
    };
  
    return (
      <View style={styles.container}>
          {
              itensCarrinho === null || itensCarrinho.length == 0 ?
              (
                  <Text style={styles.noFavorites}>Você ainda não possui itens no carrinho :(</Text>
              ):
              (
                  <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={itensCarrinho}
                  renderItem={({item}) => <CartCard id={item.codigoLivro} titulo={item.nomeLivro} autor={item.autorDTO.nomeAutor} imagem={{ uri: "data:image/webp;base64," + item.imagem }}/>}
                  keyExtractor={item => item.codigoLivro}
                  />
              )
          }
      </View>
    );
  }
  
  const styles = StyleSheet.create({
      container:{
          padding: 20,
          color: '#e2e2e2'
      },
      noFavorites:{
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20
      }
  })