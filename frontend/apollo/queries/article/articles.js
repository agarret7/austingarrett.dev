import gql from "graphql-tag";

const ARTICLES_QUERY = gql`  
  query Articles {
    articles(sort: "published_at") {
      id
      title
      abstract
      published_at
    }
  }
`;

export default ARTICLES_QUERY;  
