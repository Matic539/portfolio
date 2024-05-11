import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { Route, Switch, Link } from "react-router-dom";



function App() {
  return (
    <div>
      <Header  />
      <Main />
    </div>
  );
}

export default App;
