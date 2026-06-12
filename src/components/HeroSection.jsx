import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-lime">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 40px)`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Logo + Badge */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-[8px] p-2">
                <img
                  src="/logo.png"
                  alt="工科生初心汇"
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </div>
              <span className="brutal-card bg-black text-lime px-4 py-2 text-xs font-black uppercase tracking-widest">
                2026 新生开学指南
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-black leading-[1.1] tracking-tight">
              山西工程科技
              <br />
              <span className="relative">
                职业大学
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8 Q75 2 150 8 T298 6" stroke="#217DD1" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              className="mt-6 text-lg md:text-xl font-bold text-black/70 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              欢迎来到山西工程科技职业大学，这里是由工科大初心汇制作的2026新生攻略。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#categories" className="brutal-card brutal-card-hover bg-black text-lime px-6 py-3.5 text-sm font-black uppercase tracking-wider inline-flex items-center gap-2">
                <span>立即开始</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#campus" className="brutal-card brutal-card-hover bg-white text-black px-6 py-3.5 text-sm font-black uppercase tracking-wider inline-flex items-center gap-2">
                <span>校园风光</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                </svg>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 flex gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {[
                { value: '6', label: '攻略模块' },
                { value: '21+', label: '篇攻略' },
                { value: '2026', label: '新生届' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-black text-black">{stat.value}</div>
                  <div className="text-xs font-bold text-black/50 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual Card Stack */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Main card */}
            <div className="brutal-card bg-white p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-lime border-3 border-black flex items-center justify-center text-xl">
                  🎓
                </div>
                <div>
                  <h3 className="text-lg font-black text-black">新生入学必读</h3>
                  <p className="text-xs font-bold text-gray-500">6大核心模块全覆盖</p>
                </div>
              </div>

              {/* Mini category preview */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: '📋', label: '新生必读', color: 'bg-lime' },
                  { icon: '🏠', label: '生活指南', color: 'bg-black text-lime' },
                  { icon: '📚', label: '学习资源', color: 'bg-lime' },
                  { icon: '🏗️', label: '实训设施', color: 'bg-blue-accent text-white' },
                  { icon: '📍', label: '周边服务', color: 'bg-black text-lime' },
                  { icon: '🚀', label: '就业发展', color: 'bg-lime' },
                ].map((cat) => (
                  <div key={cat.label} className={`border-2 border-black p-3 flex flex-col items-center gap-1 ${cat.color}`}>
                    <span className="text-xl">{cat.icon}</span>
                    <span className="text-[10px] font-bold">{cat.label}</span>
                  </div>
                ))}
              </div>

              {/* Placeholder for photo */}
              <div className="mt-6 border-3 border-black bg-off-white h-40 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl mb-2">📸</p>
                  <p className="text-xs font-bold text-gray-400">校园实景照片</p>
                  <p className="text-[10px] text-gray-300 mt-1">后续可替换为真实照片</p>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 brutal-card bg-blue-accent text-white px-5 py-3 z-10"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-xs font-bold">工科生初心汇制作</p>
              <p className="text-[10px] text-white/70 mt-0.5">V2.0 Website Edition</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-black border-t-3 border-black overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-3">
          {Array(2).fill(null).map((_, i) => (
            <span key={i} className="inline-block">
              {['新生必读', '生活指南', '学习资源', '实训设施', '周边服务', '就业发展', '★', '☆'].map((text, j) => (
                <span key={`${i}-${j}`} className="mx-4 text-sm font-black text-lime">
                  {text}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
