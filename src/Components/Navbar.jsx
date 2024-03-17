import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center lg:w-[78%] h-[90px] mx-3 md:mx-10 lg:mx-auto zoom-8">
      <div>
        <img src={logo} alt="logo" width={"90%"} className="object-cover" />
      </div>
      <ul className="flex gap-5">
        <li className="btn btn-hover">
          <NavLink to={"/"}>
            <button>Home</button>
          </NavLink>
        </li>
        <li className="btn btn-hover">
          <NavLink to={"/contact"}>
            <button>Contact Us</button>
          </NavLink>
        </li>
      </ul>
      <button className="custom-login-btn btn btn-hover zoom-7">Login</button>
    </div>
  );
};

export default Navbar;
