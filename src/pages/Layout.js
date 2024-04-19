import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    <div className="Layout">
      <div>
        <div>
          <div className="Layout-bar">
            <div>Home</div>
            <Link to="/" className="Layout-sidebar">Bio</Link>
          </div>
          <div className="Layout-bar">
            <div>Photo</div>
            <Link to="/Corpse" className="Layout-sidebar">Who's found the corpse by the water (2024)</Link>
            <Link to="/Water" className="Layout-sidebar">Water (2024)</Link>
            <Link to="/Iphone" className="Layout-sidebar">In Search of HOME (2023)</Link>
            <Link to="/Photo" className="Layout-sidebar">We Stare into the World and See Ourselves (2022)</Link>
            {/* <Link to="/Und" className="Layout-sidebar">und</Link> */}
            {/* <Link to="/NewYork" className="Layout-sidebar">New York</Link> */}
            
            
          </div>
          <div className="Layout-bar">
            <div>Travels</div>
            {/* <Link to="/blogs" className="Layout-sidebar">Random Thoughts</Link> */}
            <Link to="/Travel" className="Layout-sidebar">Travels</Link>
            {/* <Link to="/P5" className="Layout-sidebar">Digital Art</Link> */}
          </div>
          <div>
            <Link to="/contact" className="Layout-bar">Contact</Link>
            <div className="Layout-sidebar">nikkylu.zl@gmail.com</div>
          </div>
        </div>
        <div className="Layout-sidebar">© Nikky Lu 2023 All Rights Reserved</div>
      </div>

      <Outlet />
    </div>
  )
};

export default Layout;