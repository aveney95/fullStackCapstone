import "../styles/UserInfo.css";
import { useState } from "react";
import axios from "axios";

const UserInfo = ({ user }) => {
  const [userProfile, setUserProfile] = useState({});
  const [update, setUpdate] = useState(false);

  const handleUpdate = (e) => {
    console.log("update", update);
    setUpdate(!update);
  };

  const handleUpdateUser = (e) => {
    setUserProfile({ ...userProfile, [e.target.id]: e.target.value });

    // axios({
    //   method: 'put',
    //   url: 'http://localhost:3000/editUser',
    //   data: {
    //     user: e.target.value
    //   }
    // })
    // .then(res => console.log("res", res.data))
    // .catch(err => console.log(err))
  };

  const handleUpdateSubmit = (e) => {
    axios({
      method: "put",
      url: `http://localhost:3000/editUser/${user.loggedIn._id}`,
      data: userProfile,
    }).then((res) => {
      console.log("res", res.data);
      setUpdate(!update);
    });
  };

  return (
    <div className="user-info">
      {console.log("updatea", update)}
      {console.log("userProfile", userProfile)}
      {console.log("user", user)}
      <img src={user.avatar} alt="User Avatar" className="avatar" />
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <button onClick={handleUpdate} className="update-button">Update Profile</button>


        {update ? (
          <div>
            <input
              id="user"
              onChange={(e) => handleUpdateUser(e)}
              placeholder="User"
            />
            <input
              id="location"
              onChange={(e) => handleUpdateUser(e)}
              placeholder="Location"
            />
            <button onClick={(e) => handleUpdateSubmit(e)}>Submit</button>
            {/* <input id='listings' onChange={(e) => handleUpdateUser(e)} placeholder="User"/> */}
          </div>
        ) : (
          <div>
            <p>{user.loggedIn.user}</p>
            <p>{user.loggedIn.location}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
