import { useReducer } from 'react';
import logo from '../assets/logo.svg';
import GlobalContext from '../contexts/GlobalContext';
import reducer from '../contexts/reducer';
import './App.css';
import UserInfoPage from './UserInfoPage';

function App() {


  const initialState = {
    user: {
      name: 'Luke Skywalker',
      role: 'Jedi',
      age: 24,
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <GlobalContext.Provider value={{state, dispatch}}>
        <UserInfoPage/>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
