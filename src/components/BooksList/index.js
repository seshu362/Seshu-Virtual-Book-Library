import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {BookContext} from '../../context/BookContext'
import './index.css'

const BooksList = props => {
  const {eachBookDetails} = props
  const {id, title, author, genre, rating} = eachBookDetails

  const {setSelectedBook} = useContext(BookContext) // Access setSelectedBook from context

  const onClickBook = () => {
    setSelectedBook(eachBookDetails) // Set the selected book in context
  }

  return (
    <Link to={`/bookdetails/${id}`} className="link">
      <li className="list-book">
        <button type="button" className="list-btn" onClick={onClickBook}>
          <h1 className="title-heading">{title}</h1>
        </button>
        <p className="author">{author}</p>
        <p className="genre">{genre}</p>
        <p className="rating">{rating}</p>
      </li>
    </Link>
  )
}

export default BooksList
