import React, { useEffect, useState } from 'react';
import { useParams, Link, } from 'react-router-dom';
import axios from 'axios';


const View = (props) => {
    const [view, setView] = useState({});
    const {_id} = useParams();
    const { removeFromDom } = props;

    useEffect (() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(res => {
            console.log(res);
            setView(res.data.results)
        })
        .catch(err => console.log(err));
    }, [_id])

    const onDeleteHandler = ((_id)=> {
        axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
        .then(res=>{
            removeFromDom(_id)
        })
        .catch(err=>console.log(err));
    })

        return(

            <div className='w-50 mx-auto'>
                <h1>ID: {_id} <Link to="/" className='btn btn-lg btn-danger' onClick={()=>onDeleteHandler(view._id)}>X</Link></h1>
                <h1>Name: {view.title}</h1>
                <p>Price: {view.price}</p>
                <p>Description: {view.description}</p>
            </div>


        )



}


export default View;

