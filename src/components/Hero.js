import { useRef } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import herovideo from '../videos/hero_video.mp4'
import Content from './Content'
import Features from './Features'
import Footer from './Footer'
const Hero = () => {
  const productsRef = useRef()

  const handleBackClick = () => {
    productsRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="relative">
      <div className="overlay"></div>
      <ReactPlayer
        className="max-h-96"
        id="video"
        url={herovideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />

      <nav className="content absolute flex items-center  top-0 h-44 w-11/12 justify-between font-bold text-white ">
        <h1 className="px-10 uppercase ">West Music</h1>
        <div className="hidden h-10 font-alata md:flex md:space-x-8 pr-10">
          <div className="group">
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            {/* <Link to="/about">About</Link> */}
            <button onClick={handleBackClick}>Products</button>
          </div>
          <div className="group">
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="content relative left-32 bottom-0 top-0 max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
        Events that you deserve
      </div>

      <Features id="feature" />
      <div ref={productsRef}>
        <Content id="content" />
      </div>
      <Footer />
    </div>
  )
}

export default Hero
