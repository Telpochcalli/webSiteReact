import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { HashRouter } from 'react-router-dom';

function App() {
  return (

    <HashRouter>
    <div className="App">
      <Main/>
    </div>
    </HashRouter>
  );
}

export default App;
