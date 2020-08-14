import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Navbar.css";
import LoggedInNav from "../LoggedInNav/LoggedInNav";
import LoggedOutNav from "../LoggedOutNav/LoggedOutNav";


class Navbar extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }


 handleLogout = (event) => {
   localStorage.clear();
   window.location.href = "/"

  }
 

  render() {
    return (
      <>
          <nav>
            <div className="nav-wrapper navbar">
              <a href="#" data-target="slide-out" className="sidenav-trigger right">
                <i className="material-icons">menu</i>
              </a>
              <Link to="/" id="logo">
                Linguick
              </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.props.isLoggedIn ? (
            <LoggedInNav />
          ) : (
            <LoggedOutNav />
          )}
              </ul>
            </div>
          </nav>
          <ul id="slide-out" className="sidenav">
          {this.props.isLoggedIn ? (
            <LoggedInNav />
          ) : (
            <LoggedOutNav />
          )}
          </ul>
      </>
    );
  }
}

export default Navbar;
