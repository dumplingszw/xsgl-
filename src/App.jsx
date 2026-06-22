import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import DocPage from './components/DocPage'
import Footer from './components/Footer'
import XiaokePet from './components/XiaokePet'

function App() {
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '').split('?')[0]
    setCurrentPath(hash)

    const onHashChange = () => {
      const newHash = window.location.hash.replace('#', '').split('?')[0]
      setCurrentPath(newHash)
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <div className="relative min-h-screen bg-off-white font-sans text-black">
      <Navbar />
      <main>
        {currentPath === '' || currentPath === '/' ? (
          <HomePage />
        ) : (
          <DocPage path={currentPath} />
        )}
      </main>
      <Footer />
      <XiaokePet />
    </div>
  )
}

export default App
