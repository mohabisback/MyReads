import React, { useContext } from 'react'
import styled from 'styled-components'
import SearchContext from '../../GlobalContexts/SearchContext'
import BookCard from '../../components/BookCard'
import {useLocation} from 'react-router-dom'

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
align-content: center;
scroll-behavior: smooth;


/* cards (children not grandchildren)*/
& > * {
  margin: 2% 0 2% 2%;
  height: 50vh;
  max-height: 50vh;
  min-height: 50vh;
  max-width: 45vw;
  min-width: 45vw;
  @media screen and (min-width: 768px) {
    height: 40vh;
    max-height: 40vh;
    min-height: 40vh;
    max-width: 30vw;
    min-width: 30vw;
  }
  @media screen and (min-width: 1024px) {
    height: 30vh;
    max-height: 30vh;
    min-height: 30vh;
    max-width: 20vw;
    min-width: 20vw;
  }
}
  `
const SearchPage = () => {
  const location = useLocation();
  const {searchBooks} = useContext(SearchContext)
  return (
    <Wrapper>
      {location.pathname === '/search' &&
        ( searchBooks.length > 0
          ?
          searchBooks.map((book, index)=>(
            <BookCard key={index} book={book}/>
          ))
          :
          <h1>No Book found, try to search again.</h1>
        )
      }
    </Wrapper>
  )
}

export default SearchPage