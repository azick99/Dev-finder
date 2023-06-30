import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-[90vw] mx-auto grid sm:grid-cols-2 grid-cols-1 gap-5 dark:text-almost-white pb-10"
    >
      <div className="flex flex-col sm:gap-12 gap-5">
        <h3 className="text-3xl font-bold">Let's talk business.</h3>
        <div className="flex flex-col gap-5">
          <p className="leading-10">
            <span className="block font-bold">Phone</span>
            <span className="block text-base">(123) 456-7890</span>
          </p>
          <p className="leading-10">
            <span className="block font-bold">Email</span>
            <span className="block text-base">hello@reallygreatsite.com</span>
          </p>
        </div>
        <div className="flex sm:mt-28 m-5  items-center p-10 dark:border-white border-dark-blue border-2 border-solid w-[80%]">
          <span className="uppercase font-mono tracking-wide text-2xl">
            Social
          </span>
          <div className="flex items-center w-full justify-end gap-5">
            <BsFacebook />
            <BsLinkedin />
            <BsTwitter />
          </div>
        </div>
      </div>
      <div className="relative flex w-full justify-center">
        <img
          src="https://gitfinder.my.canva.site/videos/3b36834452c5c45ef8a10efac1489036.gif"
          className=" sm:w-[320x] sm:h-[407px] w-[120x] h-[207px] sm:mt-[9rem] mt-[6rem]"
        />
        <img
          src="https://gitfinder.my.canva.site/videos/3b36834452c5c45ef8a10efac1489036.gif"
          className="absolute top-0 sm:left-[10rem] left-[7rem] rotate-180 sm:w-[320x] sm:h-[407px] w-[120x] h-[207px] -z-10"
        />
      </div>
    </section>
  )
}

export default Contact
