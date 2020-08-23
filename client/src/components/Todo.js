import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import Description from './Description';
import Results from './Results';
import DateField from './DateField';
import SubmitBtn from './SubmitBtn';
import UpdateBtn from './UpdateBtn';
import ClearBtn from './ClearBtn';

import searchAll from '../queries/searchAll';
import addMutation from '../mutations/addMutation';
import modifyMutation from '../mutations/modifyMutation';

const Todo = props => {

    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [msg, setMsg] = useState("");
    const [btnUpdateStatus, setBtnUpdateStatus] = useState(true);
    const [btnSaveStatus, setBtnSaveStatus] = useState(false);
    const [idToModify, setIdToModify] = useState("");

    const [addOneRec, { info }] = useMutation(addMutation, {
        refetchQueries:[{query: searchAll}],
        awaitRefetchQueries: true
    });
    const [updateOneRec, { infoUpdate }] = useMutation(modifyMutation, {
        refetchQueries: [{ query: searchAll }],
        awaitRefetchQueries: true
    });

    const data = { description, date };
  
    const addRec = () => {
        addOneRec({ variables: data });
    };

    const fillForm = (newDesc,newDate, id) => {
        setDescription(newDesc);
        setDate(newDate);
        setBtnSaveStatus(true);
        setBtnUpdateStatus(false);
        setIdToModify(id);        
    };

    const clearForm = () => {
        setDescription("");
        setDate("");
        setMsg("");
        setIdToModify("");
        setBtnSaveStatus(false);
        setBtnUpdateStatus(true);
    };

    const updateRec = () => {
        updateOneRec({ variables: { id: idToModify, description, date } });
        clearForm();
    };

    return (    
        <div className="container">            
            <h2 className="text-center mt-3">Todo list</h2><hr />
            <form className="form mt-5" onSubmit={(e)=>{e.preventDefault();}}>
                <div className="row">
                    <div className="col"><Description val={description} setDescription={setDescription}/></div>
                    <div className="col-3"><DateField val={date} setDate={setDate} /></div>
                </div>
                <div className="row">
                    <div className="col">
                        <SubmitBtn addFnc={addRec} stat={btnSaveStatus}/>
                        <UpdateBtn stat={btnUpdateStatus} cb={updateRec}/>
                        <ClearBtn clearFnc={clearForm}/>
                    </div>
                </div>  
                <small className="text-danger ml-2">{msg}</small>  
            </form>
            <Results frmData={data} modifyForm={fillForm}/>
        </div>
    )
};

export default Todo;