import tika from '../images/tika.jpg'
import tika_chill from '../images/tika_chill.jpg'
const Features = () => {
  return (
    <div className=" relative container flex flex-col max-w-6xl mx-auto my-64 px-6 text-gray-900 md:flex-row md:px-0">
      <img src={tika_chill} width={600} height={250} alt=""></img>
      <div className="opacity-95 top-72 pr-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded  md:absolute  md:right-0 md:py-20 md:pl-20">
        <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center   uppercase md:text-5xl md:mt-0 md:text-left">
          The Live Show You Always Wanted
        </h2>
        <p className="max-w-md text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. aliquip ex
          ea commodo consequat.
        </p>
      </div>
    </div>
  )
}

export default Features
