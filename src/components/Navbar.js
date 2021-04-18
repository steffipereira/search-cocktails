import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <Link to="/">
            <img src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg" alt="logo" className="logo" />
          </Link>
          <ul className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </ul>
        </div>
      </nav>
    </>
   );
}

export default Navbar;
