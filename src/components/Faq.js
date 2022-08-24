import arrow from '../images/angle-down-solid.svg'
import Faqtab from './Faqtab'

const Faq = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="mb-6 text-3xl font-semibold text-center">
          Frequently asked question
        </h2>
        <p className="max-w-lg px-6 mx-auto text-center text-black">
          Here might be some helpful advice what to include in your message
        </p>
      </div>
      <div id="faq-accordion">
        <div className="container mx-auto px-6 mb-32">
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            <Faqtab
              title={'How many guest are you expecting?'}
              index={1}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />
            <Faqtab
              title={'Where is your event located?'}
              index={2}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />
            <Faqtab
              title={'What is your budget?'}
              index={2}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
