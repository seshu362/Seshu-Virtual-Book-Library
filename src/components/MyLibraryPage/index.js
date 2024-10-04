import {useContext} from 'react'
import {BookContext} from '../../context/BookContext' // Importing the context
import Header from '../Header'
import './index.css'

const MyLibraryPage = () => {
  const {myLibrary, removeBookFromLibrary} = useContext(BookContext) // Access the library and removal function

  return (
    <>
      <Header />
      <div className="my-library-container">
        <h1 className="library-heading">My Library</h1>
        {myLibrary.length === 0 ? (
          <p className="no-books-message">Your library is empty.</p>
        ) : (
          <ul className="library-list">
            {myLibrary.map(book => (
              <li key={book.id} className="library-item">
                <div className="library-name-cont">
                  <h2 className="book-title">{book.title}</h2>
                  <p className="book-author">Author: {book.author}</p>
                </div>

                <div>
                  <button
                    className="remove-btn "
                    type="button"
                    onClick={() => removeBookFromLibrary(book.id)} 
                  >
                    Remove 
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default MyLibraryPage
