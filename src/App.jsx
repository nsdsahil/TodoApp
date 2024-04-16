import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Todos } from './components/todos'
import { TaskInput } from './components/TaskInput';

import { TodoTab } from './components/Tab';


function App() {
 

  return (
    <>
      <TodoTab/>
    </>
  )
}

export default App
