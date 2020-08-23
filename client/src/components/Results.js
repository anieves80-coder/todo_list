import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import searchAll from '../queries/searchAll';
import deleteMutation from '../mutations/deleteMutation';

const Results = (props) => {

    const { loading1, error1, data } = useQuery(searchAll);

    const [deleteOneRec, { infoDel }] = useMutation(deleteMutation, {
        refetchQueries: [{ query: searchAll }],
        awaitRefetchQueries: true
    });

    const deleteRec = (rec_id) => {
        deleteOneRec({ variables: { id: rec_id } });
    }
    const getDataToUpdateForm = (rec_id) => {
        for (const property in data.getAll) {
            if (data.getAll[property]._id === rec_id) {
                const { _id, description, date } = data.getAll[property];
                props.modifyForm(description, date, _id);
                break;
            }
        }
    }

    const dataView = () => {
        if (data) {
            return data.getAll.map(res => {
                return (
                    <div key={res._id} className="row border mt-2">
                        <div className="col">
                            <div className="font-italic">{res.description}</div>
                            <div className="font-weight-bold">{res.date}</div>
                        </div>
                        <div className="col-1 pt-3">
                            <div className="text-info">
                                <span onClick={() => getDataToUpdateForm(res._id)}>
                                    <i className="fas fa-pencil-alt"></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-1 pt-3">
                            <div className="text-danger">
                                <span onClick={() => deleteRec(res._id)}>
                                    <i className="far fa-times-circle"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                );
            });
        }
        return <div>{"Loading..."}</div>
    }

    return (
        <div className="container mt-5">
            {dataView()}
        </div>
    )
};

export default Results;