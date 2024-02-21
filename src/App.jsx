import { useState } from 'react'
import ContactList from './Components/ContactList'
import SelectedContact from './Components/SelectedContact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [selectedContactId, setSelectedContactId] = useState(null)
console.log(selectedContactId)
  return (
    <>
    {selectedContactId ? (<div>You selected: <SelectedContact selectedContactId={selectedContactId} /></div>) : <ContactList setSelectedContactId={setSelectedContactId} />} 
    </>
  )
}

export default App
