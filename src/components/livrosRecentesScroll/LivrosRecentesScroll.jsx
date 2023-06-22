import { FlatList } from "react-native";
import React, {useEffect, useContext, useState} from "react";
import RecentBookCard from "../Cards/RecentBooks/RecentBookCard";
import { DataContext } from "../../context/DataContext";
import AxiosInstance from "../../api/AxiosInstance";

export default function LivrosRecentes() {
  const {dadosUsuario} = useContext(DataContext);
  const [livros, setLivros] = useState('');

  useEffect(() => {
    AxiosInstance.get('/livros',{
      headers: {
              Authorization: `Bearer ${dadosUsuario.token}`
            }
    })
    .then(response => {
      setLivros(response.data);
    })
    .catch(error => console.error(error))
  },[]);

  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={livros}
    renderItem={({item}) => <RecentBookCard id={item.codigoLivro} titulo={item.nomeLivro} autor={item.autorDTO.nomeAutor} imagem={{ uri: "data:image/webp;base64," + item.imagem }}/>}
    keyExtractor={item => item.codigoLivro}
    />

  );
}
