import logo from '../assets/logo.svg';
import GlobalContext from '../contexts/GlobalContext';
import './App.css';
import UserInfoPage from './UserInfoPage';

function App() {

  const globalState = {
    user: {
      name: 'Luke Skywalker',
      role: 'Jedi',
      age: 24,
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <GlobalContext.Provider value={globalState}>
        <UserInfoPage/>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
