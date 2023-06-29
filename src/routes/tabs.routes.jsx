import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import React,{useEffect} from "react";
import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho/Carrinho";
import Editoras from "../pages/Editoras/Editoras";
import Favoritos from "../pages/Favoritos/Favoritos";
import EditoraLivros from "../pages/EditoraLivros/EditoraLivros";
import BuscaLivros from "../pages/BuscaLivros/BuscaLivros";
import Perfil from "../pages/Perfil/Perfil";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {

  useEffect(() => {}, [])

  return (
    <Tab.Navigator screenOptions={{ title: "Entre Linhas" }}>
      <Tab.Screen
        name="principal"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: "Inicio",
        }}
      />
      <Tab.Screen
        name="pesquisa"
        component={BuscaLivros}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="book-open" color={color} size={size}/>
          ),
          tabBarLabel: "Buscar Livros",
          title: "Buscar Livros",
        }}
      />
      <Tab.Screen
        name="carrinho"
        component={Carrinho}
        options={{
          tabBarBadge: 20,
          tabBarBadgeStyle: {
            backgroundColor: '#142344',
            fontSize: 14
          },
          tabBarIcon: ({color, size }) => (
            <Feather
              name="shopping-cart"
              color={color}
              size={size}
              />
          ),
          tabBarLabel: "Carrinho",
          title: "Carrinho",
        }}
      />

      <Tab.Screen
        name="favoritos"
        component={Favoritos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" color={color} size={size} />
          ),
          tabBarLabel: "Favoritos",
          title: "Favoritos",
        }}
      />

      <Tab.Screen
        name="perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          tabBarLabel: "Meu Perfil",
          title: "Meu Perfil",
        }}
      />
    </Tab.Navigator>
  );
}
