import 'react-native-gesture-handler';
import Routes from "./src/routes";
import { DataProvider } from './src/context/DataContext';

export default function App() {
  return (
    <DataProvider>
      <Routes/>
    </DataProvider>
  );
}
