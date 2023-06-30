import { pictureDark, pictureLight } from '../assets/svg'
import { ThemeProp } from '../models/model'

const Hero = ({ theme }: ThemeProp) => {
  return (
    <section id="#hero" className="grid sm:grid-cols-2 grid-cols-1 mb-32 sm:gap-0 gap-10">
      <article className="sm:pr-[2rem] pr-0 flex flex-col  justify-evenly gap-5 sm:order-1 order-2">
        <h1 className="sm:text-6xl text-5xl sm:text-start text-center font-black">
          Find Information About Developers, From GitHub.
        </h1>
        <button
          className={`${
            theme ? 'light-btn-gradient' : 'dark-btn-gradient'
          } py-3 px-10 rounded-[4rem] sm:self-start self-center text-white font-bold`}
        >
          Get Start
        </button>
      </article>
      <div className="sm:pl-20 pl-0 sm:order-2 order-1">
        <img
          src={theme ? pictureLight : pictureDark}
          className="rounded-2xl sm:w-[420px] sm:h-[420px] w-[320px] h-[320px] object-cover dark:object-center object-left mx-auto shadow-cardLgiht dark:shadow-cardDark"
        />
      </div>
    </section>
  )
}

export default Hero
