import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import TabRoutes from "./tabs.routes";
import Editoras from "../pages/Editoras/Editoras";
import Home from "../pages/Home";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: "Livraria" }}>

      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "Início"
        }}
      />

      <Drawer.Screen
        name="editoras"
        component={Editoras}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="book-open" color={color} size={size} />
          ),
          drawerLabel: "Editoras",
          title: "Editoras",
        }}
      />
    </Drawer.Navigator>
  );
}