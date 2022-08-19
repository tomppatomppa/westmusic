import './index.css'

import Features from './components/Features'
import Content from './components/Content'

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
