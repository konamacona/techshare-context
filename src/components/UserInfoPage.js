import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import UserInfo from './UserInfo';
import './UserInfoPage.css';

function UserInfoPage() {
  const loggedIn = useContext(GlobalContext)?.user !== null
  return (
    <div className="UserInfoPage">
      <h1>User Info</h1>
      {loggedIn ? <UserInfo/> : "Not logged in"}
    </div>
  );
}

export default UserInfoPage;
