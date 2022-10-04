// to use the router we must wrap everything within it, <Router></Router>. BrowserRouter uses the html 5 push state.
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'          

import Header from './components/Header' 
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import Footer from './components/Footer'

import React from 'react';

/**
    in order to load json data when the page loads, we will useEffect. Which deals with side effects. 
    And its often used when you want something to happen right when the page loads
 */
import { useState, useEffect } from "react"

function App() {

  const [showAddTask, setShowAddTasks] = useState(true)

  // we want to call this piece of state, tasks. And then we want a function to update the state, setTasks.
  // then we use the hook, useState and set it to an array of objects (data).
  const [tasks, setTasks] = useState([])

  // useEffect takes in an arrow function. 
  useEffect( () => {
    
    
    const getTasks = async () => {                          // need async b/c fetch returns a promise
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()

  /**
      add a dependency array. if you have a value that you would like to run, and if that value changes, 
      you will want to pass it in here. We won't be using this feature but we still have to pass an empty array: 
   */
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()                           // this will give us just the json data

    return data
  }

  const addTask = async (task) => {


    const res = await fetch(
      `http://localhost:5000/tasks`, {
        method: 'POST',
        headers: {
          // since we are adding data, we need to add headers b/s we need to specify the content-type:
          'Content-type': 'application/json'
        },
        // outside of the headers, we want to set the body/data that we are sending, which we wrap in stringify, that will turn it from a javascript object into a json string
        body: JSON.stringify(task)
      }
    )
    // the data that is returned is just the new task that was just added, its a promise so we need to awaut
    const data = await res.json()
    

    // remember to setTasks as an array, and then include all the previous task objects, and then include the newTask
    setTasks([...tasks, data])

  }
  
  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()                           // this will give us just the json data

    return data
  }

  // Delete Task
  const deleteTask = async (id) => {

    await fetch(
      `http://localhost:5000/tasks/${id}`,
      {method: 'DELETE'}
    )
    setTasks( tasks.filter( task => task.id !== id) )

  }

  // Toggle Reminder
  const toggleReminder = async (e, id) => {
    
    const taskToToggle = await fetchTask(id)
    // spread out all the properties in tastToToggle, and then change the reminder property
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(
      `http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        // need headers becayse we are sending data:
        headers: {
          'Content-type': 'application/json'
        },
        // we want the data that we are sending, to be wrapped in json.stringify
        body: JSON.stringify(updatedTask)
      }
    )

    const data = await res.json()

    setTasks( tasks.map( task => {
      // i wanna spred accross ... all the task properties and values, but i want to change the reminder
      return task.id === id ? { ...task, reminder: data.reminder } : task
    }) )  
  }

  const revealAddTask = () => {
    setShowAddTasks(!showAddTask)
  }

  return (
    // we can only use the router if we wrap everything in it:
    <Router>
      
        <div className="container master-margin">

          <Header 
            isShowing={showAddTask} 
            onAdd={revealAddTask} 
            title='Task Tracker' />

          
          <Routes>
            
            <Route path='/' element= { 
              <>
                { showAddTask && <AddTask onAdd={addTask} /> }

                { tasks.length > 0 ? 
                    <Tasks 
                      tasks={tasks} 
                      onDelete={deleteTask} 
                      onToggle={toggleReminder}
                    /> 
                    : <p>There doesn't seem to be any tasks to show</p>
                }
              </>
            } />
            <Route path='/about' element={<About />} />
          </Routes>
          
          <Footer />
        </div>
    </Router>

    
  );
}



export default App;
