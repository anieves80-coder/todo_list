import React from 'react';

const UpdateBtn = props => {

    const onSubmit = () => {                
        props.cb();
    }

    return (    
        <button 
            type="submit" 
            className="btn btn-success ml-2"
            onClick={ onSubmit }
            disabled={props.stat}
        >Update</button>
    )
};

export default UpdateBtn;