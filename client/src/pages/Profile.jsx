// import '../styles/'
import UserInfo from '../components/UserInfo'
import UserListings from '../components/UserListingsCard'

function Profile() {
  const user = {
    name: '',
    bio: '',
    avatar: 'https://via.placeholder.com/100'
  };

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
      <p>Profile</p>
      {console.log("Profile PAge HIT")}
      <UserInfo user={user} />
      <UserListings items={listings} />
    </div>
  );
}

export default Profile;
