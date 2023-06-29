import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useContext, useEffect, useCallback} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { delItem, getValueFor } from "../../services/DateService";
import { LivrosContext } from "../../context/LivrosContext";
import { CartCard } from "../../components/Cards/CartCard/CartCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CartContext } from "../../context/CartContext";

export default function Carrinho(){
    const [idsItensCarrinho, setIDsItensCarrinho] = useState([]);
    const [itensCarrinho, setItensCarrinho] = useState([]);
    const { livros } = useContext(LivrosContext);
    const {setCart} = useContext(CartContext);
   
  
    useFocusEffect(
      React.useCallback(() => {
            getIDsItensCarrinho();
        return () => null;
      }, [])
    );

    useEffect(() => {
      setCart(idsItensCarrinho);
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
        let strIds = await getValueFor("carrinho");
        let arrIds = JSON.parse(strIds);
        setIDsItensCarrinho(arrIds)
    };

    const handleRemoveAll = () => {
        setItensCarrinho(null)
        setIDsItensCarrinho(null)
        delItem('carrinho')
    }
  
    return (
      <View style={styles.container}>
               {
              itensCarrinho === null || itensCarrinho.length == 0 ?
              (
                  <Text style={styles.noFavorites}>Você ainda não possui itens no carrinho :(</Text>
              ):
              (
                <>
                  <TouchableOpacity style={styles.removeAll} onPress={handleRemoveAll}>
                    <Ionicons name="remove-circle" size={28} />
                    <Text>Limpar carrinho</Text>
                  </TouchableOpacity>
                    <FlatList
                    style={{marginBottom: 25}}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{height: 20}} />}
                    data={itensCarrinho}
                    extraData={itensCarrinho}
                    renderItem={({item}) => <CartCard id={item.codigoLivro} 
                                                      titulo={item.nomeLivro} 
                                                      autor={item.autorDTO.nomeAutor} 
                                                      imagem={{ uri: "data:image/webp;base64," + item.imagem }}
                                                      carrinho={idsItensCarrinho}
                                                      atualizaCarrinho = {setIDsItensCarrinho}/>}
                    keyExtractor={item => item.codigoLivro}
                    />
                       <TouchableOpacity style={styles.finalizarPedidoBtn}>
                          <Text>Finalizar pedido</Text>
                      </TouchableOpacity>
                </>
              )
          }
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
      container:{
          flex: 1,
          padding: 20,
          color: '#e2e2e2',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 10,
          position: 'relative'
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
      },
      finalizarPedidoBtn:{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '2%',
        left: '10%',
        right: '10%',
        marginLeft: 'auto', 
        marginRight: 'auto', 
        backgroundColor: '#e6474a',
        borderRadius: 5,
      }
  })