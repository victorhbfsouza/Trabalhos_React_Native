import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import DrawerRoutes from "./drawer.routes";
import EditoraLivros from "../pages/EditoraLivros/EditoraLivros";
import Cadastro from "../pages/Cadastro";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="cadastro" component={Cadastro}/>
        <Stack.Screen name="menu-principal" component={DrawerRoutes} />
    </Stack.Navigator>
  );
}
