import { useState } from 'react'
import Faq from '../components/Faq'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitForm = (event) => {
    event.preventDefault()
    console.log(name, email, message)
    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <div className="">
      <Faq />
      <div className="max-w-2xl mx-auto">
        <form onSubmit={submitForm}>
          <div className=" grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First name
              </label>
              <input
                onChange={(event) => setName(event.target.value)}
                value={name}
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
          </div>
          <div className=" mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
