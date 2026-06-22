import { useEffect, useState } from 'react'
import { assetPath } from '../utils/assetPath'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: '前言', href: '#foreword' },
  { label: '新生必读', href: '#mustread' },
  { label: '校园生活', href: '#campus-life' },
  { label: '学习资源', href: '#study' },
  { label: '校园设施', href: '#campus-map' },
  { label: '校园风光', href: '#day-in-life' },
  { label: '周边交通', href: '#transport' },
  { label: '资助发展', href: '#support' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b-3 border-black transition-all duration-300 ${
        scrolled ? 'bg-off-white/95 shadow-brutal backdrop-blur-md' : 'bg-off-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 md:px-8">
        <a href="#" className="group flex min-w-0 items-center gap-2" aria-label="回到首页">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border-2 border-black bg-lime shadow-brutal-sm transition-transform group-hover:-translate-y-0.5">
            <img src={assetPath('/logo.png')} alt="" className="h-5 w-5 object-contain" />
          </span>
          <span className="text-sm font-black leading-none text-black sm:text-base">
            工科大初心汇
          </span>
        </a>

        <nav aria-label="主导航" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-black text-black/70 transition-colors hover:bg-lime hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-md border-3 border-black bg-lime shadow-brutal-sm lg:hidden"
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          >
            <span className="flex flex-col items-center justify-center gap-[5px]">
              <span className={`block h-[2px] w-4 bg-black transition-all ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block h-[2px] w-4 bg-black transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] w-4 bg-black transition-all ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="absolute left-0 right-0 top-[65px] border-t-3 border-black bg-lime shadow-brutal lg:hidden">
          <nav className="mx-auto grid max-w-[1280px] grid-cols-2 gap-2 px-4 py-4 sm:grid-cols-3" aria-label="移动端导航">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md border-3 border-black bg-white px-3 py-3 text-center text-sm font-black text-black shadow-brutal-sm transition-colors hover:bg-black hover:text-lime"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
