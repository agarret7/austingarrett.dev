import gql from "graphql-tag";

const ARTICLE_QUERY = gql`  
  query Articles($id: ID!) {
    article(id: $id) {
      id
      title
      content
      date
    }
  }
`;

export default ARTICLE_QUERY;  
