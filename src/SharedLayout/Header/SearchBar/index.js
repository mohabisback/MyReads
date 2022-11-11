import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {search} from '../../../services/BookAPI'
import {SearchItem, SeeAll} from './SearchItem'
import SearchContext from '../../../GlobalContexts/SearchContext'
import {Link, useLocation, useNavigate} from 'react-router-dom'

const SearchBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [query, setQuery] = React.useState('')
  const [dropdown, setDropdown] = React.useState(false)
  const {books, setBooks} = React.useContext(SearchContext)
  const writing = async (query)=> {
    setQuery(query);
    if (query.length > 2){
      setDropdown(true)
      const searchResults = await search(query, 20);
      if(!searchResults.error){setBooks(searchResults)}
    } else {
      setDropdown(false)
      setBooks([])
    }
  }
  return (
    <div className={'nav-item'}>
      <Link to={`/search${query ? `?query=${query}` : ''}`}>
        <FaSearch />
      </Link>
      <input type='text' value={query} placeholder=''
      onKeyDown={(e)=>{if(e.key==='Enter'){navigate(`/search${query ? `?query=${query}` : ''}`)}}}
      onChange={(e)=>{writing(e.target.value)}}/>
      <div className={`nav-dropdown ${dropdown ? " show" : ""}`}>
        {location.pathname !== '/search' && books.length > 0 && 
          <ul >
           {books.slice(0,5).map((item, index) => (
            <SearchItem item={item} key={index} setDropdown = {setDropdown} setQuery={setQuery}/>
           ))}
            <SeeAll query={query} key={1000} setDropdown = {setDropdown} setQuery={setQuery}/> 
          </ul>
        }
      </div> 
    </div>
  )
}

export default SearchBar