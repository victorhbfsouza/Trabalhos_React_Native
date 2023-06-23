import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useContext, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AxiosInstance from "../../api/AxiosInstance";
import { DataContext } from "../../context/DataContext";
import { styles } from "./styles";

export default function Cadastro({ navigation }) {
  const [inputUsername, setInputUsername] = React.useState("");
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputSenha, setInputSenha] = React.useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { armazenarDadosUsuario } = useContext(DataContext);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCadastro = () => {
    saveUser();
  }
    

  const saveUser = async () =>{
    try {
      const signUpResponse = await AxiosInstance.post('/auth/signup', {
        "username": inputUsername,
        "email": inputEmail,
        "password": inputSenha,
        "role": ["user"]
      })
      if (signUpResponse.status === 200) {
        console.log(signUpResponse)
        try{
          const signInResponse = await AxiosInstance.post('/auth/signin',{
            "username": inputUsername,
            "password": inputSenha
          })
          if (signInResponse.status === 200) {
            var jwtToken = signInResponse.data;
            armazenarDadosUsuario(jwtToken["accessToken"])
            navigation.navigate('menu-principal')
          }
          else {
            console.log("! Erro ao realizar o login")
          }
        }
        catch(error){
          console.log("!Erro durante o processo de cadastro: "+ error)
        }
      }
      else {
        console.log("! Erro ao realizar o cadastro")
      }
    }
    catch (error) {
      console.log("! Erro durante o processo de cadastro: " + error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back"} size={50} color={"#ffffff"} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../Assets/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 1,width:'100%', alignItems: 'center',justifyContent: 'center'}}>
        <Text style={styles.title}>Entre linhas: Faça parte do clube ! </Text>
        <View style={styles.inputContainer}>
          <Ionicons name={"person"} size={26} color={"#c1c2c2"} />
          <TextInput
            style={styles.input}
            onChangeText={setInputUsername}
            placeholder="Nome de usuário"
            keyboardType="default"
            value={inputUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={"mail"} size={26} color={"#c1c2c2"} />
          <TextInput
            style={styles.input}
            onChangeText={setInputEmail}
            placeholder={"Email"}
            keyboardType="default"
            value={inputEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={"lock-closed"} size={26} color={"#c1c2c2"} />
          <TextInput
            secureTextEntry={!showPassword}
            style={styles.inputSenha}
            onChangeText={setInputSenha}
            placeholder="Senha"
            keyboardType="default"
            value={inputSenha}
            returnKeyType="go"
          />
          <TouchableHighlight
            style={styles.passwordIcon}
            onPress={handleTogglePasswordVisibility}
            underlayColor="transparent"
          >
            <Ionicons
              style={styles.eyeStyle}
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={26}
            />
          </TouchableHighlight>
        </View>
      </View>

      <TouchableHighlight style={styles.button} onPress={handleCadastro}>
        <View style={styles.buttonContent}>
          <Text style={styles.button.text}>Realizar Cadastro</Text>
          <Ionicons name={"arrow-forward"} size={23} color={"#ffffff"} />
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
