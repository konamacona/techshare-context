import './UserInfoPage.css';

function UserInfo() {
	// TODO: Get actual user data
  const userData = {test: 'foo'}

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
