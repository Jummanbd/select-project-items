import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userSearch } from '../../features/tasks/tasksSlice';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  // search bar
  useEffect(() => {
    dispatch(
      userSearch(search)
    )
  },[dispatch, search])
  
  return (
    <nav className="container relative py-3">
    <div className="flex items-center justify-between">
        <img src= './images/svg/logo.svg' alt='logo'/> 
      <div className="flex-1 max-w-xs search-field group">
        <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
        <input type="text" placeholder="Search Task" className="search-input text-black" id="lws-searchTask"  onChange={(e) => setSearch(e.target.value)}/>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;
