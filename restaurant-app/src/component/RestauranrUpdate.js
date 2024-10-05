import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import NavBarMenu from './NavBarMenu';

const RestauranrUpdate = () => {
    const [create, setCreate] = useState({
        Fname:'',
        email:'',
        rating:'',
        address:''
    })
    const { id } = useParams();
    
    const handleUpdate = async() =>{
        const response = await fetch(`http://localhost:3000/restaurant/${id}`,
        {
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name: create.Fname,  // Send 'name' if that's what your API expects
            email: create.email,
            rating: create.rating,
            address: create.address})
        }
        )
        const responseValue = await response.json();
        alert("has been updated")
        console.log(responseValue)
        }

    useEffect(() => {
        async function updateApi(){
            const response = await fetch(`http://localhost:3000/restaurant/${id}`)
            const responseDataVal = await response.json()
            console.log(responseDataVal)
            setCreate({
                Fname:responseDataVal.name,
                email:responseDataVal.email,
                rating:responseDataVal.rating,
                address:responseDataVal.address,
                id:responseDataVal.id
            })
            }
            updateApi()
    }, [])
      return (
        <div>
            <h1>Restaurant Update</h1>
            <input type="text" value={create.Fname} onChange={(e)=>{setCreate({...create,Fname : e.target.value})}} placeholder="Restaurant Name" /> <br /> <br />
            <input type="text" value={create.email} onChange={(e)=>{setCreate({...create,email : e.target.value})}} placeholder="Restaurant Email" /> <br /> <br />
            <input type="text" value={create.rating} onChange={(e)=>{setCreate({...create,rating : e.target.value})}} placeholder="Restaurant Rating" /> <br /> <br />
            <input type="text" value={create.address} onChange={(e)=>{setCreate({...create,address : e.target.value})}} placeholder="Restaurant Address" /> <br /> <br />
            <button onClick={handleUpdate}>update Restaurant</button>
        </div>
    )
}

export default RestauranrUpdate
