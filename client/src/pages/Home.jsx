import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Listings from "../pages/Listings"
import "../styles/Home.css";
import { useLocation } from "react-router-dom"

const Home = () => {
    const location = useLocation();
    const state = location.state;
  
  

  return (
    <>
      {console.log("home hit", state)}
      <div id="Home">
        {/* <p>HOME PAGE</p> */}
        <Header />
        <Navigation state={state}/>
        <div className="listings-box">
  <Listings />
</div>

        <Footer />
      </div>
    </>
  );
};
export default Home;
