import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import './UserInfoPage.css';

function UserInfo({user, incrementAge}) {
	if (!user) return null

  return (
    <ul className="UserInfo">
			{Object.keys(user).map(k => {
				return <li key={k}>{k}: {user[k]}</li>
			})}
			<button onClick={incrementAge}>Age Up</button>
    </ul>
  );
}

const mapContextToProps = Component => props => {
	const { state, dispatch } = useContext(GlobalContext)
  const userData = state?.user
	const incrementAge = () => dispatch({ type: 'increment_age'})
	return <Component {...props} user={userData} incrementAge={incrementAge}/>
} 

export default mapContextToProps(UserInfo);
