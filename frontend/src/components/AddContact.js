import axios from 'axios';
import { React, useEffect, useState } from 'react'
import Contacts from './Contacts';

const AddContact = () => {
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber ] = useState(0)
  const [persons, setPersons] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001')
      .then(res =>{
        setPersons(res.data)
      })
  },[])

  const handleNameChange = (e) => {
    setNewName(e.target.value)
    }
  
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilter = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() =>{
    const results = persons.filter(person =>
      person.name.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])


  const addNewContact = (e) => {
    e.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    } 
    setPersons(persons.concat(newObject))
    setNewName('');
    setNewNumber(0);
    console.log({persons})
  }

  return (
    <div>
      <label>
        Filter shown with 
        <input 
          type='text' 
          onChange={handleFilter} 
          value={searchTerm}  
        />
      </label>
      <ul>
        {searchResults.map(e => (
        <li>{e.name}</li>)
        )}
      </ul>

      <h1>Add a new contact</h1>
      <form onSubmit={addNewContact}>
        <label>
          Name: 
          <input type='text' name='name' onChange={handleNameChange} /> <br />
        </label>
        <label>
          Number: 
          <input type='number' name='number' onChange={handleNumberChange}  /> <br />
        </label>
        <button type='submit'>
          Add Contact</button>
      </form>
      <ul>
      {persons.map((person) => (
        <Contacts key={person.id} person={person} />
      )
      )}
      </ul>
    </div>
  )
}

export default AddContact