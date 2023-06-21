
import { View, Text, TextInput, TouchableHighlight, SafeAreaView } from "react-native"
import { styles } from "./styles"
import React,{useState, useContext} from 'react';
import AxiosInstance from "../../api/AxiosInstance";
import { DataContext } from "../../context/DataContext";

export default function Login({navigation}) {

    const [inputUsername, setInputUsername] = React.useState('');
    const [inputSenha, setInputSenha] = React.useState('');
    const {armazenarDadosUsuario} = useContext(DataContext);

    const handleLogin = async () => {
        try{
            const resultado = await AxiosInstance.post('/auth/signin',{
                "username" : inputUsername,
                "password": inputSenha
            })
            if(resultado.status === 200){
                console.log(resultado)
                var jwtToken = resultado.data;
                armazenarDadosUsuario(jwtToken["accessToken"])
                navigation.navigate('menu-principal')
            }
            else{
                console.log("! Erro ao realizar o login")
            }
        }
        catch(error){
                    console.log("! Erro durante o processo de login: " + error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bem Vindo a E-ditora</Text>
            <TextInput
                style={styles.input}
                onChangeText={setInputUsername}
                placeholder="Username"
                keyboardType="default"
                value={inputUsername}
            />
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={setInputSenha}
                placeholder="Senha"
                keyboardType="default"
                value={inputSenha}
            />
            
            <TouchableHighlight style={styles.button} onPress={handleLogin}>
                <Text style={styles.button.text}>Fazer Login</Text>
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