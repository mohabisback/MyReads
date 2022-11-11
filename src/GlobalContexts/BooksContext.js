import React, { createContext, useReducer } from 'react';

import {getAll} from '../services/BookAPI'

//Changes are determined by comparing the new and old values using the same algorithm as Object.is.
export const initialState = {
  books: JSON.parse(window.localStorage.getItem('books')) || null,
}

//motor running with initial state
const BooksContext = createContext(initialState);

//downstairs engineers for the motor state
//Engineers need the present state & action to do
//The action they do includes type & a package if any
export const BooksReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
      //set books
      case 'SET_BOOKS':
        return {
          books: [...payload] //copy of the books, not the original object
        }
    default:
      return state;
  }
}

export const ExternalBooksReducer = {
  isReady: false,
  //state: null,
  getState: () => {console.error('ExternalBooksReducer is NOT ready')},
  dispatch: () => {console.error('ExternalBooksReducer is NOT ready')},
}

//The global telegram for the engineers
export const BooksProvider = ({ children }) => {
  //connecting cables with reducer(engineers downstairs)
  const [state, dispatch] = useReducer(BooksReducer, initialState);

  //fetch data by function getAll
  const fetchBooks = async () => {
    const fetchedBooks = await getAll()
    const arrangedBooks = [
      {shelf: 'currentlyReading',
       shortTitle: 'Reading...',
       title: 'Open Books.',
       icon: 'book-open-reader',
       books: []
      },
      {shelf: 'wantToRead',
      shortTitle: 'Wanted...',
      title: 'Want To Read',
      icon: 'star',
      books: []
      },
      {shelf: 'read',
      shortTitle: 'Done...',
      title: 'Finished Books.',
      icon: 'book',
       books: []
      },
    ]
    for (const book of fetchedBooks){
      for (const group of arrangedBooks){
        if (group.shelf === book.shelf){
          group.books.push(book)
        }
      }
    }
    dispatch({type: 'SET_BOOKS', payload: arrangedBooks});
  }

  React.useEffect(()=>{
    if (!state.books){    
      fetchBooks()
    }
  },[state.books])

  const stateRef = React.useRef(initialState)
  React.useEffect(() => {
    stateRef.current = state
  }, [state])
  if (!ExternalBooksReducer.isReady) {
    ExternalBooksReducer.isReady = true
    ExternalBooksReducer.getState = () => ({...stateRef.current})
    ExternalBooksReducer.dispatch = params => dispatch(params)
    Object.freeze(ExternalBooksReducer)
  }

  //two types of data between captain and engineers
  const providedValue = {
    //information from engineers to captain, about the motor state
    books: state.books,
    //orders from captain to engineers, about how will be the motor state
    setBooks: (books) => {dispatch({type: 'SET_BOOKS', payload: books}); },
    updateBooks: ()=>{fetchBooks()}
  }

  //connecting cables with the captain
  return (
    <BooksContext.Provider value={providedValue}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksContext;