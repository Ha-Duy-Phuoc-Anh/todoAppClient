// Import libraries
import { Link } from "react-router-dom";

// Import components
import TODO_ICO from "assets/image/phixahTodoIco.png";

// Import CSS
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="Brand">
          <img src={TODO_ICO} alt="Phixah Todo" width={35} height={49.7} />
          <h2>PHIXAH TODO</h2>
        </div>
        <div className="AuthBtnGroup">
          <Link to="/signin">
            <button type="button">SIGN IN</button>
          </Link>
          <Link to="/signup">
            <button type="button">SIGN UP</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
