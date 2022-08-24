const Notification = ({ message }) => {
  if (message === null) return
  return (
    <div
      className={`mx-auto my-12 text-center ${
        message.type === 'alert' ? 'bg-red-400' : 'bg-green-400'
      } max-w-2xl`}
    >
      {message.message}
    </div>
  )
}

export default Notification
