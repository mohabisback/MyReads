import React from 'react'
import Navbar from './Navbar';
import Burger from './Burger';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import {getDynamicNavItems} from './navItems/dynamicNavItems.js';
import BooksContext from '../../GlobalContexts/BooksContext.js';

const Header = () => {
  const {books, } = React.useContext(BooksContext)
  const [dynamicNavItems, setDynamicNavItems] = React.useState([])
  React.useEffect(()=>{
    if (books){ setDynamicNavItems(getDynamicNavItems(books))}
  },[books])
  
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo-container">
          <h3 className="logo">Brand<span>Name</span></h3>
        </Link>
        <Navbar dynamicNavItems={dynamicNavItems}/>
        <SearchBar />
        <Burger dynamicNavItems={dynamicNavItems}/>
      </div> 
    </header>
  );
};

export default Header;