import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const BtnLogout = () => {
  const { setDadosUsuario } = useContext(DataContext);
  const navigation = useNavigation();

  const handleLogout = () => {
    setDadosUsuario("");
    navigation.navigate("login");
  };

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handleLogout}>
      <Text style={styles.btnTitle}>Sair</Text>
      <Ionicons name="log-in-outline" size={30} color={"white"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    btnContainer: {
    flexDirection: 'row',
    width: '50%',
    height: 55,
    backgroundColor: "#e6474a",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 12,
  },
  btnTitle:{
    fontSize: 26,
  }
});
