import { useEffect } from 'react'
import Title from './components/Title';

import AddContact from './components/AddContact';



function App(props) {

  // const [persons, setPersons] = useState(props.persons)
  useEffect(() =>{

  }, [])
  return (
    <div>
      <Title text='Phonebook' />

      <AddContact persons={props.persons} />
      

    </div>
  );
}

export default App;
