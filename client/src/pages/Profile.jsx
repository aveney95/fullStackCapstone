// import '../styles/'
import UserInfo from '../components/UserInfo'
import UserListings from '../components/UserListingsCard'
import { useLocation } from "react-router-dom";
import {UseData} from '../components/context/Context'

function Profile() {
  // const user = {
  //   name: '',
  //   bio: '',
  //   avatar: 'https://via.placeholder.com/100'
  // };
  const location = useLocation();
const user = location.state
const{test} = UseData()

  const listings = [
    {
      title: '',
      description: ''
    },
    {
      title: '',
      description: ''
    },
    {
      title: '',
      description: ''
    }
  ];

  return (
    <div className="container">
      {console.warn("test", test)}
      <p>Profile</p>
      {console.log("Profile PAge HIT", user)}
      <UserInfo user={user} />
      <UserListings items={listings} />
    </div>
  );
}

export default Profile;
