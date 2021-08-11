import { gql } from "@apollo/client";

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
               bookId: String
               authors: [String]
               description: String
               title: String
               image: String
               link: String
            }
        }
    }    
`;
