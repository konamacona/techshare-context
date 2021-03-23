import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import './UserInfoPage.css';

function UserInfo() {
	const { state, dispatch } = useContext(GlobalContext)
  const userData = state?.user

	if (!userData) return null

  return (
    <ul className="UserInfo">
			{Object.keys(userData).map(k => {
				return <li key={k}>{k}: {userData[k]}</li>
			})}
			<button onClick={() => dispatch({ type: 'increment_age'})}>Age Up</button>
    </ul>
  );
}

export default UserInfo;
