import { useEffect, useState } from 'react'
import { Contact, Features, Header, Hero, Services } from './sections'

function App() {
  const [theme, setTheme] = useState('dark')

  const lightMode = theme === 'light'

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(lightMode ? 'dark' : 'light')
  }

  return (
    <>
      <Header handleThemeSwitch={handleThemeSwitch} theme={lightMode} />
      <main className="w-[90vw] mx-auto ">
        <Hero theme={lightMode} />
        <Features />
        <Services />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  )
}

export default App
