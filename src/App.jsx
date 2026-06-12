import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CategoryGrid from './components/CategoryGrid'
import RecommendedArticles from './components/RecommendedArticles'
import CampusShowcase from './components/CampusShowcase'
import JoinUsSection from './components/JoinUsSection'
import Footer from './components/Footer'
import XiaokePet from './components/XiaokePet'

function App() {
  return (
    <div className="relative min-h-screen bg-off-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <CategoryGrid />
        <RecommendedArticles />
        <CampusShowcase />
        <JoinUsSection />
      </main>
      <Footer />
      <XiaokePet />
    </div>
  )
}

export default App
