
import { View, Text, Button, StyleSheet, TextInput, TouchableHighlight, SafeAreaView } from "react-native"
import { styles } from "./styles"
import React, { useState } from 'react';


export default function Cadastro({navigation}) {

const [inputUsername, setInputUsername] = React.useState('');
    const [inputSenha, setInputSenha] = React.useState('');
        
return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Entre linhas: Faça parte do clube ! </Text>
            <TextInput
                style={styles.input}
                onChangeText={setInputUsername}
                placeholder="Pseudônimo"
                keyboardType="default"
                value={inputUsername}
            />
            <TextInput
                style={styles.input}
                onChangeText={setInputUsername}
                placeholder="Email"
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
             <TouchableHighlight style={styles.button} >
                <Text style={styles.button.text}>Realizar Cadastro</Text>
            </TouchableHighlight>
        </SafeAreaView>
    )
}



