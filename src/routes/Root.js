import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Layout } from './Layout'
import { Index as CarIndex } from './cars/Index'
import { NotFound } from './NotFound'

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/cars' element={<CarIndex />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
