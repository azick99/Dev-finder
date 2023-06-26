import { pictureDark, pictureLight } from '../assets/svg'
import { ThemeProp } from '../models/model'

const Hero = ({ theme }: ThemeProp) => {
  return (
    <section id="#hero" className="grid grid-cols-2 mb-32">
      <article className="pr-[2rem] flex flex-col justify-evenly gap-5">
        <h1 className="text-6xl font-black">
          Find Information About Developers, From GitHub.
        </h1>
        <button
          className={`${
            theme ? 'light-btn-gradient' : 'dark-btn-gradient'
          } py-3 px-10 rounded-[4rem] self-start text-white font-bold`}
        >
          Get Start
        </button>
      </article>
      <div className="pl-20">
        <img
          src={theme ? pictureLight : pictureDark}
          className="rounded-2xl w-[420px] h-[420px] object-cover dark:object-center object-left mx-auto shadow-cardLgiht dark:shadow-cardDark"
        />
      </div>
    </section>
  )
}

export default Hero
