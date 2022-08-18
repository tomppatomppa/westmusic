import './index.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <nav>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default App
