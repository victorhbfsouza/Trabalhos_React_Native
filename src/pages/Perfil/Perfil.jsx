import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React,{useContext} from "react";
import { BtnLogout } from "../../components/Button/BtnLogout";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DataContext } from "../../context/DataContext";

export default function Perfil() {
  const { dadosUsuario } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          width: "80%",
          gap: 20,
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Ionicons name="person-circle-outline" size={200} color={"#e2e2e2"} />
          <Text style={{ fontSize: 20, fontWeight: "600", textAlign: 'center' }}>
            {dadosUsuario?.nome}
          </Text>
        </View>

        <View style={{ alignItems: "center", padding: 1 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Sobre mim</Text>
          <Text style={{ textAlign: "justify" }}>
            Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que
            abundância meu irmão viuu!! Assim você vai matar o papai. Só digo
            uma coisa, Domingo ela não vai! Danadaa!! Vem minha odalisca,
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            width: '60%',
            flexDirection: "row",
            height: 55,
            backgroundColor: "#c2c2c2",
            alignItems: "center",
            justifyContent: "space-evenly",
            borderRadius: 12,
          }}
        >
          <Ionicons name="settings-outline" size={30} color={"#e2e2e2"} />
          <Text style={{ fontSize: 20, color: "#e2e2e2" }}>Alterar Dados</Text>
        </TouchableOpacity>
        <BtnLogout />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
