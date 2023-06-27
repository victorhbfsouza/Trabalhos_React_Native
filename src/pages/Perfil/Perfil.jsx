import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BtnLogout } from '../../components/Button/BtnLogout'

export default function Perfil() {
  return (
    <View style={styles.container}>
        <Text>Perfil</Text>
        <BtnLogout/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})