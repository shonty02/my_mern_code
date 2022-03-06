import { Button, Switch } from "@mui/material";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../userContext";

const Header = ({ darktheme, setDarktheme }) => {
  const { loggedin, setLoggedin, setCurrentUser } = useContext(UserContext);
  console.log(loggedin);
  const navigate = useNavigate();

  const logout = () => {
    // 1. update the loggedin variable
    // 2. remove the currentUser value
    // 3. Redirect to Login Page
    // 4. Destroy Session

    setLoggedin(false);
    setCurrentUser(null);
    navigate("/login");
    sessionStorage.removeItem("user");
  };

  const showLoggedin = () => {
    if (!loggedin) {
      return (
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <Button variant="contained" color="error" onClick={logout}>
            Logout
          </Button>
        </li>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          First App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/event">
                Event Handling
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addproduct">
                Add New Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/list">
                Browse Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manage">
                Manage Product
              </NavLink>
            </li>
            {showLoggedin()}
            <li className="nav-item">
              <Switch
                color="secondary"
                checked={darktheme}
                onChange={(e, v) => {
                  setDarktheme(v);
                }}
              />
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;