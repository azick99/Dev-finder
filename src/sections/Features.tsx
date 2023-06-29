import { useState } from 'react'
import { BiSearchAlt, BiLink } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { BsTwitter, BsFillBuildingsFill } from 'react-icons/bs'
import { pictureDark } from '../assets/svg'

const Features = () => {
  const [username, setUsername] = useState('')
  const [devData, setDevData] =useState()
  return (
    <section id="features" className="grid grid-cols-2 gap-5 ">
      <div className="flex flex-col gap-5">
        <form className="flex relative">
          <BiSearchAlt className=" absolute fill-light-blue h-[30px] w-[30px] mt-4 ml-2" />
          <input
            type="text"
            className="py-3 pl-12 pr-4 w-[30rem] rounded-l-xl outline-none"
            placeholder="Search GitHub username..."
          />
          <button
            type="submit"
            className="py-4 px-6 bg-light-blue text-white rounded-r-xl"
          >
            Search
          </button>
        </form>
        <div className="flex flex-col dark:bg-black bg-white gap-10 rounded-3xl p-6 px-11 font-mono">
          <div className="grid grid-cols-3 dark:bg-pramiry bg-almost-white dark:text-almost-white text-light-violet rounded-3xl p-4">
            <div className="flex flex-col items-center">
              <span>Repos</span>
              <span className="text-[2rem] leading-9">33 </span>
            </div>
            <div className="flex flex-col items-center">
              <span>Followers</span>
              <span className="text-[2rem] leading-9">2 </span>
            </div>
            <div className="flex flex-col items-center">
              <span>Following</span>
              <span className="text-[2rem] leading-9">16 </span>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 gap-y-4 mb-10 dark:text-secondary text-brawn">
            <div className="flex justify-center gap-3 items-center ">
              <MdLocationOn className="h-[30px] w-[30px]" />
              <span>Warsaw, Poland</span>
            </div>
            <div className="flex justify-center gap-3 items-center ">
              <BiLink className="h-[30px] w-[30px]" />
              <span>Click to see</span>
            </div>
            <div className="flex justify-center gap-3 items-center ">
              <BsTwitter className="h-[30px] w-[30px]" />
              <span>Not available</span>
            </div>
            <div className="flex justify-center gap-3 items-center ">
              <BsFillBuildingsFill className="h-[30px] w-[30px]" />
              <span>Not available</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col dark:bg-black bg-white gap-5 rounded-3xl p-6 px-11 font-mono w-[85%] dark:text-secondary text-brawn">
        <div className="flex items-center gap-10">
          <img
            src={pictureDark}
            alt="avatar"
            className="w-[8rem] h-[8rem] rounded-full"
          />
          <p className="text-[2rem] dark:text-almost-white text-dark-blue font-bold leading-9 basis-1/2">
            Azizbek Yunusaliev
          </p>
        </div>
        <div className="grid grid-cols-3 items-center">
          <span className="text-base text-light-blue">@azick99</span>
          <p className="col-span-2">Joined 2 august 2023</p>
        </div>
        <p className="pr-10">
          Enthusiastic front-end developer ! I love Code and Community
        </p>
      </div>
    </section>
  )
}

export default Features
