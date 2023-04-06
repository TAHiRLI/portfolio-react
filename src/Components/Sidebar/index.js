import React from 'react';
import "./sidebar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <div className='bg-gray text-center p-2 sidebar d-flex justify-content-between flex-column'>
      <div className="sidebar_logo ">
        <img src="/Images/download.png" alt="" className='w-100' />
        <p className='text-dark'>Tahir Tahirli</p>
      </div>
      <div className="sidebar_links">
        {/* link 1 */}
        <button className='sidebar-link mt-3'>
          Introduction
          <div className='clip'>
            <div className="corner leftTop"></div>
            <div className="corner rightBottom"></div>
            <div className="corner rightTop"></div>
            <div className="corner leftBottom"></div>
          </div>
          <span className="arrow rightArrow"></span>
          <span className="arrow leftArrow"></span>
        </button>

        {/* link 2 */}
        <button className='sidebar-link mt-3'>
          Skills
          <div className='clip'>
            <div className="corner leftTop"></div>
            <div className="corner rightBottom"></div>
            <div className="corner rightTop"></div>
            <div className="corner leftBottom"></div>
          </div>
          <span className="arrow rightArrow"></span>
          <span className="arrow leftArrow"></span>
        </button>
      {/* link 3 */}
      <button className='sidebar-link mt-3'>
          Projects
          <div className='clip'>
            <div className="corner leftTop"></div>
            <div className="corner rightBottom"></div>
            <div className="corner rightTop"></div>
            <div className="corner leftBottom"></div>
          </div>
          <span className="arrow rightArrow"></span>
          <span className="arrow leftArrow"></span>
        </button>
      </div>
      <div className="sidebar_contact-me">
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
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;