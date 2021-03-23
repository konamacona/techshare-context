import UserInfo from './UserInfo';
import './UserInfoPage.css';

function UserInfoPage() {
  // TODO: Check if user is logged in
  const loggedIn = true
  return (
    <div className="UserInfoPage">
      <h1>User Info</h1>
      {loggedIn ? <UserInfo/> : "Not logged in"}
    </div>
  );
}

export default UserInfoPage;
