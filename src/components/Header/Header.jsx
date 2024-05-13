import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
            <div className='header-left'>
                <span style={{fontFamily:'Emblema One'}}>Brunel</span>
            </div>
            <div className='header-right'>
                <Link to="./auth" style={{textDecoration:'none'}}>
                <div className='projects'>
                    Get Projects
                </div>
                </Link>
                <div className='talent'>
                    Onboard Talent
                </div>
            </div>
        </div>
  )
}

export default Header