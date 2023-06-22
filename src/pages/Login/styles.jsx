
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap:10,
      backgroundColor: '#142344',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize: 23,
      color: 'white',
      textAlign:'center',
    },
    input: {
      backgroundColor:'white',
      color: 'black',
      fontSize: 20,
      height: '8%',
      width: '90%',
      margin: 12,
      borderRadius: 15,
      padding: 10,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e6474a',
      padding: 10,
      width: '45%',
      height: '9%',
      margin: 12,
      borderRadius: 15,
        text: {
          fontSize: 23,
          color: 'white'
        }
    },
    signupContainer:{
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent: 'flex-end',
      alignContent: 'flex-end',
      padding: 10,
      gap: 5,
    },
    firstText:{
      fontSize: 20,
      color: 'white',
    },
    secondText:{
      fontSize: 20,
      fontWeight: 700,
      color: 'white',
    },
    logo: {
      width: 350,
      height: 250,
    },
    passwordInputContainer: {
      flexDirection: 'row',
      height: '8%',
      width: '90%',
      alignItems: 'center',
      borderRadius: 15,
      padding: 10,
      color: 'black',
      backgroundColor:'white',
    },
    inputSenha:{
      height: '100%',
      width: '90%',
      fontSize: 20,
    }
});