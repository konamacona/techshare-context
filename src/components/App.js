import logo from '../assets/logo.svg';
import './App.css';
import UserInfoPage from './UserInfoPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <UserInfoPage/>
    </div>
  );
}

export default App;
