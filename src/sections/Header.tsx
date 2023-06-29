import { useState } from 'react'
import { logoDark, logoLight } from '../assets/svg'
import { BsFillSunFill } from 'react-icons/bs'
import { GiMoon } from 'react-icons/gi'
import { ThemeProp } from '../models/model'

interface HeaderProps extends ThemeProp {
  handleThemeSwitch: () => void
}
const Header = ({ handleThemeSwitch, theme }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const mobileMenu = (
    <section
      id="mobile-menu"
      className={`${isMobileMenuOpen ? 'flex' : 'hidden'}  
       absolute top-[68px] bg-black/60 text-white w-[90%] flex-col justify-center right-5 rounded-xl scale-up-tr`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <nav
        className="flex flex-col font-bold items-center p-9"
        aria-label="mobile"
      >
        <a
          href="#features"
          className="w-full text-center py-6 hover:opacity-90"
        >
          Features
        </a>
        <a href="#pricing" className="w-full text-center py-6 hover:opacity-90">
          Service
        </a>
        <a
          href="#resources"
          className="w-full text-center py-6 hover:opacity-90"
        >
          Contact
        </a>
        <hr className="h-[1px] opacity-20 w-full" />
        <a
          href="#footer"
          className="w-full lg-rounded-btn text-center py-4  hover:opacity-90"
        >
          Sign in &#8250;
        </a>
        <button
          className="transition font-medium flex flex-row-reverse justify-center gap-2 items-center w-full lg-rounded-btn text-center py-4  hover:opacity-90"
          onClick={handleThemeSwitch}
          type="button"
          aria-label="Light and Dark mode"
        >
          {!theme ? (
            <>
              <BsFillSunFill className="w-[18px] h-[18px]" /> Light
            </>
          ) : (
            <>
              <GiMoon className="w-[18px] h-[18px]" /> Dark
            </>
          )}
        </button>
      </nav>
    </section>
  )

  return (
    <header className=" bg-secondary dark:bg-pramiry sticky top-0 z-10 w-full">
      <section className=" p-4 pt-6 flex  md:justify-start justify-between items-center mb-[4rem] text-xl w-[90vw] mx-auto ">
        <a href="#hero" className="flex basis-[14rem] gap-4 font-bold transition ">
          <img
            src={theme ? logoLight : logoDark}
            alt="logo"
            className="w-[40px]"
          />
          <span>GitHub dev</span>
        </a>
        <div>
          <button
            type="button"
            id="hamburger-button"
            className="text-3xl sm:hidden focus:outline-none cursor-pointer relative w-8 h-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            &#9776;
          </button>
        </div>
        <div className="hidden sm:flex justify-between md:w-full items-center">
          <nav className="md:space-x-8 space-x-5" aria-label="main">
            <a href="#features" className=" transition font-medium">
              Features
            </a>
            <a href="#pricing" className=" transition font-medium">
              Service
            </a>
            <a href="#resources" className=" transition font-medium">
              Contact
            </a>
          </nav>
          <div className="ml-5 md:ml-0 space-x-5 md:space-x-8 flex">
            <a href="#testimonials" className="transition font-medium">
              Sign in &#8250;
            </a>
            <button
              className="transition flex flex-row-reverse gap-2 items-center dark:text-secondary text-pramiry font-bold"
              onClick={handleThemeSwitch}
              type="button"
              aria-label="Light and Dark mode"
            >
              {!theme ? (
                <>
                  <BsFillSunFill className="w-[18px] h-[18px]" /> Light
                </>
              ) : (
                <>
                  <GiMoon className="w-[18px] h-[18px]" /> Dark
                </>
              )}
            </button>
          </div>
        </div>
      </section>
      {isMobileMenuOpen ? mobileMenu : ''}
    </header>
  )
}

export default Header
