import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Get in Touch</h6>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Contact</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Meet With us</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Privacy Statement</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Report Copyright Infringement</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Report on Security Issues</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Recom. For Traffic Mgt</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Newsletters</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Location Map</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Covid-19 updates</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Logos (Daffodil Family)</a>
          </Link>
          
        </nav>
        <nav>
        <h6 className="footer-title">Branding</h6>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>DIU Branding</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Career Opportunities</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Blog</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Photo Gallery</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>DIU News</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>DIU Press</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Employability 360</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>DIU IT</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Artofliving</a>
          </Link>
          
        </nav>
        <nav>
          <h6 className="footer-title">Useful Links</h6>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>skill.jobs</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Internship Portal</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Foundation Day</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Convocation</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>DIU Annual Report</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Brochure</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Prospectus</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Forms</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Brand Documents</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>Apps</a>
          </Link>
          <Link to=''>
          <a className="link link-hover flex"><PiArrowRightLight size="1.3rem" color="white"/>FAQ</a>
          </Link>
          
        </nav>
        <form>
          <h6 className="footer-title">Subscribe Us!</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav>
          <div className="grid grid-flow-col gap-4">
          <Link to="">
          <a href=""><FaFacebookF size="1.7rem" color="white" /></a>
          </Link>
          <Link to="">
          <a href=""><FaInstagram size="1.7rem" color="white" /></a>
          </Link>
          <Link to="">
          <a href=""><FaLinkedinIn size="1.7rem" color="white" /></a>
          </Link>
          <Link to="">
          <a href=""><BsTwitterX size="1.7rem" color="white" /></a>
          </Link>
          <Link to="">
          <a href=""><FaWhatsapp size="1.7rem" color="white" /></a>
          </Link>
          <Link to="">
          <a href=""><FaDiscord size="1.7rem" color="white" /></a>
          </Link>
           
            
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
