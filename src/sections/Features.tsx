import { useState, ChangeEvent, FormEvent } from 'react'

import { BiSearchAlt, BiLink } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { BsTwitter, BsFillBuildingsFill } from 'react-icons/bs'
import { Developer, getData, months } from '../models/model'

type Status = 'typing' | 'pending' | 'fullfiled' | 'failed'

const currentDeveloper = {
  id: 2,
  login: 'azick99',
  avatar_url:
    'https://gitfinder.my.canva.site/images/07bff1e7ae42aaacf1017c3d1b740546.jpg',
  name: 'Azizbek Yunusaliev',
  bio: '    Enthusiastic front-end developer ! I love Code and Community',
  location: 'Warsaw, Poland',
  company: 'Not availabe',
  blog: 'https://azick99.github.io/My-Portflio-2.0/',
  twitter_username: 'Not available',
  public_repos: 33,
  followers: 2,
  following: 16,
  created_at: '2022-08-13T20:32:18Z',
}

const Features = () => {
  const [username, setUsername] = useState('')
  const [devData, setDevData] = useState<Developer>(currentDeveloper)
  const [status, setStatus] = useState<Status>()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value)
    setStatus('typing')
  }
  const url = `https://api.github.com/users/${username}`

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username) {
      setStatus('pending')
      try {
        const developer = await getData<Developer>(url)
        setDevData(developer)
        setStatus('fullfiled')
      } catch (error) {
        console.log(error)
        setStatus('failed')
      }
    }
  }

  const {
    login,
    avatar_url,
    name,
    bio,
    location,
    company,
    blog,
    twitter_username,
    public_repos,
    followers,
    following,
    created_at,
  } = devData

  const date = new Date(created_at)

  const joinDate = `Joined ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`

  if (status == 'failed') {
    alert('Some thing went wrong please try again')
  }
  return (
    <section id="features" className="grid sm:grid-cols-2 grid-cols-1 gap-5 mb-32">
      <div className="flex flex-col gap-5">
        <form className="flex relative" onSubmit={handleSubmit}>
          <BiSearchAlt className=" absolute fill-light-blue h-[30px] w-[30px] mt-4 ml-2" />
          <input
            type="text"
            className="py-3 pl-12 pr-4 w-[30rem] rounded-l-xl outline-none text-dark-blue"
            placeholder="Search GitHub username..."
            onChange={handleOnChange}
          />
          <button
            type="submit"
            className="py-4 px-6 bg-light-blue text-white rounded-r-xl "
          >
            {status === 'pending' ? (
              <span className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] ">
                  Loading...
                </span>
              </span>
            ) : (
              'Search'
            )}
          </button>
        </form>
        <div className="flex flex-col dark:bg-black bg-white gap-10 rounded-3xl p-6 px-11 font-mono">
          <div className="grid sm:grid-cols-3 grid-cols-2 dark:bg-pramiry bg-almost-white dark:text-almost-white text-light-violet rounded-3xl p-4">
            <div className="flex flex-col items-center">
              <span>Repos</span>
              <span className="text-[2rem] leading-9">{public_repos}</span>
            </div>
            <div className="flex flex-col items-center">
              <span>Followers</span>
              <span className="text-[2rem] leading-9">{followers}</span>
            </div>
            <div className="flex flex-col items-center sm:col-span-1 col-span-2">
              <span>Following</span>
              <span className="text-[2rem] leading-9">{following}</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-rows-3 gap-2 gap-y-4 mb-10 pl-10 dark:text-secondary text-brawn">
            <div className="flex gap-3 items-center ">
              <MdLocationOn className="h-[30px] w-[30px]" />
              <span>
                {typeof location === 'string' ? location : 'Not available'}
              </span>
            </div>
            <div className="flex gap-3 items-center ">
              <BiLink className="h-[30px] w-[30px]" />
              {typeof blog === 'string' ? (
                <a href={blog || undefined}>Click to see</a>
              ) : (
                <span>Not Available</span>
              )}
            </div>
            <div className="flex gap-3 items-center ">
              <BsTwitter className="h-[30px] w-[30px]" />
              <span>
                {typeof twitter_username === 'string'
                  ? twitter_username
                  : 'Not available'}
              </span>
            </div>
            <div className="flex gap-3 items-center ">
              <BsFillBuildingsFill className="h-[30px] w-[30px]" />
              <span>
                {typeof company === 'string' ? company : 'Not available'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col dark:bg-black bg-white gap-5 rounded-3xl p-6 px-11 font-mono sm:w-[85%] w-full dark:text-secondary text-brawn">
        <div className="flex flex-wrap sm:justify-start justify-center items-center gap-10">
          <img
            src={avatar_url || undefined}
            alt="avatar"
            className="w-[128px] h-[138px] rounded-full object-cover"
          />
          <p className="text-[2rem] dark:text-almost-white text-dark-blue font-bold leading-9 basis-1/2 sm:text-start text-center">
            {name}
          </p>
        </div>
        <div className="grid grid-cols-3 items-center">
          <span className="text-base text-light-blue">@{login}</span>
          <p className="col-span-2 sm:text-start text-center">{joinDate}</p>
        </div>
        <p className="sm:pr-10 pr-0 sm:text-start text-center">{bio}</p>
      </div>
    </section>
  )
}

export default Features
