import {createContext, useState} from 'react'

// Create a BookContext
export const BookContext = createContext()

export const BookProvider = ({children}) => {
  const [selectedBook, setSelectedBook] = useState(null)
  const [myLibrary, setMyLibrary] = useState([])

  const addBookToLibrary = book => {
    const isBookPresent = myLibrary.find(eachBook => eachBook.id === book.id)

    if (!isBookPresent) {
      setMyLibrary([...myLibrary, book])
    }
  }

  const removeBookFromLibrary = id => {
    setMyLibrary(myLibrary.filter(book => book.id !== id))
  }

  return (
    <BookContext.Provider
      value={{
        selectedBook,
        setSelectedBook,
        myLibrary,
        addBookToLibrary,
        removeBookFromLibrary,
      }}
    >
      {children}
    </BookContext.Provider>
  )
}
