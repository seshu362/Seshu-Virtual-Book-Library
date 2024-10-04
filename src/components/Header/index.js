import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header">Virtual Book Library</h1>
      <ul className="second-container">
        <Link to="/" className="link">
          <button type="button" className="mobile-tab-button">
            <p className="text">Home</p>
          </button>
        </Link>
        <Link to="/MyLibraryPage" className="link">
          <button type="button" className="mobile-tab-button">
            <p className="text">MyLibraryPage</p>
          </button>
        </Link>
      </ul>
    </div>
  )
}

export default Header
