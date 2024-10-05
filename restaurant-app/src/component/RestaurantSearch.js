import React, { useState } from 'react';
import '../App.css';
import NavBarMenu from './NavBarMenu';
import { Table, Form, Container } from 'react-bootstrap';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDeleteLeft, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'

const RestaurantSearch = () => {
  const [searchData, setSearchData] = useState([]);
  const [isTotal, setIsTotal] = useState(false);
  const [lastSearch, setLastSearch] = useState("")

  const handleSearch = async (key) => {
    setLastSearch(key)
    // Prevent search if the key is empty
    if (key.trim() === "") {
      setSearchData([]); // Clear search data if input is empty
      setIsTotal(false); // Clear "No Data Found" message
      return;
    }

    const searchKey = key.toLowerCase(); // Convert search key to lowercase
    console.log('Search term:', searchKey); // Logging the search term for debugging

    try {
      // API call to search by address
      const searchRes = await fetch(`http://localhost:3000/restaurant`);
      const searchVal = await searchRes.json();
      console.log('Search result:', searchVal); // Logging the response data

      // Filter the results based on the lowercase address
      const filteredResults = searchVal.filter(item =>
        item.address.toLowerCase().includes(searchKey) // Convert address to lowercase for comparison
      );

      // Handling the filtered results
      if (filteredResults.length > 0) {
        setSearchData(filteredResults);
        setIsTotal(false); // Clear "No Data Found" message
      } else {
        setIsTotal(true); // Show "No Data Found" message
        setSearchData([]); // Clear previous search results
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsTotal(true); // Show "No Data Found" in case of error
    }
  };

  const handleDelete = async(id) => {
    const result = await fetch(`http://localhost:3000/restaurant/${id}`,
    {
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        },
    })
    const deleteResult = await result.json();
    handleSearch(lastSearch)
    alert('item has been deleted')
}

  return (
    <Container>
      <NavBarMenu />
      <Form.Control type="text" onChange={(e) => handleSearch(e.target.value)} placeholder="Search Restaurants by Address" />
      <div>
        {
          searchData.length > 0 ? (
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
              {searchData.map((item,i) => 
                //  <div>
                <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.rating}</td>
                <td>{item.address}</td>
                <td><Link to={"/update/"+ item.id}><FontAwesomeIcon  icon={faPenToSquare} color="orange" /></Link></td>
                <td><span onClick={() => handleDelete(item.id)}><FontAwesomeIcon  icon={faTrash} color="red" /></span></td>
            </tr>
            // </div>
                )}
              </tbody>
              </Table>
            </div>
          ) : (
            isTotal && <h3>No Data Found</h3> // Show "No Data Found" only when no results
          )
        }
      </div>
    </Container>
  );
};

export default RestaurantSearch;
