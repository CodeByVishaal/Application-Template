/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import banner1 from "/assets/img/banner/1.jpg";
import ModalVideo from "react-modal-video";
import { useState } from "react";

interface DataType {
  navbarPlacement?: string;
  toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ul
        className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`}
        data-in="fadeInDown"
        data-out="fadeOutUp"
      >
        <li className="megamenu-fw megamenu-style-two column-three">
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/about-us">About Us</Link>
          {/* <ul className="dropdown-menu">
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/about-2">About Style Two</Link>
            </li>
            <li className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={toggleSubMenu}
              >
                {" "}
                Team Members
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/team">Team Style One</Link>
                </li>
                <li>
                  <Link to="/team-2">Team Style Two</Link>
                </li>
                <li>
                  <Link to="/team-details/1">Team Details</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={toggleSubMenu}
              >
                {" "}
                Projects
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/project">Project Showcase</Link>
                </li>
                <li>
                  <Link to="/project-2">Interactive Portfolio</Link>
                </li>
                <li>
                  <Link to="/project-3">Showcase Carousel</Link>
                </li>
                <li>
                  <Link to="/project-details/1">Project Details</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/faq">Faq</Link>
            </li>
            <li>
              <Link to="/not-found">Error Page</Link>
            </li>
            <li className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={toggleSubMenu}
              >
                Pages Light Version
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about-us-light">About Us</Link>
                </li>
                <li>
                  <Link to="/about-2-light">About Style Two</Link>
                </li>
                <li>
                  <Link to="/team-light">Team Style One</Link>
                </li>
                <li>
                  <Link to="/team-2-light">Team Style Two</Link>
                </li>
                <li>
                  <Link to="/team-details-light/1">Team Details</Link>
                </li>
                <li>
                  <Link to="/project-light">Project Showcase</Link>
                </li>
                <li>
                  <Link to="/project-2-light">Interactive Portfolio</Link>
                </li>
                <li>
                  <Link to="/project-3-light">Showcase Carousel</Link>
                </li>
                <li>
                  <Link to="/project-details-light/1">Project Details</Link>
                </li>
                <li>
                  <Link to="/contact-us-light">Contact Us</Link>
                </li>
                <li>
                  <Link to="/faq-light">Faq</Link>
                </li>
              </ul>
            </li>
          </ul> */}
        </li>
        <li className="">
          <Link to="/project" className="">
            Projects
          </Link>
        </li>
        <li className="">
          <Link to="/services-4" className="">
            Services
          </Link>
          {/* <ul className="dropdown-menu">
            <li>
              <Link to="/services">Service Version One</Link>
            </li>
            <li>
              <Link to="/services-2">Service Version Two</Link>
            </li>
            <li>
              <Link to="/services-3">Service Version Three</Link>
            </li>
            <li>
              <Link to="/services-4">Service Version Four</Link>
            </li>
            <li>
              <Link to="/service-details/1">Marketing Strategy</Link>
            </li>
            <li>
              <Link to="/service-details/1">Enterprise Consulting</Link>
            </li>
            <li>
              <Link to="/service-details/1">Growth Tracking</Link>
            </li>
            <li className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={toggleSubMenu}
              >
                Services Light Version
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/services-light">Service Version One</Link>
                </li>
                <li>
                  <Link to="/services-2-light">Service Version Two</Link>
                </li>
                <li>
                  <Link to="/services-3-light">Service Version Three</Link>
                </li>
                <li>
                  <Link to="/services-4-light">Service Version Four</Link>
                </li>
                <li>
                  <Link to="/service-details-light/1">Marketing Strategy</Link>
                </li>
              </ul>
            </li>
          </ul> */}
        </li>
        <li>
          <Link to="#" className="">
            Showreel
          </Link>
        </li>

        {/* <li className="dropdown">
          <Link
            to="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Blog
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/blog-standard">Blog Standard</Link>
            </li>
            <li>
              <Link to="/blog-with-sidebar">Blog With Sidebar</Link>
            </li>
            <li>
              <Link to="/blog-2-column">Blog Grid Two column</Link>
            </li>
            <li>
              <Link to="/blog-3-column">Blog Grid Three column</Link>
            </li>
            <li>
              <Link to="/blog-single/1">Blog Single</Link>
            </li>
            <li>
              <Link to="/blog-single-with-sidebar/1">
                Blog Single With Sidebar
              </Link>
            </li>
            <li className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={toggleSubMenu}
              >
                Blog Light Version
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/blog-standard-light">Blog Standard</Link>
                </li>
                <li>
                  <Link to="/blog-with-sidebar-light">Blog With Sidebar</Link>
                </li>
                <li>
                  <Link to="/blog-2-column-light">Blog Grid Two column</Link>
                </li>
                <li>
                  <Link to="/blog-3-column-light">Blog Grid Three column</Link>
                </li>
                <li>
                  <Link to="/blog-single-light/1">Blog Single</Link>
                </li>
                <li>
                  <Link to="/blog-single-with-sidebar-light/1">
                    Blog Single With Sidebar
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li> */}
        <li>
          <Link to="/contact-us">Contact</Link>
        </li>
      </ul>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="35mvh-2oII8"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default MainMenu;
