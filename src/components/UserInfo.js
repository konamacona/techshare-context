import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import './UserInfoPage.css';

function UserInfo() {
  const userData = useContext(GlobalContext)?.user

	if (!userData) return null

  return (
    <ul className="UserInfo">
			{Object.keys(userData).map(k => {
				return <li key={k}>{k}: {userData[k]}</li>
			})}
    </ul>
  );
}

export default UserInfo;
