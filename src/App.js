import MessagingApp from './components/MessagingApp';
import MessagingConfig from './components/MessagingConfig';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <MessagingConfig />
      <MessagingApp />
    </div>
  );
}

export default App;
