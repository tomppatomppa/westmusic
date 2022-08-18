import './index.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <div id="hero">
        <div className="container max-w-6xl mx=auto px-6 py-12 text-white">
          {
            <nav className="flex items-center justify-between font-bold">
              West Music
              <img src="/images/background-img.jpg" alt=""></img>
              <div className="hidden h-10 font-alata md:flex md:space-x-8">
                <div className="group">
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  <Link to="/contact">About</Link>
                </div>
                <div className="group">
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            </nav>
          }
        </div>
      </div>
    </div>
  )
}

export default App
