import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`  
  query Home {
    home {
      id
      content
    }
  }
`;

export default HOMEPAGE_QUERY;  
