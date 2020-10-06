import React from "react";  
import Link from "next/link"  
import Query from "../components/query";  
import CATEGORIES_QUERY from "../apollo/queries/category/categories";

const Nav = () => {  
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
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
                      <Link href="http://localhost:1337/uploads/d537a73e570f46aaa06f1c1362cfb7ad.pdf">
                        <a className="uk-link-reset">CV</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;  
