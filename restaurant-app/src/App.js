import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import RestaurantSearch from './component/RestaurantSearch';
import RestaurantList from './component/RestaurantList';
import RestaurantDetail from './component/RestaurantDetail';
import RestaurantCreate from './component/RestaurantCreate';
import RestauranrUpdate from './component/RestauranrUpdate';
import Protected from './component/Protected'
import Logout from './component/Logout'


function App() {
  return (
    <div className="App">
       <BrowserRouter>
     
         <Routes>
         <Route path="/list" element={<Protected component={RestaurantList} />} />
         <Route path="/create" element={<Protected component={RestaurantCreate} />} />
         <Route path="/search" element={<Protected component={RestaurantSearch} />} />
         <Route path="/details" element={<Protected component={RestaurantDetail} />} />
         <Route path="/update/:id" element={<Protected component={RestauranrUpdate} />} />
         <Route path="/login" element={<Login />} />
         <Route path="/logout" element={<Logout />} />
         <Route path="/" element={<Protected component={Home} />} />
         </Routes>
        
      </BrowserRouter> 
    </div>
  );
}

export default App;
