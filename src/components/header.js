import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      fontFamily: "Roboto,Helvetica,Arial,sans-serif",
      fontSize: "14px"
    }}
  >
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white" style={{padding: "0 8% 0 8%"}}>
        <Link
          to="/"
          className="navbar-brand"
        >
          {siteTitle}
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-1" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto pt-2">
            <li className="nav-item mr-4">
              <Link
                to={'/'}
                className={"nav-link"}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to={"/contact"}
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                dataToggle="dropdown"
                ariaHaspopup="true"
                ariaExpanded="false"
              >
                  CONTACT
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/terms-and-conditions">Terms and Conditions</Link>
                <Link className="dropdown-item" to="/privacy-policy">Privacy Policies</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
