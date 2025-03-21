import '../styles/UserInfo.css';
import { useState } from 'react';
 

const UserInfo = ({ user }) => {

const[userProfile, setUserProfile] = useState({})
const [ update, setUpdate] =useState(false)

const handleUpdate = () => {
  setUpdate(!update)
}

  return (
    <div className="user-info">
      {console.log("updatea", update)}
      <img src={user.avatar} alt="User Avatar" className="avatar" />
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <p onClick={(e) => handleUpdate(e)}>Update Profile</p>


{update 
? 
(
<p>update True</p>
) 
:
(
<p>update False</p>
)}




      </div>
    </div>
  );
};

export default UserInfo;
