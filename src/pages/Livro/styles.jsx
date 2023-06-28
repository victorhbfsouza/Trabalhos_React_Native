
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 8,
        gap: 10
    },
    container:{
        height: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width: 170,
        height: 170,
        resizeMode: 'contain',
    },
    leftMenu:{
        height: '100%',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    rightMenu:{
        height: '100%',
        justifyContent: 'space-around',
        padding: 20,
    }, 
    bookInfo:{
        gap: 10,
        maxWidth: 180
    },
    bookCurrency:{
        fontSize: 10,
        fontWeight: 100
    } ,
    bookTitle:{
        fontSize: 20,
        fontWeight: 600,
    },
    bookAuthor:{
        fontSize: 16,
        color: "#767575",
    },
    bookPublisher:{
        fontSize: 14,
        color: "#A8A3A3"
    },
    priceContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 2,
    },
    addCartBtn:{
       flexWrap: 'wrap',
       flexDirection: 'row',
       gap: 10,
       width: 180,
       padding: 10,
       alignItems: 'center',
       justifyContent: 'center',
       color: '#ffffff',
       backgroundColor: '#3176ca',
       borderRadius: 8
    },
    favoriteBtn:{
        flexDirection: 'row',
        gap: 20,
    },
    btnTextFavoritado:{
        color: 'red'
    },
    btnTextFavorito:{
        color: '#000000'
    },
    btnText:{
        color: '#ffffff',
        fontSize: 12
    },
    bookPrice:{
        fontSize: 23
    },
    description:{
    },  
    descriptionTitle:{
        fontSize: 27,
        textAlign: 'justify'
    },
    descriptionText:{

    },
})