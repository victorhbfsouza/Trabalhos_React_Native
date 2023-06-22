
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1/2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    image:{
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    rightMenu:{
        flex:1,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },  
    bookInfo:{
        flex: 1,
        flexDirection: 'column'
    },
    bookTitle:{
        fontSize: 20,
        fontWeight: 600
    },
    bookAuthor:{
        fontSize: 16,
        color: "#767575",
    },
    bookPublisher:{
        fontSize: 14,
        color: "#A8A3A3"
    },
    addCartBtn:{
       flexWrap: 'nowrap',
       flexDirection: 'row',
       gap: 10,
       width: '70%',
       padding: 10,
       alignItems: 'center',
       justifyContent: 'center',
       color: '#ffffff',
       backgroundColor: '#3176ca',
       borderRadius: 8
    }
})