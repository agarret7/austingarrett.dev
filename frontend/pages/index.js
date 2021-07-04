import { useRouter } from "next/router";
import React from "react";  
import Query from "../components/query";
import HOMEPAGE_QUERY from "../apollo/queries/homepage/homepage";
import MarkdownRender from '../utils/katex';

const PROFILE_PIC_URL = "https://austingarrett-web.s3.amazonaws.com/austin_garrett_629fb1bc7c.jpg"
const CV_URL = "https://austingarrett-web.s3.amazonaws.com/Garrett_Resume_01a88211ec.pdf"

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <center><div className="image-cropper"><img src={PROFILE_PIC_URL} alt="" width="400" height="400" className="alignnone size-medium wp-image-34"/></div></center>
          <h1 className="uk-text-center uk-heading-small">Austin Garrett</h1>
          <hr className="uk-divider-icon" />
          <Query query={HOMEPAGE_QUERY} id={router.query.id}>
            {({ data: { home } }) => {
              return <MarkdownRender source={home.content} />
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
