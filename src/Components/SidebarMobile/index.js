import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SidebarMobile(props) {

  console.log(props);

  const { isActive } = props;
  console.log(isActive);
  return (
    <div className={`sidebar-mobile d-flex d-lg-none  ${isActive ? "active" : ""}`}>
      <div className="sidebar-mobile-content w-100 ">
        {/* logo */}
        <div className="sidebar-mobile-content-logo d-flex col-md-5 col-sm-5 align-items-center flex-column ">
          <img src="/Images/download.png" alt="" className='w-50 logo' />
          <p className='text-center name'>Tahir Tahirli</p>
        </div>

        {/* links */}
        <div className="sidebar-mobile-content-links text-center">
          <a href="la" className="sidebar-mobile-content-links-link">
            <span>Home</span>
          </a>
          <a href="la" className="sidebar-mobile-content-links-link">
            <span>Skills</span>
          </a>
          <a href="la" className="sidebar-mobile-content-links-link">
            <span>Projects</span>
          </a>
          <a href="la" className="sidebar-mobile-content-links-link">
            <span>Contact me</span>
          </a>

        </div>

        {/* social */}

        <ul className="sidebar-mobile-content-social text-light">
          <li>
          <a href="link" target='_blank'>
          <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          </li>
          <li>
          <a href="link" target='_blank'>
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          </li>
          <li>
          <a href="link" target='_blank'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default SidebarMobile;