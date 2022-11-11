import React from 'react'

import ContextsProvider from './GlobalContexts/index.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import SharedLayout from './SharedLayout'
import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'
import OneBookPage from './pages/OneBookPage'
import SearchPage from './pages/SearchPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import StylesProvider from './styles/StylesProvider'

function App() {

  return (
    <ContextsProvider>
      <StylesProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/books' element={<BooksPage/>}/>
            <Route path='/books/:param' element={<OneBookPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
      </StylesProvider>
    </ContextsProvider>
  );
}

export default App;
