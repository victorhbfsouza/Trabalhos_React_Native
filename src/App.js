import 'react-native-gesture-handler';
import Routes from "./routes";
import { DataProvider } from './context/DataContext';

export default function App() {
  return (
    <DataProvider>
      <Routes/>
    </DataProvider>
  );
}

