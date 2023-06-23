import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='h-screen bg-white dark:bg-black'>

    <button className="bg-slate-500 text p-2 rounded-sm text-black" onClick={handleThemeSwitch}>
      Light Mode
    </button>
    <p className='font-mono'>sdfsdf</p>
    </div>
  )
}

export default App
