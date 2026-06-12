import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const timeline = [
  { step: '01', title: '准备材料', text: '录取通知书、身份证、高考准考证、团员档案、学籍档案、免冠照等提前放入文件袋。' },
  { step: '02', title: '到校报到', text: '报到地点为山西工程科技职业大学文华校区，时间预计为2026年9月初到中旬。' },
  { step: '03', title: '注册审核', text: '新生入校后由志愿者引导至学院报到，依次完成资格初审与注册报到。' },
  { step: '04', title: '办理事务', text: '完成一卡通中心相关办理，随后安排宿舍并入住公寓。' },
]

const checklist = [
  { title: '证件材料', items: ['录取通知书', '身份证', '高考准考证', '团员档案', '学籍档案', '一寸红底照8张', '户口迁移证（自愿）'] },
  { title: '生活用品', items: ['行李箱', '衣架挂钩', '垃圾袋', '雨伞', '水杯', '小风扇', '锁', '饭盒餐具'] },
  { title: '洗漱床品', items: ['洗面奶', '沐浴露', '牙刷牙膏', '脸盆', '床上四件套', '蚊帐床帘', '凉席'] },
  { title: '学习电子', items: ['电脑', '手机充电器', '耳机', 'U盘', '台灯', '文件夹', '笔记本', '黑蓝红笔'] },
]

const faq = [
  { q: '新生军训一般多长时间？', a: '一般约14天，可能会根据天气状况或政策安排临时调整。' },
  { q: '宿舍是几人间？', a: '男女宿舍均为六人间，均为上床下桌布局，目前通常不可以自行选择。' },
  { q: '宿舍有独立卫浴吗？', a: '没有独立卫浴，每层楼设公共洗漱间，洗澡需前往校内公共浴室。' },
  { q: '学校有几个食堂？', a: '学校有4个食堂：麦道餐厅、和园餐厅、雅园餐厅、德韵轩餐厅。' },
  { q: '生活费准备多少合适？', a: '晋中榆次物价整体中等，月生活费可参考1500-2000元左右。' },
  { q: '快递在哪里取？', a: '东南门取申通、韵达、圆通；北门取顺丰、京东、极兔等。' },
]

const campusInfo = [
  { label: '学校地址', value: '山西省晋中市榆次区文华街369号' },
  { label: '二级学院', value: '设有19个二级学院，涵盖工程、交通、信息、设计、管理等方向' },
  { label: '图书馆时间', value: '周一至周五、周日 6:20-22:20；周六 10:00-22:20' },
  { label: '交通出行', value: '附近有多条公交线路，可前往榆次站、太原南站、太原站等' },
  { label: '浴室使用', value: '东、中、西区均有公共浴室，单独隔间，支持手机扫码按量付费' },
  { label: '作息提醒', value: '宿舍楼门一般早6点开放，晚10点半关闭' },
]

const FreshmanGuideSections = () => {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section id="freshman-guide" ref={ref} className="bg-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-8 bg-blue-accent rounded-full" />
            <span className="brutal-card bg-lime text-black px-3 py-1 text-xs font-black uppercase tracking-widest">
              Freshman Toolkit
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight">新生实用工具箱</h2>
          <p className="mt-3 text-base font-bold text-black/50 max-w-2xl">根据迎新攻略整理，聚焦报到、军训、宿舍、食堂、交通、资助等新生真正需要的信息。</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16">
          <motion.div className="brutal-card bg-lime p-6 md:p-8" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-black text-black mb-6">报到流程时间线</h3>
            <div className="space-y-4">
              {timeline.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-black text-lime border-3 border-black flex items-center justify-center font-black">{item.step}</div>
                  <div className="border-l-3 border-black pl-4 pb-2">
                    <h4 className="font-black text-black">{item.title}</h4>
                    <p className="mt-1 text-sm font-bold text-black/60 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="brutal-card bg-white p-6 md:p-8" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }}>
            <h3 className="text-2xl font-black text-black mb-6">新生必备清单</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checklist.map((group) => (
                <div key={group.title} className="border-3 border-black bg-off-white p-4">
                  <h4 className="font-black text-black mb-3">{group.title}</h4>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm font-bold text-black/60">
                        <span className="mt-1 block w-2 h-2 bg-lime border border-black" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-5">
          <motion.div className="brutal-card bg-black p-6 md:p-8" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.12 }}>
            <h3 className="text-2xl font-black text-lime mb-6">新生常见问题</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faq.map((item) => (
                <div key={item.q} className="border-3 border-lime bg-white p-4">
                  <h4 className="font-black text-black text-sm">Q：{item.q}</h4>
                  <p className="mt-2 text-sm font-medium text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="brutal-card bg-blue-accent p-6 md:p-8" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.16 }}>
            <h3 className="text-2xl font-black text-white mb-6">校园实用信息</h3>
            <div className="space-y-3">
              {campusInfo.map((item) => (
                <div key={item.label} className="bg-white border-3 border-black p-4 shadow-brutal-sm">
                  <p className="text-[10px] font-black text-blue-accent uppercase tracking-widest">{item.label}</p>
                  <p className="mt-1 text-sm font-bold text-black leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FreshmanGuideSections
