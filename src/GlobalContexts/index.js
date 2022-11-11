import React from 'react'
import { ThemeProvider } from './ThemeContext'
import { BooksProvider } from './BooksContext'
import { SearchProvider } from './SearchContext'

const ContextsProvider = ({children}) => {
  return (
      <ThemeProvider>
        <BooksProvider>
          <SearchProvider>
            {children}
          </SearchProvider>
        </BooksProvider>
      </ThemeProvider>
  )
}

export default ContextsProvider