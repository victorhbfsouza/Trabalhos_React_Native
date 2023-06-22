
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
                placeholder="Username"
                keyboardType="default"
                value={inputUsername}
            />
            <TextInput
                style={styles.input}
                onChangeText={setInputUseremail}
                placeholder="Email"
                keyboardType="default"
                value={setInputUseremail}
            />
             <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={setInputSenha}
                placeholder="Senha"
                keyboardType="default"
                value={inputSenha}
            />
        </SafeAreaView>
    )
}

