import { NavLink } from "react-router-dom";

const SecHeader = ({Logo , dropdownItem , MenuInfo}) => {

  return (
      <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="#"><span><img draggable="false" src={Logo} alt="logo" /></span></a>
          {/* Toggler/collapsibe Button */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {MenuInfo && MenuInfo.map((item , key) => (
                <li className="nav-item" key={key}>
                  <a className="nav-link" href={item.path}>{item.nameLink}</a>
                </li>
              ))}
              <li className="lh-55px"><a href="#" className="btn login-btn ml-50">WHITEPAPER</a></li>
              <li className="lh-55px"><a href="#" className="btn login-btn ml-50">BUY TOKEN</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default SecHeader;