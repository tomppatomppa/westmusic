import tika from '../images/tika.jpg'

const Item = () => {
  return (
    <div className="flex flex-row justify-between w-full space-y-6 text-2xl text-white uppercase  md:flex-row md:space-y-0 md:space-x-8">
      <div className="group relative overflow-hidden md:w-1/2">
        <img
          src={tika}
          alt=""
          className="hidden w-full duration-200 md:block group-hover:scale-110"
        ></img>
        <img src={tika} alt="" className=" w-full  md:hidden"></img>

        <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-50"></div>
        <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
          PartyBand
        </h5>
      </div>
      <div className="group relative overflow-hidden md:w-1/4">
        <img
          src={tika}
          alt=""
          className="hidden w-full duration-200 md:block group-hover:scale-110"
        ></img>
        <img src={tika} alt="" className=" w-full  md:hidden"></img>

        <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-50"></div>
        <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
          PartyBand
        </h5>
      </div>
      <div className="group relative overflow-hidden md:w-1/4">
        <img
          src={tika}
          alt=""
          className="hidden w-full duration-200 md:block group-hover:scale-110"
        ></img>
        <img src={tika} alt="" className=" w-full  md:hidden"></img>

        <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-50"></div>
        <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
          PartyBand
        </h5>
      </div>
    </div>
  )
}
export default Item
