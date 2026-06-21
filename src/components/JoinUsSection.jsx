import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { assetPath } from '../utils/assetPath'

const JoinUsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true })

  return (
    <section id="join-us" ref={ref} className="relative overflow-hidden bg-off-white py-20 md:py-28 scroll-mt-24">
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-8 w-1.5 rounded-full bg-blue-accent" />
            <span className="brutal-card bg-lime px-3 py-1 text-xs font-black uppercase tracking-widest text-black">
              Join Us
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-black md:text-4xl lg:text-5xl">加入我们</h2>
          <p className="mt-3 max-w-2xl text-base font-bold leading-relaxed text-black/50">
            想参与新生攻略制作、校园内容整理、活动运营或同学互助？欢迎加入工科大初心汇，一起把这份指南做得更好。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <motion.div
            className="brutal-card bg-black p-6 text-white md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className="text-2xl font-black text-lime md:text-3xl">我们欢迎这样的你</h3>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { title: '内容整理', text: '一起补充新生常问问题、校园生活经验和实用攻略。' },
                { title: '视觉设计', text: '参与海报、页面素材、活动视觉和社群内容设计。' },
                { title: '技术协作', text: '帮助维护网站、优化交互体验、制作新功能。' },
                { title: '活动运营', text: '参与新生答疑、线上宣传、社群维护和校园活动。' },
              ].map((item) => (
                <div key={item.title} className="border-3 border-lime bg-white p-4 text-black">
                  <h4 className="text-base font-black">{item.title}</h4>
                  <p className="mt-2 text-sm font-bold leading-relaxed text-black/55">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 border-l-4 border-lime bg-white/10 px-4 py-3 text-sm font-bold leading-relaxed text-white/70">
              扫描右侧二维码，按提示加入或咨询。也可以先收藏网站，后续关注招新与活动通知。
            </div>
          </motion.div>

          <motion.div
            className="brutal-card bg-lime p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <div className="flex flex-col items-center text-center">
              <span className="border-3 border-black bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black shadow-brutal-sm">
                Scan QR Code
              </span>
              <h3 className="mt-4 text-2xl font-black text-black">扫码加入/咨询</h3>
              <p className="mt-2 max-w-sm text-sm font-bold leading-relaxed text-black/55">
                用微信扫描二维码，了解工科大初心汇招新、活动和新生服务相关信息。
              </p>
              <div className="mt-6 w-full max-w-[360px] border-3 border-black bg-white p-4 shadow-brutal">
                <img
                  src={assetPath('/join-us-qr.jpg')}
                  alt="加入工科大初心汇二维码"
                  className="mx-auto aspect-square w-full object-contain"
                />
              </div>
              <p className="mt-4 text-xs font-black leading-relaxed text-black/50">
                如果图片加载较慢，请稍等或刷新页面后重试。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default JoinUsSection
