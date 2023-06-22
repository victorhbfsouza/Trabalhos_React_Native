import { View, Text, TextInput, TouchableHighlight, SafeAreaView, Image } from "react-native";
import { styles } from "./styles";
import React, { useState, useContext } from 'react';
import AxiosInstance from "../../api/AxiosInstance";
import { DataContext } from "../../context/DataContext";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Login({ navigation }) {
  const [inputUsername, setInputUsername] = useState('');
  const [inputSenha, setInputSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { armazenarDadosUsuario } = useContext(DataContext);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const resultado = await AxiosInstance.post('/auth/signin', {
        "username": inputUsername,
        "password": inputSenha
      })
      if (resultado.status === 200) {
        console.log(resultado)
        var jwtToken = resultado.data;
        armazenarDadosUsuario(jwtToken["accessToken"])
        navigation.navigate('menu-principal')
      }
      else {
        console.log("! Erro ao realizar o login")
      }
    }
    catch (error) {
      console.log("! Erro durante o processo de login: " + error)
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../Assets/Logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Olá velho amigo, faça login com suas informações</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInputUsername}
        placeholder="Username"
        keyboardType="default"
        value={inputUsername}
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          secureTextEntry={!showPassword}
          style={styles.inputSenha}
          onChangeText={setInputSenha}
          placeholder="Senha"
          keyboardType="default"
          value={inputSenha}
        />
        <TouchableHighlight
          style={styles.passwordIcon}
          onPress={handleTogglePasswordVisibility}
          underlayColor="transparent"
        >
          <Ionicons
            style={styles.eyeStyle}
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size = {26}
          />
        </TouchableHighlight>
      </View>
      <TouchableHighlight style={styles.button} onPress={handleLogin}>
        <Text style={styles.button.text}>Fazer Login <Ionicons name="log-in-outline" size={26} /></Text>
      </TouchableHighlight>
      <View style={styles.signupContainer}>
        <Text style={styles.firstText}>Não possui uma conta?</Text>
        <TouchableHighlight>
          <Text style={styles.secondText}>Cadastre-se</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}
