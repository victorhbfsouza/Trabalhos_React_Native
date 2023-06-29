import 'react-native-gesture-handler';
import Routes from "./routes";
import { DataProvider } from './context/DataContext';
import { EditorasProvider } from './context/EditorasContext';
import { LivrosProvider } from './context/LivrosContext';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <DataProvider>
      <EditorasProvider>
        <LivrosProvider>
          <CartProvider>
            <Routes/>
          </CartProvider>
        </LivrosProvider>
      </EditorasProvider>
    </DataProvider>
  );
}

