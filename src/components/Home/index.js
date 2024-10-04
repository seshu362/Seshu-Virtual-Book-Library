import {useState} from 'react'
import Header from '../Header'
import BooksList from '../BooksList'
import './index.css'

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    rating: 4.7,
    description:
      'A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.',
    publication_year: 1925,
  },

  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    rating: 4.8,
    description:
      "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
    publication_year: 1960,
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    rating: 4.6,
    description:
      'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.',
    publication_year: 1949,
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    rating: 4.9,
    description:
      'A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.',
    publication_year: 1813,
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    rating: 4.3,
    description:
      'A story about a young boy’s journey through the challenges of adolescence.',
    publication_year: 1951,
  },
]

const BookDetails = () => {
  const [searchInputValue, setSearchInputValue] = useState('')
  

  const onChangeSearchInputValue = event => {
    setSearchInputValue(event.target.value)
  }
  const updateSearchBookData = books.filter(book => {
    return (
      book.title.toLowerCase().includes(searchInputValue) ||
      book.author.toLowerCase().includes(searchInputValue) ||
      book.genre.toLowerCase().includes(searchInputValue)
    )
  })

  return (
    <>
      <Header />
      <div className="bg-container-home">
        <input
          type="search"
          onChange={onChangeSearchInputValue}
          className="search-input"
          placeholder="Search Book Here.."
        />
        <ul className="ul-container">
          {updateSearchBookData.map(eachBooks => (
            <BooksList key={eachBooks.id} eachBookDetails={eachBooks} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default BookDetails
