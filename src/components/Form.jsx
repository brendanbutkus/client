// import React, { Component } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'

const Form = (props) => {
    const { _id } = useParams();
    const [products, setProducts] = useState([]);
    const [forms, setForms] = useState({
        title: "",
        price: null,
        description: ""
    })

    const onChangeHandler = (event) => {
        setForms({
            ...forms,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(forms)
        console.log("submitted")
        axios.post("http://localhost:8000/api/products/create", forms)
            .then(res => {
                console.log(res);
                setProducts([...products, res.data.results]);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/findAll")
            .then(res => {
                console.log(res.data.results);
                setProducts(res.data.results);
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div className="App w-50 mx-auto">
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="col">
                    <input type="text" name="title" className='form-control mb-5' onChange={onChangeHandler} placeholder="product title" />
                    <input type="number" name="price" className='form-control mb-5' onChange={onChangeHandler} placeholder="price" />
                    <input type="text" name="description" className='form-control mb-5' onChange={onChangeHandler} placeholder="product description" />
                    <input type="submit" className="btn btn-lg btn-secondary" name="description" />
                </div>
            </form>
            <ul>
                {
                    products.map((item, i) => {
                        return <li key={i}><Link to={`/api/products/${item._id}`}>{item.title}</Link></li> 
                    })

                }
            </ul>
        </div>
    );

}

export default Form;