import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Contact List
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/add-contact">
                Add new contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
