import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Edit = (props) => {
    const [edits, setEdits] = useState({});
    // const [forms, setForms] = useState({})
    const {_id} = useParams();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(res => {
            console.log(res);
            setEdits(res.data.results)
        })
        .catch(err => console.log(err));
    }, [_id])

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(edits)
        console.log("submitted")
        axios.patch(`http://localhost:8000/api/products/${_id}/update`, edits)
            .then(res => {
                console.log(res);
                setEdits([...edits, res.data.results]);
            })
            .catch(err => console.log(err))
    }

    const onChangeHandler = (event) => {
        setEdits({
            ...edits,
            [event.target.name]: event.target.value
        })
    }

        return(
            <div className="App w-50 mx-auto">
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="col">
                    <input type="text" value={edits.title} name="title" className='form-control mb-5' onChange={onChangeHandler} placeholder="product title" />
                    <input type="number" value={edits.price} name="price" className='form-control mb-5' onChange={onChangeHandler} placeholder="price" />
                    <input type="text" value={edits.description} name="description" className='form-control mb-5' onChange={onChangeHandler} placeholder="product description" />
                    <input type="submit" className="btn btn-lg btn-secondary" name="description" />
                </div>
            </form>
            </div>

        )



}


export default Edit;