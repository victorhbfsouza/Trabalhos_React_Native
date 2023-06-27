import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho/Carrinho";
import Editoras from "../pages/Editoras/Editoras";
import Favoritos from "../pages/Favoritos/Favoritos";
import EditoraLivros from "../pages/EditoraLivros/EditoraLivros";
import BuscaLivros from "../pages/BuscaLivros/BuscaLivros";
import Perfil from "../pages/Perfil/Perfil";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
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
          tabBarIcon: ({ focused, color, size }) => (
            focused ? ( 
            <Feather
              name="shopping-cart"
              color={'#142344'}
              size={size}
              style={{backgroundColor: '#e6474a',
                      width: 30,
                      height: 30,
                      position: 'absolute',
                      bottom: 20,
                      borderRadius: 100,
                      transform: [{scale: 2}]}}
              />
              ) : (
              <Feather
              name="shopping-cart"
              color={'#e6474a'}
              size={size}
              style={{backgroundColor: '#142344',
                      width: 30,
                      height: 30,
                      position: 'absolute',
                      bottom: 20,
                      borderRadius: 100,
                      transform: [{scale: 2}]}}
              />
            )
       
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
