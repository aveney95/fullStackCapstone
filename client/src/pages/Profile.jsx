// // import '../styles/'
// import UserInfo from '../components/UserInfo'
// import UserListings from '../components/UserListingsCard'
// import { useLocation } from "react-router-dom";
// import Header from "../components/Header"
// import Footer from "../components/Footer"
// import Navigation from "../components/Navigation"
// import {ListingsProvider} from '../components/context/Context'
// import '../styles/Profile.css'

// function Profile() {
//   // const user = {
//   //   name: '',
//   //   bio: '',
//   //   avatar: 'https://via.placeholder.com/100'
//   // };
//   const location = useLocation();
// const user = location.state
// // const{test} = UseData()

//   const listings = [
//     {
//       title: '',
//       description: ''
//     },
//     {
//       title: '',
//       description: ''
//     },
//     {
//       title: '',
//       description: ''
//     }
//   ];

//   return (
    
//     <div className="container">
//       <Header />
//       <Navigation state={user} />

//       {/* {console.warn("test", test)} */}
//       {/* <p>Profile</p> */}
//       {console.log("Profile PAge HIT", user)}
//       <UserInfo user={user} />
//       <UserListings items={listings} />
//       <Footer />
//     </div>
//   );
// }

// export default Profile;

import "../styles/Profile.css";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import UserInfo from "../components/UserInfo";
import UserListings from "../components/UserListingsCard";
import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const user = location.state;

  const listings = [
    { title: "Listing 1", description: "Description 1" },
    { title: "Listing 2", description: "Description 2" },
    { title: "Listing 3", description: "Description 3" },
  ];

  return (
    <div className="profile-page">
      <Header />
      <Navigation state={user} />

      <main className="profile-content">
        <h1>Profile</h1>
        <UserInfo user={user} />
        <UserListings items={listings} />
      </main>

      <Footer />
    </div>
  );
}

export default Profile;
