import React from 'react'
import './SearchHeader.css'

export const SearchHeader = ({handleSearch}) => {
  return (
    <>
    <div className='container'>
    <div className='search'>
        <input type='text' placeholder='Search the name' onChange={handleSearch} />
        <hr></hr>
    </div>
    
    </div>
    </>
  )
}
