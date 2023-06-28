import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useContext, useEffect, useCallback} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { delItem, getValueFor } from "../../services/DateService";
import { LivrosContext } from "../../context/LivrosContext";
import { CartCard } from "../../components/Cards/CartCard/CartCard";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Carrinho(){
    const [idsItensCarrinho, setIDsItensCarrinho] = useState([]);
    const [itensCarrinho, setItensCarrinho] = useState([]);
    const { livros } = useContext(LivrosContext);
  
    useFocusEffect(
      React.useCallback(() => {
            getIDsItensCarrinho();
            console.log('itens Carrinho' + idsItensCarrinho)
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

    const handleRemoveAll = () => {
        setItensCarrinho(null)
        delItem('carrinho')
    }
  
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.removeAll} onPress={handleRemoveAll}>
            <Ionicons name="remove-circle" size={28} />
            <Text>Limpar carrinho</Text>
          </TouchableOpacity>
               {
              itensCarrinho === null || itensCarrinho.length == 0 ?
              (
                  <Text style={styles.noFavorites}>Você ainda não possui itens no carrinho :(</Text>
              ):
              (
                  <FlatList
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View style={{height: 20}} />}
                  data={itensCarrinho}
                  renderItem={({item}) => <CartCard id={item.codigoLivro} 
                                                    titulo={item.nomeLivro} 
                                                    autor={item.autorDTO.nomeAutor} 
                                                    imagem={{ uri: "data:image/webp;base64," + item.imagem }}
                                                    carrinho={idsItensCarrinho}
                                                    atualizaCarrinho = {setIDsItensCarrinho}/>}
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
          color: '#e2e2e2',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 10
      },
      removeAll:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
      noFavorites:{
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20
      }
  })