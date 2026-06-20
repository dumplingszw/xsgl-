import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { assetPath } from '../utils/assetPath'

const ASSET_BASE = assetPath('/xiaoke-pet')

const petAssets = {
  idle: `${ASSET_BASE}/idle.png`,
  happy: `${ASSET_BASE}/happy.png`,
  thinking: `${ASSET_BASE}/thinking.png`,
  busy: `${ASSET_BASE}/busy.png`,
  sleep: `${ASSET_BASE}/sleep.png`,
}

const bubbles = [
  '你好呀，我是小科，工科大的新生校园助手。',
  '点我右键菜单，可以快速打开新生攻略。',
  '报到材料建议提前放进一个文件袋哦。',
  '军训记得准备防晒、运动鞋、水杯和软鞋垫。',
  '不知道先看什么？从新生必读开始最稳。',
  '宿舍、食堂、快递、交通，我都可以帮你快速找到。',
]

const menuItems = [
  { key: 'guide', icon: '📋', label: '新生攻略', href: '#categories', state: 'happy' },
  { key: 'life', icon: '🏠', label: '生活指南', href: '#categories', state: 'busy' },
  { key: 'articles', icon: '⭐', label: '推荐攻略', href: '#articles', state: 'thinking' },
  { key: 'campus', icon: '📸', label: '校园风光', href: '#campus', state: 'happy' },
  { key: 'top', icon: '🏫', label: '回到首页', href: '#hero', state: 'idle' },
]

const stateItems = [
  { key: 'idle', icon: '🙂', label: '待机' },
  { key: 'happy', icon: '✨', label: '开心' },
  { key: 'thinking', icon: '💭', label: '思考' },
  { key: 'busy', icon: '⚡', label: '忙碌' },
  { key: 'sleep', icon: '🌙', label: '睡觉' },
]

const getPetSize = () => (window.innerWidth < 640 ? 96 : 128)
const isTouchLikeDevice = () => window.matchMedia('(hover: none), (pointer: coarse)').matches

const XiaokePet = () => {
  const [state, setState] = useState('idle')
  const [bubbleIndex, setBubbleIndex] = useState(0)
  const [showBubble, setShowBubble] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [position, setPosition] = useState(() => {
    const saved = window.localStorage.getItem('xiaoke-position')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch {
        return { x: 24, y: 120 }
      }
    }
    return { x: window.innerWidth < 640 ? Math.max(16, window.innerWidth - 112) : 24, y: window.innerWidth < 640 ? Math.max(96, window.innerHeight - 156) : 120 }
  })
  const draggingRef = useRef(false)
  const movedRef = useRef(false)
  const dragOffsetRef = useRef({ x: 0, y: 0 })
  const dragStartRef = useRef({ x: 0, y: 0 })
  const currentBubble = useMemo(() => bubbles[bubbleIndex % bubbles.length], [bubbleIndex])

  useEffect(() => {
    const keepInsideViewport = () => {
      const petSize = getPetSize()
      const margin = window.innerWidth < 640 ? 8 : 0
      setPosition((pos) => ({
        x: Math.min(Math.max(margin, pos.x), window.innerWidth - petSize - margin),
        y: Math.min(Math.max(margin, pos.y), window.innerHeight - petSize - margin),
      }))
    }
    keepInsideViewport()
    window.addEventListener('resize', keepInsideViewport)
    return () => window.removeEventListener('resize', keepInsideViewport)
  }, [])

  useEffect(() => {
    const speechTimer = window.setInterval(() => {
      setBubbleIndex((index) => index + 1)
      setShowBubble(true)
      window.setTimeout(() => setShowBubble(false), 5200)
    }, 12000)

    const idleTimer = window.setInterval(() => {
      if (!menuOpen && !draggingRef.current) {
        setState((oldState) => (oldState === 'sleep' ? 'idle' : 'sleep'))
      }
    }, 22000)

    return () => {
      window.clearInterval(speechTimer)
      window.clearInterval(idleTimer)
    }
  }, [menuOpen])

  useEffect(() => {
    const clampPosition = (x, y) => {
      const petSize = getPetSize()
      const margin = window.innerWidth < 640 ? 8 : 0
      return {
        x: Math.min(Math.max(margin, x), window.innerWidth - petSize - margin),
        y: Math.min(Math.max(margin, y), window.innerHeight - petSize - margin),
      }
    }

    const handlePointerMove = (event) => {
      if (!draggingRef.current) return
      const nextX = event.clientX - dragOffsetRef.current.x
      const nextY = event.clientY - dragOffsetRef.current.y
      const movedX = Math.abs(event.clientX - dragStartRef.current.x)
      const movedY = Math.abs(event.clientY - dragStartRef.current.y)
      if (movedX > 6 || movedY > 6) {
        movedRef.current = true
        setMenuOpen(false)
      }
      setPosition(clampPosition(nextX, nextY))
    }

    const handlePointerUp = () => {
      if (!draggingRef.current) return
      draggingRef.current = false
      setState('idle')
      setPosition((pos) => {
        const next = clampPosition(pos.x, pos.y)
        window.localStorage.setItem('xiaoke-position', JSON.stringify(next))
        return next
      })
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
    }
  }, [])

  const handlePointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    draggingRef.current = true
    movedRef.current = false
    dragStartRef.current = { x: event.clientX, y: event.clientY }
    dragOffsetRef.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    }
    event.currentTarget.setPointerCapture?.(event.pointerId)
    setState('busy')
  }

  const handleContextMenu = (event) => {
    event.preventDefault()
    setMenuOpen((value) => !value)
    setState('happy')
    setShowBubble(false)
  }

  const handlePetClick = () => {
    if (draggingRef.current || movedRef.current) return
    if (isTouchLikeDevice()) {
      setMenuOpen((value) => !value)
      setShowBubble(false)
      setBubbleIndex((index) => index + 1)
    } else {
      setShowBubble(true)
      setBubbleIndex((index) => index + 1)
    }
    setState('happy')
    window.setTimeout(() => setState('idle'), 1800)
  }

  const handleMenuAction = (item) => {
    setState(item.state)
    setMenuOpen(false)
    const target = document.querySelector(item.href)
    if (target) {
      window.history.replaceState(null, '', item.href)
      const y = target.getBoundingClientRect().top + window.scrollY - 88
      window.scrollTo({ top: y, behavior: 'smooth' })
    } else {
      window.location.hash = item.href
    }
    window.setTimeout(() => setState('idle'), 1800)
  }

  return (
    <div
      className="fixed z-[90] select-none"
      style={{ left: position.x, top: position.y }}
      onContextMenu={handleContextMenu}
    >
      <AnimatePresence>
        {showBubble && !menuOpen && (
          <motion.div
            key={currentBubble}
            initial={{ opacity: 0, y: 16, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.92 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="absolute bottom-[92px] left-1/2 w-[220px] -translate-x-1/2 rounded-[14px] border-[1.5px] border-[#FFD4DC] bg-white/95 px-3 py-2 text-xs font-medium leading-relaxed text-[#4A4A4A] shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-md after:absolute after:left-1/2 after:top-full after:h-0 after:w-0 after:-translate-x-1/2 after:border-x-[10px] after:border-t-[12px] after:border-x-transparent after:border-t-white/95 sm:bottom-[118px] sm:w-[280px] sm:px-4 sm:py-3 sm:text-sm"
          >
            {currentBubble}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.86 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-[88px] right-0 w-[min(210px,calc(100vw-24px))] rounded-[14px] border-[1.5px] border-[#FFD4DC] bg-white/95 p-2 shadow-[0_14px_34px_rgba(0,0,0,0.16)] backdrop-blur-md sm:bottom-[110px] sm:w-[210px]"
          >
            <div className="px-3 py-2">
              <p className="text-[11px] font-bold tracking-widest text-[#FF8095]">小科菜单</p>
              <p className="text-xs text-[#9B9B9B]">可拖到任意位置，也可切换状态</p>
            </div>
            <div className="my-1 h-px bg-[#F0E0E5]" />
            {menuItems.map((item) => (
              <button
                type="button"
                key={item.key}
                onClick={() => handleMenuAction(item)}
                className="flex w-full items-center gap-3 rounded-[10px] px-3 py-2.5 text-left text-sm font-bold text-[#4A4A4A] transition-all hover:bg-[#FFF0F3] hover:text-[#FF8095]"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            <div className="my-1 h-px bg-[#F0E0E5]" />
            <div className="px-3 py-2">
              <p className="text-[11px] font-bold tracking-widest text-[#217DD1]">状态切换</p>
            </div>
            <div className="grid grid-cols-2 gap-1 px-1 pb-1">
              {stateItems.map((item) => (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => {
                    setState(item.key)
                    setShowBubble(item.key !== 'sleep')
                    setMenuOpen(false)
                  }}
                  className={`flex items-center gap-1.5 rounded-[9px] px-2 py-2 text-left text-xs font-bold transition-all ${
                    state === item.key
                      ? 'bg-[#FFF0F3] text-[#FF8095]'
                      : 'text-[#4A4A4A] hover:bg-[#FFF0F3] hover:text-[#FF8095]'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onPointerDown={handlePointerDown}
        onClick={handlePetClick}
        className="relative flex h-24 w-24 touch-none cursor-grab items-center justify-center rounded-full bg-transparent active:cursor-grabbing sm:h-[128px] sm:w-[128px]"
        animate={{
          y: state === 'sleep' ? 8 : [0, -6, 0],
          rotate: state === 'thinking' ? [0, -3, 3, 0] : 0,
          scale: state === 'happy' ? [1, 1.06, 1] : state === 'sleep' ? 0.96 : 1,
        }}
        transition={{ duration: 3, repeat: state === 'sleep' ? 0 : Infinity, ease: 'easeInOut' }}
        aria-label="小科校园助手"
        title="左键拖拽/点击，右键打开菜单"
      >
        <img
          src={petAssets[state] || petAssets.idle}
          alt="小科校园助手"
          draggable="false"
          className="h-24 w-24 object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.22)] sm:h-[128px] sm:w-[128px]"
        />
        <span className="absolute -right-1 bottom-2 rounded-full border-2 border-black bg-lime px-2 py-0.5 text-[10px] font-black text-black shadow-brutal-sm">
          小科
        </span>
      </motion.button>
    </div>
  )
}

export default XiaokePet
