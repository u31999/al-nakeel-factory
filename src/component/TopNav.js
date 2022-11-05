import React from 'react'
import SearchBox from './SearchBox'
import { useMediaQuery } from 'react-responsive'

const TopNav = () => {
  const mdSize= useMediaQuery({query: '(max-width: 768px)'})

    
  return (
    <div className={mdSize ?  `top_nav top_nav_mobile` : `top_nav`}>
      <div className='searchBox_container'>
        <SearchBox />
      </div>
      <div className='btn_lang_container'>
      <button>English</button>
      </div>
      <div>
        
      </div>

    </div>
  )
}
 
export default TopNav
