import { useState, useEffect, useRef } from "react";
import NavDropdown from './NavDropdown.js'
import { NavLink } from "react-router-dom";
import {FaAngleDoubleDown, FaAngleDoubleRight} from 'react-icons/fa';
const NavItem = ({ item, depthLevel, resetNav, setResetNav}) => {
  const [dropdown, setDropdown] = useState(false);

  //Reset dropdowns when a link is pressed
  useEffect(() =>{
    setDropdown(false)
  },[resetNav]);

  //close opened dropdown when click outside it
  let navItemRef = useRef();
  useEffect(() => {
    const handler = (event) => {
     if (dropdown && navItemRef.current && !navItemRef.current.contains(event.target)) {
      //remove dropdown from this menu item
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);

   const liClassName = (depthLevel > 0 ? 'nav-dropdown-item' : 'nav-item')

   const Arrows = depthLevel > 0 ? <FaAngleDoubleRight />: <FaAngleDoubleDown />


    return (
    <li className={liClassName} ref={navItemRef}
    onMouseEnter={(e)=>{window.innerWidth > 970 && setDropdown(true);}}
    onMouseLeave={(e)=>{window.innerWidth > 970 && setDropdown(false);}}
    >
      {item.submenu ? (
        <>
          <NavLink className={'nav-link'}
            to='#'
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => {setDropdown((prev) =>!prev)}}
          >
            <span>
              {item.Icon}
              {' '}
              {item.title}
              {' '} 
            </span>
            {Arrows} 
          </NavLink>
          <NavDropdown
          dropdown = {dropdown} 
          submenu={item.submenu}
          depthLevel={depthLevel}
          setResetNav={setResetNav}
          resetNav={resetNav}/>
        </>
      ) : (
        <NavLink className={'nav-link'}
        onClick={(e)=>{
          setResetNav({})
        }}
        to={item.url}
        >
          <span>
            {item.Icon}
            {' '}
            {item.title}
          </span>
        </NavLink>
      )}
    </li>
  );
};

export default NavItem;