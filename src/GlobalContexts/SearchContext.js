import React, { createContext, useReducer } from 'react';
import {search} from '../services/BookAPI'

//Changes are determined by comparing the new and old values using the same algorithm as Object.is.
export const initialState = {
  books: [],
}

//motor running with initial state
const SearchContext = createContext(initialState);

//downstairs engineers for the motor state
//Engineers need the present state & action to do
//The action they do includes type & a package if any
export const SearchReducer = (state, action) => {
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

export const ExternalSearchReducer = {
  isReady: false,
  //state: null,
  getState: () => {console.error('ExternalSearchReducer is NOT ready')},
  dispatch: () => {console.error('ExternalSearchReducer is NOT ready')},
}

//The global telegram for the engineers
export const SearchProvider = ({ children }) => {
  //connecting cables with reducer(engineers downstairs)
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const stateRef = React.useRef(initialState)
  React.useEffect(() => {
    stateRef.current = state
  }, [state])
  if (!ExternalSearchReducer.isReady) {
    ExternalSearchReducer.isReady = true
    ExternalSearchReducer.getState = () => ({...stateRef.current})
    ExternalSearchReducer.dispatch = params => dispatch(params)
    Object.freeze(ExternalSearchReducer)
  }

  //two types of data between captain and engineers
  const providedValue = {
    //information from engineers to captain, about the motor state
    books: state.books,
    //orders from captain to engineers, about how will be the motor state
    setBooks: (books) => {dispatch({type: 'SET_BOOKS', payload: books}); }, 
  }

  //connecting cables with the captain
  return (
    <SearchContext.Provider value={providedValue}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContext;