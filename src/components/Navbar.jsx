import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { assetPath } from '../utils/assetPath'

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '攻略分类', href: '#categories' },
  { label: '推荐攻略', href: '#articles' },
  { label: '新生工具箱', href: '#freshman-guide' },
  { label: '校园风光', href: '#campus' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-brutal border-b-3 border-black'
          : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-[8px] p-1.5">
              <img
                src={assetPath('/logo.png')}
                alt="工科生初心汇"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className={`text-sm font-black transition-colors ${scrolled ? 'text-black' : 'text-black'}`}>
                工科生初心汇
              </p>
              <p className="text-[10px] font-bold text-gray-500">山西工程科技职业大学</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-black hover:bg-lime border-3 border-transparent hover:border-black transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#categories"
              className="inline-block bg-black text-lime border-3 border-black px-5 py-2.5 text-sm font-black tracking-wide hover:bg-lime hover:text-black shadow-brutal transition-all"
            >
              开始探索
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 border-3 border-black bg-lime flex items-center justify-center shadow-brutal"
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 bg-black transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-black transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-lime border-t-3 border-black"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block w-full text-left px-4 py-3 font-bold text-black border-3 border-black bg-white hover:bg-black hover:text-lime transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
