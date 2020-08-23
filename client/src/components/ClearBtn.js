import React from 'react';

const ClearBtn = props => {

    const clickEvent = () => {                
        props.clearFnc();
    }

    return (    
        <button 
            type="button" 
            className="btn btn-danger ml-2"
            onClick={ clickEvent }
        >Clear</button>
    )
};

export default ClearBtn;