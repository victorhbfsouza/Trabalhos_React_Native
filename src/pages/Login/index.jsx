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
    console.log(inputUsername)
    console.log(inputSenha)
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

  const handleCadastro = () =>{navigation.navigate('cadastro')}

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../Assets/Logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Olá velho amigo, faça login com suas informações</Text>
      <View style={styles.inputContainer}>
        <Ionicons
                name={'person'}
                size = {26}
                color= {'#c1c2c2'}
                />
        <TextInput
          style={styles.input}
          onChangeText={setInputUsername}
          placeholder="Nome de usuário"
          keyboardType="default"
          value={inputUsername}
          returnKeyType='next'
        />
      </View>
      <View style={styles.passwordInputContainer}>
        <Ionicons
                name={'lock-closed'}
                size = {26}
                color= {'#c1c2c2'}
                />
        <TextInput
          secureTextEntry={!showPassword}
          style={styles.inputSenha}
          onChangeText={setInputSenha}
          placeholder="Senha"
          keyboardType="default"
          value={inputSenha}
          returnKeyType='go'
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
        <View style={styles.buttonContent}>
          <Text style={styles.button.text}>Fazer Login </Text>
          <Ionicons name="log-in-outline" size={32} color={'white'}/>
        </View>
      </TouchableHighlight>
      <View style={styles.signupContainer}>
        <Text style={styles.firstText}>Não possui uma conta?</Text>
        <TouchableHighlight onPress={handleCadastro}>
          <Text style={styles.secondText}>Cadastre-se</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}

