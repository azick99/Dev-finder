import { serviceCards } from '../data/cardData'

const Services = () => {
  return (
    <section id="services" className='mb-32 dark:text-almost-white'>
      <article className="flex flex-col sm:w-[65%] w-full sm:text-start text-center gap-5 mb-10">
        <h2 className="text-4xl font-bold">Services We Provide</h2>
        <p className="text-base">
          Find developer in a simple way with all details and data. Present them
          as simple headers that can lead out to their pages where you can
          expound on them further. You can also use this space for other
          purposes where the information is best presented as mere teasers to
          other individualized pages.
        </p>
      </article>
      <div className="grid sm:grid-cols-3 grid-cols-1 justify-items-center gap-5">
        {serviceCards.map((card) => (
          <div
            key={card.id}
            className="dark:bg-light-brawn bg-dark-pink rounded-xl flex flex-col flex-wrap items-center justify-center gap-8 w-[300px] h-[280px]"
          >
            <p className='text-3xl text-center font-bold w-[200px]'>{card.title}</p>
            <button type='button' className='p-2 px-6 bg-secondary text-dark-blue rounded-xl'>Learn more</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
