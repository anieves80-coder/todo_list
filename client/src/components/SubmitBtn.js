import React from 'react';

const Results = props => {

    const onSubmit = () => {                
        props.addFnc();
    }

    return (    
        <button 
            type="submit" 
            className="btn btn-primary ml-2"
            onClick={ onSubmit }
            disabled={props.stat}
        >ADD</button>
    )
};

export default Results;