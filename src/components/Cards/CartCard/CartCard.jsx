import { Image, Text, View, TouchableOpacity } from "react-native";
import React, {useState} from 'react'
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export const CartCard = (props) => {

    const [itemCounter, setItemCounter] = useState(1);

    const handleAdd = () => {
        setItemCounter(itemCounter + 1);
    }
    const handleRemove = () => {
        if(itemCounter > 1){
            setItemCounter(itemCounter - 1);
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.imageWrapper}>
            <Image style={styles.image} source={props.imagem} />
        </View>

        <View style={styles.productInfos}>
            <Text style={styles.title}>{props.titulo}</Text>
            <Text style={styles.price}>R$ 99,99</Text>

            <View style={styles.buttons}>
                <View style={styles.cartQntd}>
                    <TouchableOpacity onPress={handleRemove}>
                        <Ionicons name="remove-circle-outline" size={32} />
                    </TouchableOpacity>
                    <Text>{itemCounter}</Text>
                    <TouchableOpacity onPress={handleAdd}>
                        <Ionicons name="add-circle-outline" size={32} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.removeCartBtn}>
                    <Ionicons name="trash-outline" size={18} />
                    <Text>Remover</Text>
                </TouchableOpacity>
            </View>
        </View>
  </View>
  )
}
