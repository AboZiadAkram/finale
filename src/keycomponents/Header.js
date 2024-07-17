/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import '../css/headerStyle.css';
import SearchBar from './SearchBar';
// נסיתי להוסיף קומפונינטה שמייצגת תמונת רקע אך אחרי ההוספה כל קומפוננטת קארד גודלת בהתאם לתמונת רקע

const Header = () => {
  return (
    <>
    <header>
      <h3>Search Workers</h3>
      <SearchBar />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
    </>
    
  );
};

export default Header;
