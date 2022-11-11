import React, { useState } from 'react'
import staticNavItems from '../navItems/staticNavItems.js';
import NavItem from './NavItem.js'

const Navbar = ({dynamicNavItems}) => {

  const [resetNav ,setResetNav] = useState({})

  return (
    <div className='nav-container'>
        <ul className='nav-items'>
        {staticNavItems.concat(dynamicNavItems).map((item, index) => {
            let depthLevel = 0;
            return (
              <NavItem
                item={item}
                key={index}
                depthLevel={depthLevel}
                resetNav={resetNav}
                setResetNav={setResetNav}
              />
            )
          })}
        </ul>
    </div>
  );
};

export default Navbar