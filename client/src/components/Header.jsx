import logo from '../assets/logo.jpg'
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="App Logo" className="logo" />
      <h1 className="app-title">
        Poppy's Market
      </h1>
    
    </header>
  );
};

export default Header;