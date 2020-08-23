import { gql } from '@apollo/client';

export default gql`
    {
       getAll {
            _id,
            description,
            date
        }
    }
`;