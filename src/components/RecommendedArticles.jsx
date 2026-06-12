import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const articles = [
  {
    id: 1,
    tag: '新生须知',
    tagColor: 'bg-lime text-black',
    date: '2026-09',
    title: '2026新生入学须知',
    description: '报到时间预计为2026年9月初到中旬，报到地点为山西工程科技职业大学文华校区。新生入校后由志愿者引导完成资格初审、注册报到、宿舍入住等流程。',
    featured: true,
    details: [
      '报到时间以录取通知书和学校官方通知为准，建议新生提前关注学院通知。',
      '入校后一般由志愿者引导到学院报到点，依次完成资格初审、注册报到、宿舍安排等事项。',
      '建议提前准备录取通知书、身份证、高考准考证、团员档案、学籍档案、免冠照片等材料。',
    ],
  },
  {
    id: 2,
    tag: '军训指南',
    tagColor: 'bg-blue-accent text-white',
    date: '入学后',
    title: '军训注意事项',
    description: '军训一般约14天，包含军事技能训练和军事理论学习。建议准备运动鞋、防晒用品、风油精、软鞋垫，并注意补水和按时休息。',
    featured: false,
    details: [
      '军训内容通常包含站军姿、队列训练、军事理论学习、红歌学习、主题影片观看等。',
      '准备舒适鞋垫、防晒用品、水杯、常用药品，训练期间身体不适要及时说明。',
      '军训期间注意防暑、防晒和补水，不要硬撑。',
    ],
  },
  {
    id: 3,
    tag: '宿舍生活',
    tagColor: 'bg-lime text-black',
    date: '入住前',
    title: '宿舍生活与入住指南',
    description: '宿舍多为六人间、上床下桌布局。每层设公共水房和卫生间，东、中、西区均设公共浴室，宿舍楼门开放时间一般为6:00至22:30。',
    featured: false,
    details: [
      '学校共有17栋学生公寓，均位于文华校区。旧楼多在中区，新楼多在东区和西区。',
      '宿舍多为六人间，上床下桌，配独立衣柜，部分楼栋有小阳台。',
      '每层有公共水房和卫生间，配热水机、公共洗衣机、自助吹风机等设施。',
    ],
  },
  {
    id: 4,
    tag: '资助政策',
    tagColor: 'bg-black text-lime',
    date: '长期有效',
    title: '奖学金与资助政策',
    description: '本专科生国家奖学金每生每年10000元，国家励志奖学金每生每年6000元，国家助学金平均每生每年3700元，家庭经济困难新生可通过绿色通道办理入学手续。',
    featured: false,
    details: [
      '本专科生国家奖学金：每生每年10000元。',
      '本专科生国家励志奖学金：每生每年6000元。',
      '本专科生国家助学金：平均每生每年3700元，具体等级以学校当年通知为准。',
      '家庭经济特别困难新生可通过绿色通道先办理入学手续。',
    ],
  },
]

const RecommendedArticles = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedArticle, setSelectedArticle] = useState(null)

  useEffect(() => {
    if (!selectedArticle) return undefined
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [selectedArticle])

  const closeArticle = () => setSelectedArticle(null)

  return (
    <section id="articles" ref={ref} className="relative bg-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-8 bg-lime rounded-full" />
            <span className="brutal-card bg-lime text-black px-3 py-1 text-xs font-black uppercase tracking-widest">
              Recommended
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-lime tracking-tight">
            推荐攻略
          </h2>
          <p className="mt-3 text-base font-bold text-white/40 max-w-xl">
            每张卡片都可以点击打开详情，不再只是静态展示。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {articles.map((article, index) => (
            <motion.button
              type="button"
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className={`brutal-card brutal-card-hover cursor-pointer group text-left ${
                article.featured ? 'lg:col-span-2 bg-lime' : 'bg-white'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-black px-2.5 py-1 border-2 border-black ${article.tagColor}`}>
                    {article.tag}
                  </span>
                  <span className={`text-xs font-bold ${article.featured ? 'text-black/40' : 'text-gray-400'}`}>
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-2 leading-snug text-black">
                  {article.title}
                </h3>
                <p className={`text-sm leading-relaxed ${article.featured ? 'text-black/60' : 'text-gray-500'}`}>
                  {article.description}
                </p>
                {article.image && (
                  <img src={article.image} alt={`${article.title}配图`} className="mt-4 h-40 w-full border-3 border-black object-cover" />
                )}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-accent group-hover:underline">
                    点开详情
                  </span>
                  <svg className="w-3.5 h-3.5 text-blue-accent group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 z-[105] bg-black/75 p-4 backdrop-blur-sm md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeArticle}
          >
            <motion.article
              className="mx-auto flex max-h-[88vh] max-w-4xl flex-col overflow-hidden border-3 border-black bg-white shadow-[10px_10px_0px_#84cc16]"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <header className="flex items-start justify-between gap-4 border-b-3 border-black bg-lime p-5 md:p-6">
                <div>
                  <span className={`inline-block border-3 border-black px-3 py-1 text-[10px] font-black shadow-brutal-sm ${selectedArticle.tagColor}`}>
                    {selectedArticle.tag}
                  </span>
                  <h3 className="mt-3 text-2xl font-black text-black md:text-4xl">{selectedArticle.title}</h3>
                  <p className="mt-2 text-sm font-bold text-black/60">{selectedArticle.description}</p>
                </div>
                <button
                  type="button"
                  onClick={closeArticle}
                  className="shrink-0 border-3 border-black bg-white px-4 py-2 text-xl font-black text-black shadow-brutal transition-all hover:bg-black hover:text-lime"
                  aria-label="关闭推荐攻略详情"
                >
                  ×
                </button>
              </header>
              <div className="overflow-y-auto p-5 md:p-6">
                {selectedArticle.image && (
                  <img src={selectedArticle.image} alt={`${selectedArticle.title}原始配图`} className="mb-5 max-h-[360px] w-full border-3 border-black object-cover" />
                )}
                <ul className="space-y-3">
                  {selectedArticle.details.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-bold leading-relaxed text-black/70">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 border border-black bg-lime" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default RecommendedArticles
