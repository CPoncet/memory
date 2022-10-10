import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/hof">Hall of Fame</Link>
    </nav>
  );
};

export default Nav;
