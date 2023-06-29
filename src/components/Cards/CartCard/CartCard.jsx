import { Image, Text, View, TouchableOpacity } from "react-native";
import React, {useState} from 'react'
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { overwriteItem } from "../../../services/DateService";

export const CartCard = ({id, titulo, imagem, carrinho, atualizaCarrinho }) => {

    const [itemCounter, setItemCounter] = useState(1);

    const handleAdd = () => {
        setItemCounter(itemCounter + 1);
    }
    const handleRemove = () => {
        if(itemCounter > 1){
            setItemCounter(itemCounter - 1);
        }
        else{
            let arrIdsCart = carrinho;

            //Filtra todos os elementos, retornando todos os elementos menos o que foi
            //selecionado para ser apagado
            let newIds = arrIdsCart.filter(ids => {
                return ids !== id
            })

            //Sobrecreve o  carrinho passando os ids agora filtrados
            overwriteItem('carrinho', newIds)

            //utiliza a props de SetIdsCarrinho que é passada como props
            //como atualiza carrinho
            atualizaCarrinho(newIds)
        }
    }


  return (
    <View style={styles.container}>
        <View style={styles.imageWrapper}>
            <Image style={styles.image} source={imagem} />
        </View>

        <View style={styles.productInfos}>
            <Text style={styles.title}>{titulo}</Text>
            <Text style={styles.price}>R$ 99,99</Text>

            <View style={styles.buttons}>
                <View style={styles.cartQntd}>
                        {itemCounter > 1 ? (
                                <TouchableOpacity onPress={handleRemove}>
                                    <Ionicons name="remove-circle-outline" size={36} />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={handleRemove}>
                                    <Ionicons name="trash-outline" size={32} />
                                </TouchableOpacity>
                            )}
                    <Text>{itemCounter}</Text>
                    <TouchableOpacity onPress={handleAdd}>
                        <Ionicons name="add-circle-outline" size={36} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}
