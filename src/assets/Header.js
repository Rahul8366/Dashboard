import React from 'react'

import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'


function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
           hello shahrukh   
        </div>
        <div className='header-right'>
        <BsSearch  className='icon'/>
        </div>
    </header>
  )
}

export default Header