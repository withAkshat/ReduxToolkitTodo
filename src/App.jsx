import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
 const [update, setUpdate] = useState(false);
const [updateId, setUpdateId] = useState(null);

  return (
    <>
     <h1>Redux toolkit</h1>
      <AddTodo update ={ update} updateId= {updateId} setUpdate = {setUpdate} setUpdateId = {setUpdateId}/>
      <Todos setUpdate = {setUpdate} setUpdateId = {setUpdateId} />
    </>
  )
}

export default App
