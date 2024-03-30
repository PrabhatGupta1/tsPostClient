import React from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="../index.html">
            <h1 className="tribeSphere-heading">TribeSphere</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="navbar-brand" href="">
                    <NotificationsNoneIcon />
                  </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="">
                    <img className="mx-2" src="../images/Home-img/inbox.png" alt="" width="35" height="35" />
                  </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-default" type="submit"><img src="../images/Home-img/search.png" alt="" /></button>
            </form>
            <a className="navbar-brand" href="">
                <img src="../images/Home-img/profile-pic.png" className="rounded-circle" alt="" width="40" height="40" />
              </a>
          </div>
        </div>
      </nav>
    );
}

export default Header;