// src/components/BookDetails/index.js
import {useState, useContext} from 'react'
import {BookContext} from '../../context/BookContext'
import Header from '../Header'
import './index.css'

const BookDetails = () => {
  const {selectedBook, addBookToLibrary} = useContext(BookContext) // Access selected book from context
  const [isAdded, setIsAdded] = useState(false) // Correct usage of useState

  const onClickAddToLibrary = () => {
    if (selectedBook) {
      addBookToLibrary(selectedBook) // Add the selected book to the library
      setIsAdded(true) // Update state to show that the book has been added
    }
  }

  return (
    <>
      <Header />
      <div className="bg-container">
        {selectedBook ? (
          <>
            <div className="book-details-container">
              <h1 className="title-heading">{selectedBook.title}</h1>
              <p className="text-details">Author: {selectedBook.author}</p>
              <p className="text-details">Genre: {selectedBook.genre}</p>
              <p className="text-details">Rating: {selectedBook.rating}</p>
              <p className="text-details">
                Description: {selectedBook.description}
              </p>
              <p className="text-details">
                Publication Year: {selectedBook.publication_year}
              </p>
            </div>
            <button
              className="add-btn"
              type="button"
              onClick={onClickAddToLibrary}
            >
              {isAdded ? "Added" : "Add"}
            </button>
          </>
        ) : (
          <p className="title-heading">No book selected.</p>
        )}
      </div>
    </>
  )
}

export default BookDetails
