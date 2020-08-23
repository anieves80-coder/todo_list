import { gql } from '@apollo/client';


export default gql`

    mutation DeleteRec($id: String!) {
        deleteFromList(id: $id){    
            description    
        }
    }

`;