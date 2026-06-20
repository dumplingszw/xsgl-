import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const guideIndex = [
  {
    chapter: '第一章 入门：工科大新生必看',
    items: ['军训篇', '学校住宿篇', '学校食堂篇', '专业特色篇', '周边环境篇', '城市特点篇', '卫浴卫生篇', '社团组织概览', '入党流程', '新生反诈', '开学物品准备', '来校方式', '军训注意事项', '新生入学须知'],
  },
  {
    chapter: '第二章 开端：工科大校园介绍',
    items: ['学院与机构设置', '学院及专业一览', '图书馆使用', '校园出行', '校园地图', '宿舍介绍', '体育馆介绍', '操场介绍', '食堂介绍', '校园吃喝玩乐'],
  },
  {
    chapter: '第三章 必备：工科大生活指南',
    items: ['作息时间表', '校历', '如何就医', '校园专属资源', '快递取件', '洗浴流程', '校园日常生活'],
  },
  {
    chapter: '第四章 进阶：工科大学生干货',
    items: ['成绩绩点综测', '体育课与体测', '第二学士学位', '选课操作说明', '学生证补办', '资助政策与奖学金'],
  },
]

const FullGuideIndex = () => {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section ref={ref} className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-8 bg-lime rounded-full" />
            <span className="brutal-card bg-lime text-black px-3 py-1 text-xs font-black uppercase tracking-widest">Full Index</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-lime tracking-tight">完整攻略索引</h2>
          <p className="mt-3 text-base font-bold text-white/40 max-w-2xl">这里展示已从文档导入并归档的网站内容范围，方便新生快速了解攻略覆盖了哪些主题。</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {guideIndex.map((chapter, index) => (
            <motion.article
              key={chapter.chapter}
              className="brutal-card bg-white p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3 className="text-xl font-black text-black mb-4">{chapter.chapter}</h3>
              <div className="flex flex-wrap gap-2">
                {chapter.items.map((item) => (
                  <span key={item} className="border-2 border-black bg-lime px-2.5 py-1 text-xs font-black text-black shadow-brutal-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FullGuideIndex
