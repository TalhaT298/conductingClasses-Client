import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Get in Touch</h6>
          <a className="link link-hover">Contact</a>
          <Link to=''>
          <a className="link link-hover">Branding</a>
          </Link>
          <Link to=''>
          <a className="link link-hover">Branding</a>
          </Link>
          <Link to=''>
          <a className="link link-hover">Branding</a>
          </Link>
          <Link to=''>
          <a className="link link-hover">Branding</a>
          </Link>
          <Link to=''>
          <a className="link link-hover">Branding</a>
          </Link>
          <Link to=''>
          <a className="link link-hover">Branding</a>
          </Link>
          <Link to=''>
          <a className="link link-hover">Branding</a>
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
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
