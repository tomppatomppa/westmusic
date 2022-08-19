import './index.css'
import { Link } from 'react-router-dom'
import herovideo from './videos/hero_video.mp4'
import Features from './components/Features'
import Content from './components/Content'

function App() {
  return (
    <div>
      <div id="hero">
        <div className="container max-w-6xl mx=auto px-0 py-12 text-white">
          {
            <nav className="flex items-center justify-between font-bold">
              <h1 className="px-10">West Music</h1>
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
          <div className="video-container">
            <video id="video-bg" autoPlay loop muted>
              <source src={herovideo} type="video/mp4"></source>
            </video>
          </div>

          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Events that you deserve
          </div>
        </div>
      </div>
      <Features id="feature" />
      <Content id="content" />
    </div>
  )
}

export default App
