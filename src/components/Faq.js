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
                'Specify how many quest are expected to attend. For example 50-150 quests'
              }
            />
            <Faqtab
              title={'Where is your event located?'}
              index={2}
              text={'Where is the event supposed to take place?'}
            />
            <Faqtab
              title={'What is your budget?'}
              index={2}
              text={'Give a estimate of your budget for the event'}
            />
            <Faqtab
              title={'Special requirements?'}
              index={2}
              text={
                'Are you going to need some special made music of requests?'
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
