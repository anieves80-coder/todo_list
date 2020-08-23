import React from 'react';

const DateField = props => {

    const inputChange = (e) => {           
        const {value} = e.target;    
        props.setDate(value);
    }

    return (
        <div className="form-group">            
            <input 
                type="text" 
                placeholder="Complete by date"
                className="form-control ml-2 mr-4" 
                onChange={inputChange}  
                value={props.val}  
                required
            />
        </div>
    )
};

export default DateField;