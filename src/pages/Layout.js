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
            <Link to="/photo" className="Layout-sidebar">We Stare into the World and See Ourselves</Link>
            <Link to="/NewYork" className="Layout-sidebar">New York</Link>
            <Link to="/Iphone" className="Layout-sidebar">Shot on iPhone</Link>
          </div>
          <div className="Layout-bar">
            <div>Blogs</div>
            <Link to="/blogs" className="Layout-sidebar">Random Thoughts</Link>
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