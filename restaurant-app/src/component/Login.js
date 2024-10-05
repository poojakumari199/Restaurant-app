import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarMenu from './NavBarMenu';

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("login");
    const searchRes = await fetch(`http://localhost:3000/login/?name=${userDetails.name}`);
    const searchVal = await searchRes.json();
    localStorage.setItem("key",JSON.stringify(searchVal))
    console.log('Search result:', searchVal);
    if(searchVal.length > 0){
     console.log(navigate('/list'))
    }
    else{
        alert("please check user name and password")
    }
  };

  return (
    <div>
          <NavBarMenu />
      <input
        type="text"
        placeholder="Enter name"
        name="user"
        value={userDetails.name}
        onChange={(e) => setUserDetails({
          ...userDetails, // Keep the previous values of the object
          name: e.target.value // Update only the 'name' field
        })}
      />
      <br /><br />
      <input
        type="password"
        placeholder="Enter password"
        name="password"
        value={userDetails.password}
        onChange={(e) => setUserDetails({
          ...userDetails, // Keep the previous values of the object
          password: e.target.value // Update only the 'password' field
        })}
      />
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
