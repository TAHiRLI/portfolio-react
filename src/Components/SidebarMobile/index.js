import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from "../../Assets/Images/logo.png";
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Consts/Routes';


function SidebarMobile(props) {

  console.log(props);

  const { isActive } = props;
  console.log(isActive);
  return (
    <div className={`sidebar-mobile d-flex d-lg-none  ${isActive ? "active" : ""}`}>
      <div className="sidebar-mobile-content w-100 ">
        {/* logo */}
        <div className="sidebar-mobile-content-logo d-flex col-md-5 col-sm-5 align-items-center flex-column ">
          <img src={logo} alt="" className='w-50 logo' />
          <p className='text-center name'>Tahir Tahirli</p>
        </div>

        {/* links */}
        <div className="sidebar-mobile-content-links text-center">
          <Link to={ROUTES.Home} className="sidebar-mobile-content-links-link">
            <span>Home</span>
          </Link>
          <Link to={ROUTES.Skills} className="sidebar-mobile-content-links-link">
            <span>Skills</span>
          </Link>
          <Link to={ROUTES.Projects} className="sidebar-mobile-content-links-link">
            <span>Projects</span>
          </Link>
          <Link to={ROUTES.Contact} className="sidebar-mobile-content-links-link">
            <span>Contact me</span>
          </Link>

        </div>

        {/* social */}

        <ul className="sidebar-mobile-content-social text-light">
          <li>
            <a href="https://www.linkedin.com/in/tahirtahirli" rel='noreferrer' target='_blank'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="https://github.com/TAHiRLI" rel='noreferrer' target='_blank'>
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>
          <li>
            <Link
              to='#'
              onClick={(e) => {
                window.location.href = 'mailto:tahirli.tahirr@gmail.com';
                e.preventDefault();
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default SidebarMobile;