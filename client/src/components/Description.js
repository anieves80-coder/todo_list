import React from 'react';

const Description = props => {

    const inputChange = (e) => {           
        const {value} = e.target;            
        props.setDescription(value);            
    }

    return (
        <div className="form-group">            
            <input 
                type="text" 
                placeholder="Description"
                className="form-control ml-2 mr-4" 
                onChange={inputChange}  
                value={props.val}  
                required                
            />
        </div>
    )
};

export default Description;