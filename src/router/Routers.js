import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoriesList from '../container/StoriesList';
import StoryDetails from '../container/StoryDetails';
import Check from '../container/Check';

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<StoriesList/>}/>
        <Route path="/story/:id" element={<StoryDetails />} />
        <Route path="/check" element={<Check />} />

    </Routes>
    </BrowserRouter>
  )
}

export default Routers