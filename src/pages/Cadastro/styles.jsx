
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap:10,
      backgroundColor: '#142344',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: 20
    },
    imageWrapper:{
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      width: '100%',
      height: '100%',
    },
    title:{
      fontSize: 30,
      color: 'white',
      textAlign:'center',
    },
    input: {
      backgroundColor:'white',
      color: 'black',
      fontSize: 20,
      height: '90%',
      width: '100%',
      margin: 12,
      borderRadius: 15,
      padding: 10
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: '#e6474a',
      padding: 10,
      width: '60%',
      height: '9%',
      margin: 12,
      borderRadius: 15,
        text: {
          fontSize: 20,
          color: 'white'
        }
    },
    buttonContent:{
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center'
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
    },
    secondText:{
      fontSize: 20,
      fontWeight: 700,
    },
    inputContainer:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      color: 'black',
      fontSize: 20,
      height: '8%',
      width: '90%',
      margin: 10,
      borderRadius: 15,
      padding: 10,
    },
    inputSenha: {
      height: '100%',
      width: '90%',
      marginLeft: 12,
      fontSize: 20,
      borderRadius: 15,
      padding: 10,
    }
  });