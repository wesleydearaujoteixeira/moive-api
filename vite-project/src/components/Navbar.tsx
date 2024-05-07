import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import {useState} from 'react';
import './Navbar.css';



export const Navbar = () => {

  const [search, setSearch] = useState(" ");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent <HTMLFormElement> ) => {

    e.preventDefault();
    if(!search) return;

    navigate(`/search?q=${search}`);
    setSearch(" ");
    location.reload();

  }
  
  
  
  return (
    <nav id='navbar'>
    <h2>
        <Link to="/"> 
            <BiCameraMovie/> MoviesLib 
        </Link>
    </h2>
    <form  onSubmit={e => handleSubmit(e)}>
        <input type="text" 
        placeholder='Search for a Movie' 
        value={search}
        onChange={e => setSearch(e.target.value)}
        />
        
        <button type="submit"> 
            <BiSearchAlt2/> 
        </button>
    </form>
  
  </nav>
  )
}