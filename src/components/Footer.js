import instagramLogo from '../images/instagram.png'
import facebookLogo from '../images/facebook.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container max-w-6xl py-10 mx-auto">
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-8 md:justify-between md:items-start">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">
              {/* <img src="" alt="" className="w-44 md:ml-3"></img> */}
              <h1 className="text-white text-3xl w-44 md:ml-3">WestMusic</h1>
            </div>
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              <div className="h-10 group">
                <Link to="/contact">Contact</Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            <div className="flex items-center justify-center space-x-4 mx-auto md:mx-0 md:justify-end ">
              <div className="h-8 group">
                <a href="#">
                  <img className="h-6" src={instagramLogo}></img>
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  <img className="h-6" src={facebookLogo}></img>
                </a>
              </div>
            </div>
            <div className="font-bold">
              &copy; 2022 WestMusic. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
