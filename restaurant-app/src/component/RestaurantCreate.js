import React,{useState} from 'react'
import NavBarMenu from './NavBarMenu';

const RestaurantCreate = () => {
    const [create, setCreate] = useState({
        name:null,
        email:null,
        rating:null,
        address:null
    })

    const handleCreate = async() => {
        const response = await fetch("http://localhost:3000/restaurant",
        {
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(create)
        }
        )
        const responseValue = await response.json();
        console.log(responseValue)
    }
    return (
        <div>
            <h1>Restaurant Create</h1>
            <NavBarMenu />
            <input type="text" onChange={(e)=>{setCreate({...create,name : e.target.value})}} placeholder="Restaurant Name" /> <br /> <br />
            <input type="text" onChange={(e)=>{setCreate({...create,email : e.target.value})}} placeholder="Restaurant Email" /> <br /> <br />
            <input type="text" onChange={(e)=>{setCreate({...create,rating : e.target.value})}} placeholder="Restaurant Rating" /> <br /> <br />
            <input type="text" onChange={(e)=>{setCreate({...create,address : e.target.value})}} placeholder="Restaurant Address" /> <br /> <br />
            <button onClick={handleCreate}>Add Restaurant</button>
        </div>
    )
}

export default RestaurantCreate
