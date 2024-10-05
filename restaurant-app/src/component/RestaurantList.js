import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import NavBarMenu from './NavBarMenu';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDeleteLeft, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'


const RestaurantList = () => {
    const [list, setList] = useState([]);

    const handleDelete = async(id) => {
        const result = await fetch(`http://localhost:3000/restaurant/${id}`,
        {
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            },
        })
        const deleteResult = await result.json();
        callApi()
        alert('item has been deleted')
    }
    async function callApi() {
        const responseData = await fetch("http://localhost:3000/restaurant");
        const data = await responseData.json();
        setList(data);
    }
    useEffect(() => {
        callApi()
    }, [])
    return (

        <div>
            <h1>Resataurant List</h1>
            <NavBarMenu />
            {list ?
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Rating</th>
                                <th>Address</th>
                                <th>Operation</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((item , i) =>
                                        <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.address}</td>
                                        <td><Link to={"/update/"+ item.id}><FontAwesomeIcon  icon={faPenToSquare} color="orange" /></Link></td>
                                        <td><span onClick={() => handleDelete(item.id)}><FontAwesomeIcon  icon={faTrash} color="red" /></span></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
                : <p>Please wait...</p>}
        </div>
    )
}

export default RestaurantList
