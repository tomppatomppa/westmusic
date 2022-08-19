import './index.css'
import { Link } from 'react-router-dom'

import Features from './components/Features'
import Content from './components/Content'
import ReactPlayer from 'react-player'
import Hero from './components/Hero'
function App() {
  return (
    <div id="body">
      <div id="hero">
        <Hero />
      </div>
      <Features id="feature" />
      <Content id="content" />
    </div>
  )
}

export default App
