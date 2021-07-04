import React from "react";  
import Link from "next/link"  
import Query from "../components/query";  

const CV_URL = "https://austingarrett-web.s3.amazonaws.com/Garrett_Resume_01a88211ec.pdf"

const Nav = () => {
  return (
    <div>
      <div>
        <nav className="uk-navbar-container uk-dark uk-sticky" data-uk-navbar>
          <div className="uk-navbar-left uk-margin-left">
            <ul className="uk-navbar-nav">
              <li>
                <Link href="/">
                  <a>Austin Garrett</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-right uk-margin-right">
            <ul className="uk-navbar-nav">
              <li>
                <Link href="/">
                  <a className="uk-link-reset">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="uk-link-reset">Blog</a>
                </Link>
              </li>
              <li>
                <Link href={CV_URL}>
                  <a className="uk-link-reset">CV</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
