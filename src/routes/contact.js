import { useState } from 'react'
import Faq from '../components/Faq'
import emailjs from '@emailjs/browser'
import env from 'react-dotenv'
import Notification from '../components/Notification'
const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [notification, setNotification] = useState(null)

  const notify = (message, type = 'info') => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }
  const submitForm = (event) => {
    event.preventDefault()
    emailjs
      .sendForm(env.SERVICE_ID, env.YOUR_TEMPLATE_ID, event.target, env.USER_ID)
      .then(
        (result) => {
          console.log(notification)
          notify('Message sent successfully')
        },
        (error) => {
          console.log(error.text)
          notify('Error sending message', 'alert')
        }
      )
    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <div
      id="container"
      className="
    bg-blue-200 p-2 "
    >
      <div className=" bg-blue-100">
        <Faq />

        <div className="mb-60 max-w-2xl mx-auto">
          <form onSubmit={submitForm}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
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
                  name="from_name"
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
                  name="from_email"
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
                name="message"
              ></textarea>
            </div>
            <Notification message={notification} />
            <div className="flex justify-end ">
              <button
                className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
