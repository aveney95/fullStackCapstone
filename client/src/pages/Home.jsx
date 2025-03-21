import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      {console.log("home hit")}
      <div id="Home">
        <p>HOME PAGE</p>
        <Header />
        <Navigation />
        <Footer />
      </div>
    </>
  );
};
export default Home;
