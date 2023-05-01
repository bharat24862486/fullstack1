import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupCard from '../components/Signup'
import SimpleCard from '../components/Singin'

import Notes from '../components/Notes'
import Main from '../components/Main'
import Sentnote from '../components/Sentnote'


const MyRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/login' element={<SimpleCard />}/>
        <Route path='/signup' element={<SignupCard />}/>
        <Route path='/notes' element={<Notes />}/>
        <Route path='/addnotes' element={<Sentnote />}/>

    </Routes>
  )
}

export default MyRoute
