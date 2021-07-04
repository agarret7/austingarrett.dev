import gql from "graphql-tag";

const ARTICLES_QUERY = gql`  
  query Articles {
    articles(sort: "date") {
      id
      title
      description
      date
    }
  }
`;

export default ARTICLES_QUERY;  
