import { gql } from '@apollo/client';


export default gql`

    mutation AddRec($description: String!, $date: String!) {
        addToList(description: $description, date: $date){    
            _id    
        }
    }

`;