
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap:10,
      backgroundColor: '#3176ca',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize: 30,
    },
    input: {
      height: '8%',
      width: '80%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: '80%',
      height: '10%',
      borderRadius: 15,
        text: {
          fontSize: 20
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
    },
    secondText:{
      fontSize: 20,
      fontWeight: 700,
    }
  });