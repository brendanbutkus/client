import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const View = (props) => {
    const [view, setView] = useState({});
    const {_id} = useParams();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(res => {
            console.log(res);
            setView(res.data.results)
        })
        .catch(err => console.log(err));
    }, [_id])

        return(

            <div className='w-50 mx-auto'>
                <h1>{_id}</h1>
                <h1>Name: {view.title}</h1>
                <p>Price: {view.price}</p>
                <p>Description: {view.description}</p>
            </div>

        )



}


export default View;

