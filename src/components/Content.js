import Item from './Item'

const Content = () => {
  return (
    <div className="max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0 ">
      <div className="flex justify-center mb-20 md:justify-between">
        <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
          Our Services
        </h2>
        <button className="hidden btn md:block">View all</button>
      </div>

      <Item />
    </div>
  )
}

export default Content
