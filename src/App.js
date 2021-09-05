import { BrowserRouter} from 'react-router-dom';
import SmileButton from './components/SmileButton/SmileButton';
import AppRouter from './components/AppRouter/AppRouter';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <SmileButton />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
