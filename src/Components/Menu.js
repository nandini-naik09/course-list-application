import { Link } from "react-router-dom";
import React from "react";

export default function Menu() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          Edureka Portal
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Courses">
                Courses
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Enquiries">
                Enquiries
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
