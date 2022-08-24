const Faqtab = ({ title, index, text }) => {
  return (
    <div className=" py-1  border-b outline-none group" tabIndex={index}>
      <div className="flex tiems-center justify-between py-3 text-gray-500 transition duration 500 cursor-pointer group ease">
        <div className="transition duration-500 ease group-hover:text-red-500">
          {title}
        </div>
        <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </div>
      </div>
      <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
        <p className="py-2 text-justify text-gray-400">{text}</p>
      </div>
    </div>
  )
}

export default Faqtab
