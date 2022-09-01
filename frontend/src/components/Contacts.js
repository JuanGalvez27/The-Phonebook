import React from 'react'

const Contacts = ({ person }) => {
  
  return (
    
    <li >
      Name: {person.name} || Number: {person.number}
    </li>
  )
}

export default Contacts