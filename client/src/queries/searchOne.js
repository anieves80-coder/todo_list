import { gql } from '@apollo/client';

export default gql`

    query searchOne($id: String){
        searchById(id:$id){
            _id,
            description,
            date
        }
    }

  `;