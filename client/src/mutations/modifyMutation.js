import { gql } from '@apollo/client';


export default gql`

    mutation ModifyRec($id:String!, $description:String!, $date:String!){
        updateFromList(id:$id, description:$description, date:$date){
            description
        }    
    }

`;