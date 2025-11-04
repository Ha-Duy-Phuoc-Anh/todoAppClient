import LEAF from "assets/image/leaf.png";
import "./Mainboard.css";
import { Link } from "react-router-dom";

const Mainboard = () => {
  return (
    <>
      <div className="IntroBlock">
        <div className="Slogan">
          <img src={LEAF} alt="First Leaf" width={121} height={200} />
          <div className="SloganText">
            <h1>
              Only what matters <br />
              No clutters
            </h1>
            <h3>With PHIXAH TODO</h3>
          </div>
          <img src={LEAF} alt="Second Leaf" width={121} height={200} className="flip-horizontal" />
        </div>
        <Link to="/signup"><button type="button">GET STARTED!</button></Link>
      </div>
    </>
  );
};

export default Mainboard;
