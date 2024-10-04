// src/App.js
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import MyLibraryPage from './components/MyLibraryPage'
import BookDetails from './components/BookDetails'

import {BookProvider} from './context/BookContext'

const App = () => (
  <Router>
    <BookProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyLibraryPage" element={<MyLibraryPage />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
      </Routes>
    </BookProvider>
  </Router>
)

export default App
